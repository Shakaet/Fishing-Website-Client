import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

export default function AddProduct() {
  const [formData, setFormData] = useState({
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Data:", formData);

    // console.log(formData)
    // alert("Project Submitted Successfully!");

    axios.post("http://localhost:3000/addProject",formData)
    .then(res=>{
      if(res.data.insertedId){
        Swal.fire({
          title: "Items added Successful!",
          icon: "success",
          draggable: true
        });
      }
    })
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 md:p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-4">
          Water Treatment Project
        </h2>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Water Treatment</label>
          <input
            type="text"
            name="waterTreatment"
            value={formData.waterTreatment}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Feed Additives</label>
          <input
            type="text"
            name="feedAdditives"
            value={formData.feedAdditives}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">NH3</label>
          <input
            type="text"
            name="nh3"
            value={formData.nh3}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">PH3</label>
          <input
            type="text"
            name="ph3"
            value={formData.ph3}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Morning Feed Up</label>
          <input
            type="text"
            name="mfu"
            value={formData.ph3}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Morning Feed Down</label>
          <input
            type="text"
            name="mfd"
            value={formData.ph3}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Evening Feed Up</label>
          <input
            type="text"
            name="efu"
            value={formData.ph3}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Evening Feed Down</label>
          <input
            type="text"
            name="efd"
            value={formData.ph3}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Shift</label>
          <select
            name="shift"
            value={formData.shift}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="morning">Morning</option>
            <option value="evening">Evening</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Month</label>
          <select
            name="month"
            value={formData.month}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 rounded-lg font-semibold shadow-md hover:scale-105 transition transform duration-300"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
}
