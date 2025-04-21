import React, { useState } from 'react';
import {
  FaUserEdit, FaSave, FaPhone, FaEnvelope, FaBirthdayCake,
  FaUser, FaNotesMedical, FaUpload, FaMapMarkerAlt, FaBriefcase, FaIdCard
} from 'react-icons/fa';

const nigeriaStates = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
  'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu',
  'FCT - Abuja', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina',
  'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo',
  'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
];

const userProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'Temi Williams',
    email: 'temiwilliams@example.com',
    phone: '+234 810 000 0000',
    dob: '1990-05-10',
    gender: 'Male',
    address: '123 Freedom Street',
    state: 'Lagos',
    occupation: 'Software Engineer',
  });

  const [medicalInfo, setMedicalInfo] = useState({
    bloodType: 'O+',
    weight: '80kg',
    height: '170cm',
    allergies: 'Peanuts',
    chronicConditions: 'Asthma',
    currentMedications: 'Inhaler',
  });

  const [emergencyContact, setEmergencyContact] = useState({
    name: 'Jane Doe',
    phone: '+234 901 234 5678'
  });

  const handleChange = (section, field, value) => {
    if (section === 'personal') {
      setPersonalInfo({ ...personalInfo, [field]: value });
    } else if (section === 'medical') {
      setMedicalInfo({ ...medicalInfo, [field]: value });
    } else if (section === 'emergency') {
      setEmergencyContact({ ...emergencyContact, [field]: value });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Connect to backend here
    setIsEditing(false);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base sm:text-2xl font-semibold text-primary">Patient Profile</h2>
        <button
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
          className={`p-2 sm:p-4 rounded-lg flex items-center gap-2 text-xs sm:text-base text-white transition ${isEditing ? 'bg-secondary hover:bg-darkSecondary' : 'bg-secondary hover:bg-darkSecondary'}`}>
          {isEditing ? <><FaSave /> Save</> : <><FaUserEdit /> Edit</>}
        </button>
      </div>

      {/* Profile Image */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-24 h-24">
          <img
            src={profileImage || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="rounded-full w-full h-full object-cover border-2 border-primary"
          />
          {isEditing && (
            <label className="absolute bottom-0 right-0 bg-white p-1 rounded-full cursor-pointer shadow-md">
              <FaUpload className="text-primary" />
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            </label>
          )}
        </div>
        <div>
          <h4 className="text-xl font-medium">{personalInfo.fullName}</h4>
          <p className="text-sm text-gray-600">{personalInfo.email}</p>
        </div>
      </div>

      {/* Personal Info */}
      <div className="bg-white rounded-lg mb-6">
        <h3 className="text-lg text-primary">Personal Information</h3>
        <hr className='mb-4' />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Fields */}
          {[
            { label: 'Full Name', field: 'fullName', icon: <FaUser /> },
            { label: 'Email', field: 'email', icon: <FaEnvelope /> },
            { label: 'Phone Number', field: 'phone', icon: <FaPhone /> },
            { label: 'Date of Birth', field: 'dob', icon: <FaBirthdayCake /> },
            { label: 'Gender', field: 'gender', icon: <FaIdCard /> },
            { label: 'Address', field: 'address', icon: <FaMapMarkerAlt /> },
            { label: 'State', field: 'state', icon: <FaMapMarkerAlt />, isDropdown: true },
            { label: 'Occupation', field: 'occupation', icon: <FaBriefcase /> },
          ].map(({ label, field, icon, isDropdown }) => (
            <div key={field}>
              <label className="text-xs font-medium text-darkPrimary flex items-center gap-1">{icon} {label}</label>
              {isEditing ? (
                isDropdown ? (
                  <select
                    value={personalInfo[field]}
                    onChange={(e) => handleChange('personal', field, e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  >
                    {nigeriaStates.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    value={personalInfo[field]}
                    onChange={(e) => handleChange('personal', field, e.target.value)}
                    className="w-full px-2 py-4 border border-gray-300 rounded-xl mt-1"
                  />
                )
              ) : (
                <p className="mt-1 text-gray-800 text-sm">{personalInfo[field]}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Medical Info */}
      <div className="bg-white rounded-lg mb-6">
        <h3 className="text-lg text-primary">Medical Information</h3>
        <hr className='mb-4' />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Blood Type', field: 'bloodType' },
            { label: 'Allergies', field: 'allergies' },
            { label: 'Chronic Conditions', field: 'chronicConditions' },
            { label: 'Current Medications', field: 'currentMedications' },
          ].map(({ label, field }) => (
            <div key={field}>
              <label className="text-xs font-medium text-darkPrimary flex items-center gap-1"><FaNotesMedical /> {label}</label>
              {isEditing ? (
                <input
                  type="text"
                  value={medicalInfo[field]}
                  onChange={(e) => handleChange('medical', field, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              ) : (
                <p className="mt-1 text-gray-800">{medicalInfo[field]}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-white rounded-lg">
        <h3 className="text-lg text-primary">Emergency Contact</h3>
        <hr className='mb-4' />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-darkPrimary">Name</label>
            {isEditing ? (
              <input
                type="text"
                value={emergencyContact.name}
                onChange={(e) => handleChange('emergency', 'name', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            ) : (
              <p className="mt-1 text-gray-800">{emergencyContact.name}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600">Phone</label>
            {isEditing ? (
              <input
                type="text"
                value={emergencyContact.phone}
                onChange={(e) => handleChange('emergency', 'phone', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            ) : (
              <p className="mt-1 text-gray-800">{emergencyContact.phone}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default userProfile;
