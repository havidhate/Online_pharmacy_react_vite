// src/components/PrescriptionUpload/FilePreview.jsx
import React from "react";
import PropTypes from "prop-types";

const FilePreview = ({ file }) => {
  const url = URL.createObjectURL(file);
  return (
    <div className="mt-4">
      <h4 className="font-semibold">Preview:</h4>
      {file.type.startsWith("image") ? (
        <img src={url} alt="preview" className="max-h-64" />
      ) : (
        <a href={url} download={file.name} className="text-blue-600">
          Download {file.name}
        </a>
      )}
    </div>
  );
};

FilePreview.propTypes = {
  file: PropTypes.object.isRequired,
};

export default FilePreview;
