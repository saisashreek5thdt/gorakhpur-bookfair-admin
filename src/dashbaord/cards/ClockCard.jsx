import React from "react";
import { FiClock } from "react-icons/fi";
import { motion } from "framer-motion";

const TimeUnit = ({ value }) => (
  <motion.div
    className="relative bg-gray-300 text-gray-900 px-5 py-8 rounded-lg shadow-md"
    initial={{ y: 0 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <motion.span
      key={value}
      className="block text-3xl sm:text-4xl font-mono"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {value}
    </motion.span>
  </motion.div>
);

const ClockCard = ({ time }) => (
  <motion.div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center justify-center w-full h-[320px] border border-gray-200">
    <FiClock className="text-blue-600 text-4xl mb-3" />
    <h2 className="text-lg font-bold text-gray-800 mb-2">Current Time</h2>
    <div className="flex space-x-3">
      {Object.values(time).map((unit, index) => (
        <TimeUnit key={index} value={unit} />
      ))}
    </div>
  </motion.div>
);

export default ClockCard;
