import React from "react";
import { motion } from "framer-motion";

const WelcomeCard = () => (
  <motion.div
    className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-2xl text-white w-full h-[320px] flex flex-col justify-between relative overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {/* Background Decoration */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-20"></div>

    {/* Content */}
    <div className="relative z-10">
      <h2 className="text-3xl sm:text-4xl font-bold">Welcome to Dashboard</h2>
      <p className="text-lg sm:text-xl mt-3">Monitor analytics, track performance, and stay updated.</p>
    </div>

    {/* Animated Circles */}
    <motion.div
      className="absolute -bottom-20 -right-20 w-40 h-40 bg-white rounded-full opacity-10"
      animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    ></motion.div>
    <motion.div
      className="absolute -bottom-40 -right-40 w-60 h-60 bg-white rounded-full opacity-10"
      animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    ></motion.div>

    {/* Hover Effect */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none"
      whileHover={{ opacity: 0.2 }}
    ></motion.div>
  </motion.div>
);

export default WelcomeCard;