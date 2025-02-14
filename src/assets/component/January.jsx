import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const fetchData = async () => {
  const response = await axios.get("https://fishing-project-server.vercel.app/januaryProject");
  return response.data;
};

export const January = () => {
  const { data, refetch, isLoading, error } = useQuery({
    queryKey: ["januaryProject"],
    queryFn: fetchData,
  });

  const [selectedProjectNo, setSelectedProjectNo] = useState("all");

  if (isLoading) return <p className="text-center">Loading data...</p>;
  if (error) return <p className="text-center text-red-500">Error fetching data.</p>;

  // Ensure data is an array
  const projectData = Array.isArray(data) ? data : [];

  const filteredData =
    selectedProjectNo === "all"
      ? projectData
      : projectData.filter((item) => item.projectNo == selectedProjectNo);

  // Calculate totals based on filtered data
  const totalSum = filteredData.reduce((sum, item) => sum + item.mfu + item.efu, 0);
  const totalSum2 = filteredData.reduce((sum, item) => sum + item.mfd + item.efd, 0);

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
          .delete(`https://fishing-project-server.vercel.app/januaryProject/${id}`)
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
      <div className="flex justify-center mb-6">
        <label className="mr-4 font-bold">Filter by Project No:</label>
        <select
          className="border p-2 rounded-lg"
          value={selectedProjectNo}
          onChange={(e) => setSelectedProjectNo(e.target.value)}
        >
          <option value="all">All</option>
          {projectData.length > 0 ? (
            [...new Set(projectData.map((item) => item.projectNo))]?.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))
          ) : (
            <option disabled>No Projects</option>
          )}
        </select>
      </div>

      <div className="text-center text-xl mt-5 mb-5">
        <h1 className="font-bold mb-2">Total Feed Up: {totalSum} kg</h1>
        <h1 className="font-bold">Total Feed Down: {totalSum2} kg</h1>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        {filteredData.reverse().map((item, index) => (
          <div
            key={index}
            className={`shadow-lg rounded-xl p-6 m-4 max-w-xs w-full ${
              item.shift === "morning" ? "bg-yellow-400" : "bg-blue-700 text-white"
            }`}
          >
            <h3 className="text-lg font-bold mb-2">{item.month} Data</h3>
            <p>
              <strong>Project No:</strong> {item.projectNo}
            </p>
            <p>
              <strong>Water Treatment:</strong> {item.waterTreatment}
            </p>
            <p>
              <strong>Feed Additives:</strong> {item.feedAdditives}
            </p>
            <p>
              <strong>NH3:</strong> {item.nh3}
            </p>
            <p>
              <strong>PH3:</strong> {item.ph3}
            </p>
            <p>
              <strong>Morning Feed Up:</strong> {item.mfu}
            </p>
            <p>
              <strong>Morning Feed Down:</strong> {item.mfd}
            </p>
            <p>
              <strong>Evening Feed Up:</strong> {item.efu}
            </p>
            <p>
              <strong>Evening Feed Down:</strong> {item.efd}
            </p>
            <p>
              <strong>Date:</strong> {item.date}
            </p>
            <p>
              <strong>Shift:</strong> {item.shift}
            </p>
            <div className="mt-4 flex justify-between">
              <Link
                to={`/janUpdate/${item._id}`}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(item._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
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
