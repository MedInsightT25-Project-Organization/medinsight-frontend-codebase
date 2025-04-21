import React, { useState } from 'react';
import { FaArrowLeft, FaClock, FaHospitalSymbol, FaPaperPlane } from 'react-icons/fa';
import { healthcareCenters } from '../../../assets/data';
import HospitalRating from '../../../Components/HospitalRating';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { MdLocationPin } from 'react-icons/md';


const Consultation = () => {
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState('');

  const sendMessage = () => {
    if (newMsg.trim()) {
      setMessages([...messages, { text: newMsg, sender: 'user' }]);
      setNewMsg('');
      // Mock hospital response
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "We'll get back to you shortly.", sender: 'admin' }]);
      }, 1000);
    }
  };

  return (
    <div className=" h-full">
      <h4 className="text-xl text-primary mb-4">Consult a Hospital Admin</h4>

      {!selectedHospital ? (
        <div>
          <input
            type="text"
            placeholder="Search hospitals..."
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {healthcareCenters.map((hospital) => (

              <div
                onClick={() => setSelectedHospital(hospital)}
                key={hospital.id}
                className="flex flex-col bg-white card-shadow p-6 rounded-xl card-shadow transition duration-300 ease-in-out hover:shadow-lg cursor-pointer"
              >
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                  <div className="flex flex-col gap-2 w-full">
                    {/* Name & Verified Badge */}
                    <div className="flex items-center gap-1">
                      <h4 className="text-lg sm:text-xl font-semibold text-primary leading-tight flex items-center">
                        {hospital.name} <RiVerifiedBadgeFill className="text-secondary text-xl sm:text-2xl ml-1" />
                      </h4>

                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 border-l-4 border-primary pl-2">
                      <MdLocationPin className="text-lg text-gray-600" />
                      <span className="text-sm text-gray-700">
                        {hospital.lga}, {hospital.state}.
                      </span>
                    </div>

                    {/* ratings */}
                    <HospitalRating ratings={hospital.ratings} />
                  </div>


                </div>
                {/* Work Hours */}
                <div className="flex items-center gap-2 p-2 rounded-xl bg-green-300 bg-opacity-15 mt-4">
                  <div className="p-1 bg-white shadow-md rounded-full flex items-center justify-center">
                    <FaClock className="text-darkSecondary text-md" />
                  </div>
                  <h5 className="text-xs sm:text-sm font-medium leading-tight text-gray-700">
                    {hospital.workHours}
                  </h5>
                </div>

                <p className="text-sm text-gray-600 mt-2">Click to start a conversation</p>

              </div>

            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-[600px] bg-white rounded-xl soft-shadow relative">
          {/* Chat Header */}
          <div className="flex items-center justify-between bg-primary text-white p-4 rounded-t-xl">
            <div className="flex items-center gap-2">
              <FaArrowLeft className="cursor-pointer" onClick={() => setSelectedHospital(null)} />
              <h5 className="font-medium text-xs sm:text-sm text-white">{selectedHospital.name}</h5>
            </div>
            <span className="text-[.7rem] sm:text-sm">Admin</span>
          </div>

          {/* Message Feed */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-xs p-3 rounded-lg ${msg.sender === 'user' ? 'bg-primary bg-opacity-10 self-end ml-auto' : 'bg-secondary bg-opacity-10 self-start'
                  }`}
              >
                <p className="text-sm">{msg.text}</p>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200 flex items-center gap-2 w-full max-w-full">
            <input
              value={newMsg}
              onChange={(e) => setNewMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              type="text"
              placeholder="Type your message..."
              className="flex-1 min-w-0 px-2 py-4 border border-gray-300 rounded-lg text-sm"
            />
            <button
              onClick={sendMessage}
              className="shrink-0 bg-secondary text-white p-4 rounded-lg hover:bg-darkSecondary transition"
            >
              <FaPaperPlane />
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Consultation;
