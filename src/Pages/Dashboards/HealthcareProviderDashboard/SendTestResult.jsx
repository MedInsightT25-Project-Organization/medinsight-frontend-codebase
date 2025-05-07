import { useState, useEffect } from "react";
import { FaPaperclip } from "react-icons/fa";
import { MdOutlineStickyNote2 } from "react-icons/md";

const SendTestResult = () => {
  const [patient, setPatient] = useState("");
  const [testType, setTestType] = useState("");
  const [result, setResult] = useState("");
  const [note, setNote] = useState("");
  const [via, setVia] = useState({ email: true, sms: false, portal: false });

  // Modal and Sidebar state
  const [showModal, setShowModal] = useState(false); // Success overlay
  const [showSidebar, setShowSidebar] = useState(false); // Sidebar for result
  const [testResults, setTestResults] = useState(() => {
    // Retrieve saved test results from localStorage, or initialize as an empty array
    const savedResults = localStorage.getItem("testResults");
    return savedResults ? JSON.parse(savedResults) : [];
  });

  const handleCheckbox = (type) => {
    setVia({ ...via, [type]: !via[type] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new test result object
    const newResult = {
      patient,
      testType,
      result,
      note,
      id: new Date().getTime(), // Add a unique ID based on timestamp
    };

    // Add new result to the existing results array
    const updatedResults = [...testResults, newResult];

    // Show the success overlay modal
    setShowModal(true);

    // After a short delay, hide the success overlay and show the sidebar modal
    setTimeout(() => {
      setShowModal(false);
      setShowSidebar(true);
      setTestResults(updatedResults); // Update the state with the new results array
      localStorage.setItem("testResults", JSON.stringify(updatedResults)); // Save updated results to localStorage
    }, 3000); // Show the success overlay for 3 seconds

    // Optionally, clear the form after submission
    setPatient("");
    setTestType("");
    setResult("");
    setNote("");
  };

  const handleSidebarToggle = () => {
    setShowSidebar((prev) => !prev);
  };

  useEffect(() => {
    // Keep the sidebar visible if there is existing data in localStorage
    if (testResults.length > 0) {
      setShowSidebar(true);
    }
  }, [testResults]);

  return (
    <div className="max-w-full mx-auto">
      <h2 className="text-xl sm:text-2xl text-secondary mb-2">Send Test Result</h2>
      <p className="text-gray-600 mb-6 text-[.7rem] sm:text-xs">
        Securely send diagnostic test results to a patient.
      </p>

      <form className="space-y-6 bg-white shadow-md p-6 rounded-2xl" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 font-medium text-gray-700 text-sm">Select Patient</label>
          <input
            type="text"
            placeholder="Search patient by name or ID"
            className="w-full border border-gray-300 p-3 text-sm rounded-lg focus:ring focus:ring-blue-200"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700 text-sm">Test Type</label>
          <input
            type="text"
            placeholder="Input test type / category"
            className="w-full border border-gray-300 p-3 text-sm rounded-lg focus:ring focus:ring-blue-200"
            value={testType}
            onChange={(e) => setTestType(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-sm text-gray-700">Result Summary</label>
          <textarea
            rows="4"
            maxLength={500}
            className="w-full border border-gray-300 p-3 text-sm rounded-lg"
            placeholder="Summarize the test result (max 500 characters)"
            value={result}
            onChange={(e) => setResult(e.target.value)}
          ></textarea>
          <p className="text-sm text-gray-400 text-right mt-1">{result.length}/500</p>
        </div>

        <div>
          <label className="block mb-1 font-medium text-sm text-gray-700">Attach File</label>
          <div className="flex items-center gap-2 border border-gray-300 p-3 rounded-lg">
            <FaPaperclip className="text-gray-500" />
            <input type="file" className="w-full text-sm" />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium text-sm text-gray-700">Add Note to Patient (Optional)</label>
          <textarea
            rows="3"
            className="w-full border border-gray-300 p-3 rounded-lg text-sm"
            placeholder="E.g. Next steps, instructions, etc."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-darkSecondary hover:bg-secondary text-white text-sm font-normal px-6 py-4 rounded-lg transition-all"
          disabled={!patient || !testType || !result}
        >
          Send Result
        </button>
      </form>

      {/* Success Overlay Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
          <div className="fixed top-0 right-0 w-[80%] sm:w-[60%] md:w-[50%] lg:w-96 h-full bg-white card-shadow border-l-4 border-gray-100 p-6 z-40">

            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold text-green-600">Success!</h3>
                <p className="mt-2 text-gray-700">Test result sent successfully.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar Modal */}
      {showSidebar && (
        <div className="fixed top-0 right-0 w-96 h-full bg-white card-shadow border-l-4 border-gray-100 p-6 z-40">
          <h2 className="text-xl font-semibold mb-4">Test Results</h2>
          <div className="space-y-4">
            {testResults.map((result) => (
              <div key={result.id} className="p-4 rounded-lg card-shadow text-sm">
                <p>Patient: {result.patient}</p>
                <p>Test Type: {result.testType}</p>
                <p>Result Summary: {result.result}</p>
                <p>Note to Patient:{result.note}</p>
              </div>
            ))}
          </div>
          {/* <button
            className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg"
            onClick={handleSidebarToggle} // Toggle sidebar visibility
          >
            Hide Sidebar
          </button> */}
        </div>
      )}

      {/* Toggle Button to Show/Hide Sidebar */}
      <button
        className="fixed bottom-6 right-6 bg-secondary text-white p-3 rounded-full shadow-lg z-50"
        onClick={handleSidebarToggle}
      >
        <MdOutlineStickyNote2 />
      </button>
    </div>
  );
};

export default SendTestResult;
