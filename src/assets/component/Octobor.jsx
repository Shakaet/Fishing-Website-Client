import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const fetchData = async () => {
  const response = await axios.get("http://localhost:3000/octProject");
  return response.data;
};

export const Octobor = () => {
  const { data,refetch } = useQuery({
    queryKey: ["januaryProject"],
    queryFn: fetchData,
  });
  
  const [selectedProjectNo, setSelectedProjectNo] = useState("all");

   // Ensure data is always an array
   const filteredData =
   selectedProjectNo === "all"
     ? data
     : data.filter((item) => item.projectNo == selectedProjectNo);

 if (!data?.length) {
   return (
     <h2 className="text-center text-5xl font-bold mt-40 text-white py-10 px-10 bg-blue-800 flex justify-center items-center">
       No data added in this month
     </h2>
   );
 }

 // Ensure calculations only run if data is available
 const totalSum = data.length
   ? data.reduce((sum, item) => sum + (item.mfu || 0) + (item.efu || 0), 0)
   : 0;

 const totalSum2 = data.length
   ? data.reduce((sum, item) => sum + (item.mfd || 0) + (item.efd || 0), 0)
   : 0;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/octoborProject/${id}`)
          .then((response) => {
            if (response.data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to delete the item.", "error");
          });
      }
    });
  };

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
              <Link
              to={`/octUpdate/${item._id}`}
             
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md hover:scale-105 transition"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(item._id)}
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
