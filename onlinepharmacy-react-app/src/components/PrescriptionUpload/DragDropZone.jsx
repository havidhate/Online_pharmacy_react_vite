// src/components/PrescriptionUpload/DragDropZone.jsx
import React, { useRef } from "react";
import PropTypes from "prop-types";

const DragDropZone = ({ onFileSelect }) => {
  const ref = useRef();
  const handleDrop = (e) => {
    e.preventDefault();
    onFileSelect(e.dataTransfer.files[0]);
  };
  return (
    <div
      ref={ref}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onClick={() => ref.current.querySelector("input").click()}
      className="border-2 border-dashed p-8 text-center cursor-pointer"
    >
      <input
        type="file"
        accept="image/*,application/pdf"
        hidden
        onChange={(e) => onFileSelect(e.target.files[0])}
      />
      Drag & drop or click to upload prescription
    </div>
  );
};

DragDropZone.propTypes = {
  onFileSelect: PropTypes.func.isRequired,
};

export default DragDropZone;
