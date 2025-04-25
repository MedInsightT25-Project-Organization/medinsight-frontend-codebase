import { useState } from "react";
import { FaPaperclip } from "react-icons/fa";

const SendTestResult = () => {
  const [patient, setPatient] = useState("");
  const [testType, setTestType] = useState("");
  const [result, setResult] = useState("");
  const [note, setNote] = useState("");
  const [via, setVia] = useState({ email: true, sms: false, portal: false });

  const handleCheckbox = (type) => {
    setVia({ ...via, [type]: !via[type] });
  };

  return (
    <div className="max-w-full mx-auto">
       <h2 className="text-xl sm:text-2xl text-secondary mb-2">Send Test Result</h2>
      <p className="text-gray-600 mb-6 text-[.7rem] sm:text-xs">Securely send diagnostic test results to a patient.</p>

      <form className="space-y-6 bg-white shadow-md p-6 rounded-2xl">
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

        {/* <div>
          <label className="block mb-1 font-medium text-gray-700">Test Type</label>
          <select
            className="w-full border border-gray-300 p-3 rounded-lg"
            value={testType}
            onChange={(e) => setTestType(e.target.value)}
          >
            <option value="">Select test type</option>
            <option value="blood">Blood Test</option>
            <option value="xray">X-Ray</option>
            <option value="mri">MRI</option>
            <option value="covid">COVID-19</option>
          </select>
        </div> */}

        <div>
          <label className="block mb-1 font-medium  text-sm text-gray-700">Result Summary</label>
          <textarea
            rows="4"
            maxLength={500}
            className="w-full border border-gray-300 p-3  text-sm  rounded-lg"
            placeholder="Summarize the test result (max 500 characters)"
            value={result}
            onChange={(e) => setResult(e.target.value)}
          ></textarea>
          <p className="text-sm text-gray-400 text-right mt-1">{result.length}/500</p>
        </div>

        <div>
          <label className="block mb-1 font-medium  text-sm  text-gray-700">Attach File</label>
          <div className="flex items-center gap-2 border border-gray-300 p-3 rounded-lg">
            <FaPaperclip className="text-gray-500" />
            <input type="file" className="w-full text-sm" />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium text-sm  text-gray-700">Add Note to Patient (Optional)</label>
          <textarea
            rows="3"
            className="w-full border border-gray-300 p-3 rounded-lg text-sm"
            placeholder="E.g. Next steps, instructions, etc."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </div>

        {/* <div className="space-y-2">
          <label className="block font-medium text-gray-700">Send via</label>
          <div className="flex gap-4">
            {["email", "sms", "portal"].map((type) => (
              <label key={type} className="flex items-center space-x-2 text-gray-700">
                <input
                  type="checkbox"
                  checked={via[type]}
                  onChange={() => handleCheckbox(type)}
                />
                <span>{type.toUpperCase()}</span>
              </label>
            ))}
          </div>
        </div> */}

        <button
          type="submit"
          className="bg-darkSecondary hover:bg-secondary text-white text-sm font-normal px-6 py-4 rounded-lg transition-all"
          disabled={!patient || !testType || !result}
        >
          Send Result
        </button>
      </form>
    </div>
  );
};

export default SendTestResult;
