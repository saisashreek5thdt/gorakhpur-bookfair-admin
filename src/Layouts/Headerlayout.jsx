import React, { useState, memo } from "react";
import { FiBell, FiX, FiPlus, FiLogOut } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProjectDropdown from "../Componants/ProjectDropdown"; // Import Project Dropdown

const Header = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState("Select Project"); // Default project
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New event added: 'Author Meet-up' 📖" },
    { id: 2, message: "Book 'React Essentials' is back in stock 📚" },
    { id: 3, message: "Your event ticket is confirmed 🎟️" },
  ]);

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

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  const handleDeleteNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // User data remove karein
    navigate("/login"); // Login page pe redirect karein
  };

  return (
    <header className="bg-white shadow-md w-full flex items-center justify-between px-6 py-4 select-none border-b relative">
      
      {/* Left Side: Logo, Create Project & Dropdown */}
      <div className="flex items-center gap-4">
        
        {/* Logo */}
        <img
          src="https://merakiui.com/images/logo.svg"
          alt="Logo"
          className="h-8 w-auto"
        />

        {/* Responsive Create Project Button */}
        <button
          className="bg-gray-200 border border-gray-300 rounded-md px-4 py-2 shadow-md hover:bg-gray-300 transition-all text-sm sm:text-base"
          onClick={handleCreateProject}
        >
          <FiPlus className="inline-block mr-2" /> Create Project
        </button>

        {/* Project Selection Dropdown */}
        <ProjectDropdown
          projects={projects}
          selectedProject={selectedProject}
          onSelectProject={handleSelectProject}
        />
      </div>

      {/* Right Side: Notifications & Logout */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative cursor-pointer">
            <FiBell className="h-6 w-6 text-gray-600 hover:text-blue-500 transition-all" />

            {/* Notification Count */}
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                {notifications.length}
              </span>
            )}
          </div>

          {/* Notifications Dropdown */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg p-4 z-50 border border-gray-200"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Dropdown Header */}
                <div className="flex justify-between items-center border-b pb-2 mb-2">
                  <h3 className="font-semibold text-gray-700">Notifications</h3>
                  <button
                    className="text-blue-500 text-sm hover:underline transition-colors"
                    onClick={handleClearNotifications}
                  >
                    Clear All
                  </button>
                </div>

                {/* Notification List */}
                {notifications.length > 0 ? (
                  <ul className="space-y-2 max-h-40 overflow-y-auto">
                    {notifications.map((notification) => (
                      <motion.li
                        key={notification.id}
                        className="flex items-center justify-between p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-sm text-gray-600">{notification.message}</span>
                        <FiX
                          className="h-4 w-4 text-gray-500 hover:text-red-500 cursor-pointer transition-colors"
                          onClick={() => handleDeleteNotification(notification.id)}
                        />
                      </motion.li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 text-sm text-center py-2">No new notifications</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Logout Button */}
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md flex items-center gap-2 hover:bg-red-600 transition-all"
          onClick={handleLogout}
        >
          <FiLogOut className="h-5 w-5" /> Logout
        </button>
      </div>
    </header>
  );
};

export default memo(Header);
