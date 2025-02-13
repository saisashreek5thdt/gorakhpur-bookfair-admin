import React, { useState, memo } from "react";
import { FiBell, FiX, FiPlus, FiTrash, FiInfo, FiMessageCircle, FiAlertCircle } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = ({ notifications, onClearNotifications, onDeleteNotification }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState("Gorakhpur Book Fair");
  const navigate = useNavigate();

  const projects = [
    { name: "Gorakhpur Book Fair", path: "gorakhpur" },
    { name: "Patna Book Fair", path: "patna" },
    { name: "Mumbai Book Fair", path: "mumbai" },
    { name: "Jaipur Literature Fest", path: "jaipur" },
  ];

  const handleCreateProject = () => {
    navigate("/create-project");
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project.name);
    navigate(`/dashboard/${project.path}`);
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'alert':
        return <FiAlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'message':
        return <FiMessageCircle className="h-5 w-5 text-blue-500" />;
      default:
        return <FiInfo className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <header className="bg-white shadow-sm w-full flex items-center justify-between px-6 py-4 select-none border-b relative">
      <div className="font-bold">Dashboard</div>

      <div 
        className="relative ml-auto" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <FiBell className="h-6 w-6 text-gray-600 hover:text-blue-500 cursor-pointer transition-all duration-300" />
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white">
            {notifications.length}
          </span>
        )}

        <AnimatePresence>
          {isHovered && notifications.length > 0 && (
            <motion.div
              className="absolute right-0 top-full mt-2 w-96 bg-white rounded-lg shadow-xl border border-blue-100 overflow-hidden z-50" // Added z-50 here
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-blue-50 px-4 py-3 border-b border-blue-100">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FiBell className="h-5 w-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-blue-900">Notifications</h3>
                  </div>
                  <button
                    className="flex items-center gap-1 px-3 py-1 rounded-md text-sm text-blue-600 hover:bg-blue-100 transition-all duration-300"
                    onClick={onClearNotifications}
                  >
                    <FiTrash className="h-4 w-4" />
                    <span>Clear All</span>
                  </button>
                </div>
              </div>

              <div className="max-h-[400px] overflow-y-auto">
                <ul className="divide-y divide-blue-50">
                  {notifications.map((notification) => (
                    <li 
                      key={notification.id} 
                      className="group hover:bg-blue-50 transition-all duration-300"
                    >
                      <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1">
                          {getNotificationIcon(notification.type)}
                          <div className="flex-1">
                            <p className="text-sm text-gray-700 group-hover:text-blue-700 transition-colors duration-300">
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {notification.time || '2 minutes ago'}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => onDeleteNotification(notification.id)}
                          className="ml-2 p-1 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-300"
                        >
                          <FiX className="h-4 w-4" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default memo(Header);