import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const months = [
  { name: "January", to: "/january", colors: "from-red-400 to-pink-500" },
  { name: "February", to: "/feb", colors: "from-purple-400 to-indigo-500" },
  { name: "March", to: "/march", colors: "from-green-400 to-teal-500" },
  { name: "April", to: "/april", colors: "from-blue-400 to-cyan-500" },
  { name: "May", to: "/may", colors: "from-yellow-400 to-orange-500" },
  { name: "June", to: "/june", colors: "from-indigo-400 to-purple-500" },
  { name: "July", to: "/july", colors: "from-pink-400 to-red-500" },
  { name: "August", to: "/aug", colors: "from-teal-400 to-green-500" },
  { name: "September", to: "/sep", colors: "from-orange-400 to-yellow-500" },
  { name: "October", to: "/oct", colors: "from-cyan-400 to-blue-500" },
  { name: "November", to: "/nov", colors: "from-gray-400 to-gray-600" },
  { name: "December", to: "/dec", colors: "from-blue-500 to-purple-600" },
];

export default function Home() {
  return (
    <div>
      <motion.h1
  className="text-center mt-10 text-5xl font-extrabold whitespace-nowrap"
  initial={{ x: "-100%" }}
  animate={{ x: "100%" }}
  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
>
  All Month Here
</motion.h1>


      <div className="flex flex-wrap justify-center items-center mt-20 gap-4 p-6">
        {months.map((month, index) => (
          <motion.div
            key={month.to}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Link
              to={month.to}
              className={`px-6 py-3 text-white font-semibold rounded-lg shadow-md bg-gradient-to-r ${month.colors} block`}
            >
              {month.name}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
