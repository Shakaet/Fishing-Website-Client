import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>

      <h1 className="text-center mt-10 text-5xl font-extrabold ">All Month Here</h1>


<div className="flex flex-wrap justify-center items-center mt-20 gap-4 p-6">

      
<Link to={"/january"} className="px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-red-400 to-pink-500">
  January
</Link>
<Link to={"/feb"} className="px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-purple-400 to-indigo-500">
  February
</Link> 
<Link to={"/march"} className="px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-400 to-teal-500">
  March
</Link>
<Link to={"/april"} className="px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-blue-400 to-cyan-500">
  April
</Link>
<Link to={"/may"} className="px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-yellow-400 to-orange-500">
  May
</Link>
<Link to={"/june"} className="px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-indigo-400 to-purple-500">
  June
</Link>
<Link to={"/july"} className="px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-pink-400 to-red-500">
  July
</Link>
<Link to={"/aug"} className="px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-teal-400 to-green-500">
  August
</Link>
<Link to={"/sep"}className="px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-orange-400 to-yellow-500">
  September
</Link>
<Link to={"/oct"} className="px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-cyan-400 to-blue-500">
  October
</Link>
<Link to={"/nov"} className="px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-gray-400 to-gray-600">
  November
</Link>
<Link to={"/dec"} className="px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-blue-500 to-purple-600">
  December
</Link>
</div>
    </div>
  );
}
