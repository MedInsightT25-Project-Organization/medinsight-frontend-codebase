import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

const HealthcareProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Eredo Primary Healthcare Center",
    services: [
      "Emergency Medical Services",
      "Maternity & Obstetric Care",
      "HIV/AIDS Testing & Treatment",
      "Pediatrics",
      "Family Planning",
      "Tuberculosis & Malaria Screening",
      "Health Promotion",
    ],
    address: "Eredo Town, Epe, Lagos",
    lga: "Eredo",
    state: "Lagos",
    workHours: "Monday - Friday, 8 AM - 6 PM",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleServiceChange = (index, value) => {
    const newServices = [...formData.services];
    newServices[index] = value;
    setFormData((prev) => ({ ...prev, services: newServices }));
  };

  const handleSave = () => {
    // Simulate save logic here (API call, etc.)
    setIsEditing(false);
    console.log("Saved data:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl sm:text-3xl text-secondary mb-2">Profile</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-2 text-sm btn bg-darkSecondary hover:bg-secondary text-white rounded-xl transition"
        >
          <FaEdit /> {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6 space-y-6">
        {/* Name */}
        <div>
          <label className="text-sm text-gray-600">Name</label>
          {isEditing ? (
            <input
              className="w-full border rounded px-3 py-2 mt-1"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          ) : (
            <p className="text-lg font-medium mt-1">{formData.name}</p>
          )}
        </div>

        {/* Services */}
        <div>
          <label className="text-sm text-gray-600">Services</label>
          <ul className="mt-2 space-y-1">
            {formData.services.map((service, i) =>
              isEditing ? (
                <input
                  key={i}
                  className="w-full border rounded px-3 py-2"
                  value={service}
                  onChange={(e) => handleServiceChange(i, e.target.value)}
                />
              ) : (
                <li key={i} className="text-gray-800">• {service}</li>
              )
            )}
          </ul>
        </div>

        {/* Address, LGA, State */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["address", "lga", "state"].map((field) => (
            <div key={field}>
              <label className="text-sm text-gray-600 capitalize">{field}</label>
              {isEditing ? (
                <input
                  className="w-full border rounded px-3 py-2 mt-1"
                  value={formData[field]}
                  onChange={(e) => handleChange(field, e.target.value)}
                />
              ) : (
                <p className="mt-1">{formData[field]}</p>
              )}
            </div>
          ))}
        </div>

        {/* Work Hours */}
        <div>
          <label className="text-sm text-gray-600">Work Hours</label>
          {isEditing ? (
            <input
              className="w-full border rounded px-3 py-2 mt-1"
              value={formData.workHours}
              onChange={(e) => handleChange("workHours", e.target.value)}
            />
          ) : (
            <p className="mt-1">{formData.workHours}</p>
          )}
        </div>

        {/* Save Button */}
        {isEditing && (
          <div className="text-right">
            <button
              onClick={handleSave}
              className="btn bg-darkSecondary hover:bg-secondary text-white rounded-xl transition"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthcareProfile;
