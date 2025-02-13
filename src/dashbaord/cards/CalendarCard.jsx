import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar } from "react-icons/fi";
import { motion } from "framer-motion";

const CalendarCard = ({ selectedDate, setSelectedDate }) => (
  <motion.div
    className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-2xl w-full h-[320px] border border-gray-100 relative overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {/* Background Decoration */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-30"></div>

    {/* Header */}
    <div className="flex items-center mb-4 gap-2 relative z-10">
      <FiCalendar className="text-blue-600 text-2xl" />
      <h2 className="text-xl font-bold text-gray-800">Calendar</h2>
    </div>

    {/* DatePicker */}
    <div className="calendar-container relative z-10">
      <DatePicker
        selected={selectedDate}
        onChange={setSelectedDate}
        inline
        className="w-full"
      />
    </div>

    {/* Selected Date */}
    <p className="text-sm text-gray-600 mt-3 text-center relative z-10">
      Selected: {selectedDate.toDateString()}
    </p>

    {/* Hover Effect */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none"
      whileHover={{ opacity: 0.1 }}
    ></motion.div>
  </motion.div>
);

export default CalendarCard;