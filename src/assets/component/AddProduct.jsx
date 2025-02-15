import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddProduct() {


  let nav= useNavigate()
  const [formData, setFormData] = useState({
    projectNo: "",
    waterTreatment: "",
    feedAdditives: "",
    nh3: "",
    ph3: "",
    mfu: "",
    mfd: "",
    efu: "",
    efd: "",
    date: "",
    shift: "morning",
    month: "January",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convert specific fields to numbers
    const numericFields = ["mfu", "mfd", "efu", "efd"];
    setFormData({
      ...formData,
      [name]: numericFields.includes(name) ? Number(value) || "" : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://fishing-project-server.vercel.app/addProject", formData).then((res) => {
      if (res.data.insertedId) {
        
        Swal.fire({
          title: "Items added successfully!",
          icon: "success",
          draggable: true,
        });
        nav("/")
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-blue-500 to-purple-600 border-2 border-black shadow-lg rounded-xl p-6 md:p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center text-black mb-4">
          Water Treatment Project
        </h2>

        {/* Project No Dropdown */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Project No</label>
          <select
            name="projectNo"
            value={formData.projectNo}
            onChange={handleChange}
            className="w-full p-2 border-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {/* Input Fields */}
        {[
          { label: "Water Treatment", name: "waterTreatment" },
          { label: "Feed Additives", name: "feedAdditives" },
          { label: "NH3", name: "nh3" },
          { label: "PH3", name: "ph3" },
          { label: "Morning Feed Up", name: "mfu" },
          { label: "Morning Feed Down", name: "mfd" },
          { label: "Evening Feed Up", name: "efu" },
          { label: "Evening Feed Down", name: "efd" },
        ].map((field) => (
          <div className="mb-4" key={field.name}>
            <label className="block font-medium text-gray-700">
              {field.label}
            </label>
            <input
              type={["mfu", "mfd", "efu", "efd"].includes(field.name) ? "number" : "text"}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full p-2 border-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              // required
            />
          </div>
        ))}

        {/* Date Picker */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            // required
          />
        </div>

        {/* Shift Selection */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Shift</label>
          <select
            name="shift"
            value={formData.shift}
            onChange={handleChange}
            className="w-full p-2  border-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="morning">Morning</option>
            <option value="evening">Evening</option>
          </select>
        </div>

        {/* Month Selection */}
        <div className="mb-4">
          <label className="block font-medium  text-gray-700">Month</label>
          <select
    
            name="month"
            value={formData.month}
            onChange={handleChange}
            className="w-full p-2  border-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-fuchsia-900 to-purple-500 text-black font-extrabold py-2 rounded-lg  shadow-md hover:scale-105 transition transform duration-300"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
}
