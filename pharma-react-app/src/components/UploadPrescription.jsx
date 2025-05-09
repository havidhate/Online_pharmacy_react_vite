import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  prescription: yup
    .mixed()
    .required("Prescription file is required")
    .test(
      "fileSize",
      "File too large",
      (value) => value && value[0].size < 2000000
    )
    .test(
      "fileType",
      "Unsupported Format",
      (value) =>
        value &&
        ["image/jpeg", "image/png", "application/pdf"].includes(value[0].type)
    ),
});

const UploadPrescription = ({ onUpload }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    onUpload(data.prescription[0]);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 space-y-4 bg-white dark:bg-gray-900 shadow rounded"
    >
      <label>Upload Prescription (PDF/JPG/PNG):</label>
      <input type="file" {...register("prescription")} />
      {errors.prescription && (
        <p className="text-red-500">{errors.prescription.message}</p>
      )}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Upload
      </button>
    </form>
  );
};

export default UploadPrescription;
