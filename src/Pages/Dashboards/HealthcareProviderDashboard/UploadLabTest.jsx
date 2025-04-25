import { useState } from "react";

const UploadLabTest = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    preparation: "",
    resultTime: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submission (e.g., send to backend or update state)
    console.log("Submitted Lab Test:", form);
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
    </div>
  );
};

export default UploadLabTest;
