import { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import { MdOutlineStickyNote2 } from "react-icons/md";

const UploadLabTest = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    preparation: "",
    resultTime: "",
    category: "",
  });

  const [labTests, setLabTests] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Load lab tests from localStorage on component mount
  useEffect(() => {
    const savedLabTests = JSON.parse(localStorage.getItem("labTests")) || [];
    setLabTests(savedLabTests);
  }, []);

  // Save lab tests to localStorage whenever labTests changes
  useEffect(() => {
    if (labTests.length > 0) {
      localStorage.setItem("labTests", JSON.stringify(labTests));
    }
  }, [labTests]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLabTests([...labTests, form]);

    // Show success modal for 3 seconds
    setShowSuccessModal(true);
    setTimeout(() => setShowSuccessModal(false), 3000);

    // Reset the form after submission
    setForm({
      name: "",
      description: "",
      price: "",
      preparation: "",
      resultTime: "",
      category: "",
    });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="max-w-full mx-auto">
      <h2 className="text-xl sm:text-2xl text-secondary mb-2">Upload New Lab Test</h2>
      <p className="text-gray-600 mb-6 text-[.7rem] sm:text-xs">Fill in the details below to add a new lab test.</p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium  text-sm  text-gray-700 mb-1">Test Name</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Complete Blood Count"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-medium  text-sm  text-gray-700 mb-1">Category</label>
            <input
              type="text"
              name="category"
              placeholder="e.g. Hematology"
              value={form.category}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-medium  text-sm  text-gray-700 mb-1">Price (₦)</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-medium  text-sm  text-gray-700 mb-1">Result Time</label>
            <input
              type="text"
              name="resultTime"
              placeholder="e.g. 24-48 hours"
              value={form.resultTime}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium  text-sm  text-gray-700 mb-1">Preparation Instructions</label>
            <textarea
              name="preparation"
              placeholder="e.g. Fast for 8 hours before test"
              value={form.preparation}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium  text-sm  text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              placeholder="Briefly describe the test..."
              value={form.description}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              required
            />
          </div>
        </div>

        <div className="">
          <button
            type="submit"
            className="bg-darkSecondary hover:bg-secondary text-white text-sm font-normal px-6 py-4 rounded-lg transition-all"
          >
            Upload Lab Test
          </button>
        </div>
      </form>

      {/* Success Overlay Modal */}
      {showSuccessModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold text-green-600">Success!</h3>
            <p className="mt-2 text-gray-700">Lab Test Uploaded Successfully.</p>
          </div>
        </div>
      )}



      {/* Sidebar Modal */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
          <div className="fixed top-0 right-0 w-[80%] sm:w-[60%] md:w-[50%] lg:w-96 h-full bg-white card-shadow border-l-4 border-gray-100 p-6 z-40">


            <h3 className="text-xl font-semibold mb-4">Uploaded Lab Tests</h3>
            <div className="grid grid-cols-1 gap-6">
              {labTests.map((test, index) => (

                <div

                  key={index}

                  className="group bg-white card-shadow p-6 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:shadow-lg cursor-pointer relative"
                >



                  {/* Card Content */}
                  <h4 className="text-base md:text-lg font-semibold text-primary leading-tight">{test.name}</h4>
                  <span className="text-[0.7rem] text-gray-600 border-l-4 border-primary pl-2 my-2 flex items-center justify-start"><span className='text-darkPrimary'>Category</span> <FaAngleRight className='text-primary mr-1' /> {test.category}</span>
                  <p className="text-[0.65rem] sm:text-xs text-gray-700 leading-relaxed mt-2 pr-6">{test.description.slice(0, 70)}...</p>
                  <h5 className="mt-3 text-lg font-semibold text-secondary">₦{test.price}</h5>
                </div>

              ))}
            </div>

          </div>
        </div>
      )
      }

      {/* Toggle Button to Show/Hide Sidebar */}
      <button
        className="fixed bottom-6 right-6 bg-secondary text-white p-3 rounded-full shadow-lg z-50"
        onClick={toggleSidebar}
      >
        <MdOutlineStickyNote2 />
      </button>
    </div >
  );
};

export default UploadLabTest;
