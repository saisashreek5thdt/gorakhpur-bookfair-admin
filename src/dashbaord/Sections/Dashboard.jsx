import React, { useState, useEffect, useMemo, memo } from "react";
import { FiBell, FiX, FiCalendar, FiClock } from "react-icons/fi";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion, AnimatePresence } from "framer-motion";

// Memoized Components
const NotificationItem = memo(({ notification, onDelete }) => (
  <motion.li
    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -10 }}
    transition={{ duration: 0.2 }}
  >
    <span className="text-sm text-gray-600">{notification.message}</span>
    <FiX
      className="h-4 w-4 text-gray-400 hover:text-red-500 cursor-pointer"
      onClick={() => onDelete(notification.id)}
    />
  </motion.li>
));

const TimeUnit = memo(({ value }) => (
  <motion.div
    className="relative bg-gray-300 text-gray-900 px-5 py-8 rounded-lg shadow-md overflow-hidden"
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
));

const PieChartSection = memo(({ data, title, selectedIndex, onPieClick }) => (
  <motion.div className="bg-white p-6 rounded-xl shadow-lg w-full border cursor-pointer select-none border-gray-200">
    <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 text-center">
      {title}
    </h2>
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          dataKey="value"
          onClick={(_, index) => onPieClick(index)}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color}
              opacity={selectedIndex === index ? 1 : 0.5}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          onClick={(e) => onPieClick(data.findIndex((d) => d.name === e.value))}
        />
      </PieChart>
    </ResponsiveContainer>
  </motion.div>
));

// Main Component
const DashboardOverviewSection = () => {
  // States
  const [notificationsVisible, setNotificationsVisible] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New event scheduled for tomorrow", read: false },
    { id: 2, message: "New purchase made by Guy Hawkins", read: false },
    { id: 3, message: "Book 'React Essentials' is back in stock", read: false },
  ]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedPieIndex, setSelectedPieIndex] = useState(null);

  // Memoized Data
  const chartData = useMemo(
    () => ({
      userDistribution: [
        { name: "Active Visitors", value: 70000, color: "#4F46E5" },
        { name: "Registered Vendors", value: 20000, color: "#82ca9d" },
        { name: "Regular Volunteers", value: 8730, color: "#ff8042" },
      ],
      eventParticipants: [
        { name: "Premium Sponsors", value: 120, color: "#8884d8" },
        { name: "Featured Exhibitors", value: 80, color: "#FFBB28" },
        { name: "Guest Authors", value: 60, color: "#FF8042" },
        { name: "Keynote Speakers", value: 40, color: "#00C49F" },
      ],
    }),
    []
  );

  // Timer Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handlers
  const handleDeleteNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const handleClearNotifications = () => setNotifications([]);

  const time = useMemo(() => {
    const formatNumber = (num) => String(num).padStart(2, "0");
    return {
      hours: formatNumber(currentTime.getHours()),
      minutes: formatNumber(currentTime.getMinutes()),
      seconds: formatNumber(currentTime.getSeconds()),
    };
  }, [currentTime]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 select-none relative">
      {/* Notification Bell */}
      <div
        className="fixed top-4 right-4 z-50"
        onMouseEnter={() => setNotificationsVisible(true)}
        onMouseLeave={() => setNotificationsVisible(false)}
      >
        <div className="relative">
          <FiBell className="h-6 w-6 text-gray-600 hover:text-blue-500 transition-all cursor-pointer" />
          {notifications.length > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">
              {notifications.length}
            </span>
          )}
          <AnimatePresence>
            {notificationsVisible && (
              <motion.div
                className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl p-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-700">Notifications</h3>
                  <button
                    className="text-blue-500 text-sm hover:underline"
                    onClick={handleClearNotifications}
                  >
                    Clear All
                  </button>
                </div>
                <ul className="space-y-2">
                  {notifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                      onDelete={handleDeleteNotification}
                    />
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Welcome Card */}
      <motion.div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl shadow-lg text-white w-full h-[300px] flex flex-col justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Welcome to Dashboard
          </h2>
          <p className="text-lg sm:text-xl mt-2">
            Monitor analytics, track performance, and stay updated.
          </p>
        </div>
      </motion.div>

      {/* Calendar Card */}
      <motion.div className="bg-white p-4 rounded-xl shadow-lg w-full h-[300px] border border-gray-200">
        <div className="flex items-center mb-2 gap-2">
          <FiCalendar className="text-blue-600 text-2xl" />
          <h2 className="text-lg font-bold text-gray-800">Calendar</h2>
        </div>
        <div className="calendar-container">
          <DatePicker
            selected={selectedDate}
            onChange={setSelectedDate}
            inline
            className="w-full"
          />
        </div>
        <p className="text-sm text-gray-600 mt-2 text-center">
          Selected: {selectedDate.toDateString()}
        </p>
      </motion.div>

      {/* Clock Card */}
      <motion.div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center justify-center w-full h-[300px] border border-gray-200">
        <FiClock className="text-blue-600 text-4xl mb-3" />
        <h2 className="text-lg font-bold text-gray-800 mb-2">Current Time</h2>
        <div className="flex space-x-3">
          {Object.values(time).map((unit, index) => (
            <TimeUnit key={index} value={unit} />
          ))}
        </div>
      </motion.div>

      {/* Pie Charts */}
      <PieChartSection
        data={chartData.userDistribution}
        title="User Distribution"
        selectedIndex={selectedPieIndex}
        onPieClick={setSelectedPieIndex}
      />
      <PieChartSection
        data={chartData.eventParticipants}
        title="Event Participants"
        selectedIndex={selectedPieIndex}
        onPieClick={setSelectedPieIndex}
      />
    </div>
  );
};

export default DashboardOverviewSection;
