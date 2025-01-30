import React, { useState } from "react";
import SidebarLayout from "../Layouts/SidebarLayout"; // Adjust the import path as needed

export default function Dashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (event) => {
    event.stopPropagation(); // Prevent event from bubbling up
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleEventClick = () => {
    window.location.href = "/event";
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] h-screen">
      {/* Sidebar Section */}
      <div>
        <SidebarLayout>
          <div className="p-4 border-b border-gray-200 flex justify-center items-center">
            <img
              src="https://merakiui.com/images/logo.svg"
              alt="Logo"
              className="w-10 h-10"
            />
          </div>

          {/* Middle Section: Status Dropdown */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between p-2 rounded-lg">
              <div className="flex items-center">
                {/* Status Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span className="ml-2">Status</span>
              </div>

              {/* Toggle Dropdown Button */}
              <button onClick={toggleDropdown} className="focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isDropdownOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  )}
                </svg>
              </button>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="mt-2 pl-4">
                <a href="#" className="flex items-center p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg> */}
                  <span className="ml-2">Dashboard</span>
                </a>
                <a href="#" onClick={handleEventClick} className="flex items-center p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg mt-2">
                {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg> */}
                  <span className="ml-2">Event</span>
                </a>
              </div>
            )}
          </div>

          {/* Bottom Section: Logout */}
          <div className="mt-auto p-4 border-t border-gray-200">
            <div className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200">
              {/* Logout Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span className="ml-2">Logout</span>
            </div>
          </div>
        </SidebarLayout>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 p-8 bg-gray-100 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="h-32 rounded-lg bg-white shadow-md"></div>
          <div className="h-32 rounded-lg bg-white shadow-md"></div>
          <div className="h-32 rounded-lg bg-white shadow-md"></div>
          <div className="h-32 rounded-lg bg-white shadow-md"></div>
        </div>
      </div>
    </div>
  );
}





















// import React from "react";
// import SidebarLayout from "../Layouts/SidebarLayout";

// export default function Dashboard() {
//   return (
//     <>
//       <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] h-screen">
//         {/* Sidebar Section */}
//         <div className="bg-gray-800">
//           <SidebarLayout />
//         </div>

//         {/* Main Content Section */}
//         <div className="flex-1 p-8 bg-gray-100 overflow-auto">
//         <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//         <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
//           <div className="h-32 rounded-lg bg-white shadow-md"></div>
//           <div className="h-32 rounded-lg bg-white shadow-md"></div>
//           <div className="h-32 rounded-lg bg-white shadow-md"></div>
//           <div className="h-32 rounded-lg bg-white shadow-md"></div>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// }

