import React, { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { motion } from "framer-motion";

const EventList = () => {
  // JSON data for events
  const eventsData = [
    { id: 1, name: "Grand Book Fair Opening", date: "2025-02-15", time: "10:00 AM", status: "Live" },
    { id: 2, name: "Author Meet & Greet", date: "2025-02-16", time: "03:00 PM", status: "Live" },
    { id: 3, name: "Children's Storytelling Hour", date: "2025-02-17", time: "11:00 AM", status: "Expired" },
    { id: 4, name: "Poetry Recital Night", date: "2025-02-18", time: "06:00 PM", status: "Live" },
    { id: 5, name: "Bestselling Book Launch", date: "2025-02-19", time: "04:30 PM", status: "Live" },
    { id: 6, name: "Book Illustration Workshop", date: "2025-02-20", time: "01:00 PM", status: "Expired" },
    { id: 7, name: "Rare Books Exhibition", date: "2025-02-21", time: "02:30 PM", status: "Expired" },
    { id: 8, name: "E-Book Trends Discussion", date: "2025-02-22", time: "05:00 PM", status: "Live" },
  ];

  // State for filtering events
  const [filter, setFilter] = useState("all"); // "all", "live", or "expired"

  // Filter events based on the selected filter
  const filteredEvents = eventsData.filter((event) => {
    if (filter === "live") return event.status === "Live";
    if (filter === "expired") return event.status === "Expired";
    return true; // Show all events if filter is "all"
  });

  return (
    <motion.div
      className="bg-gradient-to-br from-white to-gray-50 p-2 rounded-2xl shadow-2xl w-full border border-gray-100 relative overflow-hidden"
      style={{ height: "300px" }} // Set card height to 320px
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-30"></div>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-6 text-center relative z-10">
        📚 Book Fair Event List
      </h2>

      {/* Filter Options */}
      <div className="flex justify-center gap-4 mb-6 relative z-10">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            filter === "all" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-blue-100"
          }`}
        >
          All Events
        </button>
        <button
          onClick={() => setFilter("live")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            filter === "live" ? "bg-green-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-green-100"
          }`}
        >
          Live Events
        </button>
        <button
          onClick={() => setFilter("expired")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            filter === "expired" ? "bg-red-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-red-100"
          }`}
        >
          Expired Events
        </button>
      </div>

      {/* Event Table */}
      <div className="max-h-[180px] overflow-y-auto relative overflow-x-auto z-10 custom-scrollbar"> {/* Custom scrollbar */}
        <table className="w-full text-small">
          <thead>
            <tr className="text-left border-b bg-gray-100 text-gray-700">
              <th className="p-2">Sr. No.</th>
              <th className="p-2 text-center">Icons</th>
              <th className="p-2">Event Name</th>
              <th className="p-2 text-center">Event Date</th>
              <th className="p-2 text-center">Event Time</th>
              <th className="p-2 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((event, index) => (
              <motion.tr
                key={event.id}
                className="border-b hover:bg-gray-50 text-gray-800 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }} // Row hover effect
              >
                <td className="p-2 font-semibold">{index + 1}</td>
                <td className="p-2 text-center">
                  <motion.div
                    whileHover={{ scale: 1.2, color: "#3b82f6" }} // Icon hover effect
                    transition={{ duration: 0.2 }}
                    className="cursor-pointer"
                  >
                    <FiCalendar className="text-blue-500 text-xl" /> {/* Calendar Icon */}
                  </motion.div>
                </td>
                <td className="p-2">{event.name}</td>
                <td className="p-2 text-center">{event.date}</td>
                <td className="p-2 text-center">{event.time}</td>
                <td className="p-2 text-center">
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-small ${
                      event.status === "Live"
                        ? "bg-green-100 text-green-700 hover:bg-green-200"
                        : "bg-red-100 text-red-700 hover:bg-red-200"
                    } transition-all duration-300`}
                  >
                    {event.status}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none"
        whileHover={{ opacity: 0.1 }}
      ></motion.div>
    </motion.div>
  );
};

export default EventList;