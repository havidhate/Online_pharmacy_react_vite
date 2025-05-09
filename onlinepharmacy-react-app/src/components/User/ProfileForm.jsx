// src/components/User/ProfileForm.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";

const ProfileForm = ({ initialData, onSave }) => {
  const [data, setData] = useState(initialData);
  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(data);
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="fullName"
          value={data.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="p-2 border rounded"
        />
        <input
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          className="p-2 border rounded"
        />
        {/* add more fields */}
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-teal-600 text-white rounded"
      >
        Save Profile
      </button>
    </form>
  );
};

ProfileForm.propTypes = {
  initialData: PropTypes.object.isRequired,
  onSave: PropTypes.func,
};

export default ProfileForm;
