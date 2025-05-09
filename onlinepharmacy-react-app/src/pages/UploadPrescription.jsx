// src/pages/UploadPrescription.jsx
import React, { useState } from "react";
import DragDropZone from "../components/PrescriptionUpload/DragDropZone";
import FilePreview from "../components/PrescriptionUpload/FilePreview";

const UploadPrescription = () => {
  const [file, setFile] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Your Prescription</h1>
      <DragDropZone onFileSelect={setFile} />
      {file && <FilePreview file={file} />}
    </div>
  );
};

export default UploadPrescription;
