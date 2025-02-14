import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const fetchData = async () => {
  const response = await axios.get("http://localhost:3000/novProject");
  return response.data;
};

export const Nov = () => {
  const { data } = useQuery({
    queryKey: ["januaryProject"],
    queryFn: fetchData,
  });
  
  const [selectedProjectNo, setSelectedProjectNo] = useState("all");

  // Filter data based on project number selection
  const filteredData = selectedProjectNo === "all" ? data : data?.filter((item) => item.projectNo == selectedProjectNo);

  if (data?.length === 0) {
    return (
      <h2 className="text-center text-5xl font-bold mt-40 text-white py-10 px-10 bg-blue-800 flex justify-center items-center">
        No data added in this month
      </h2>
    );
  }
  const totalSum = data?.reduce((sum, item) => sum + item.mfu + item.efu, 0);
  console.log(totalSum)
  const totalSum2 = data?.reduce((sum, item) => sum + item.mfd + item.efd, 0);
  console.log(totalSum2)

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Project Number Filter */}
      <div className="flex justify-center mb-6">
        <label className="mr-4 font-bold">Filter by Project No:</label>
        <select
          className="border p-2 rounded-lg"
          value={selectedProjectNo}
          onChange={(e) => setSelectedProjectNo(e.target.value)}
        >
          <option value="all">All</option>
          {[...new Set(data?.map((item) => item.projectNo))].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <div className="text-center text-xl mt-5 mb-5">
        <h1 className="font-bold mb-2">Total Feed Up: {totalSum} kg</h1>
        <h1 className="font-bold">Total Feed Down: {totalSum2} kg</h1>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        {filteredData?.reverse().map((item, index) => (
          <div
            key={index}
            className={`${
    item.shift === "morning" ? "bg-yellow-400" : "bg-blue-700 text-white"
  } shadow-lg rounded-xl p-6 m-4 max-w-xs w-full transform transition hover:scale-105`}
          >
            <h3 className="text-lg font-bold mb-2">{item.month} Data</h3>
            <p className="text-sm"><strong>Project No:</strong> {item.projectNo}</p>
            <p className="text-sm"><strong>Water Treatment:</strong> {item.waterTreatment}</p>
            <p className="text-sm"><strong>Feed Additives:</strong> {item.feedAdditives}</p>
            <p className="text-sm"><strong>NH3:</strong> {item.nh3}</p>
            <p className="text-sm"><strong>PH3:</strong> {item.ph3}</p>
            <p className="text-sm"><strong>Morning Feed Up:</strong> {item.mfu}</p>
            <p className="text-sm"><strong>Morning Feed Down:</strong> {item.mfd}</p>
            <p className="text-sm"><strong>Evening Feed Up:</strong> {item.efu}</p>
            <p className="text-sm"><strong>Evening Feed Down:</strong> {item.efd}</p>
            <p className="text-sm"><strong>Date:</strong> {item.date}</p>
            <p className="text-sm"><strong>Shift:</strong> {item.shift}</p>

            {/* Edit & Delete Buttons */}
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => handleEdit(index)}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md hover:scale-105 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg shadow-md hover:scale-105 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
