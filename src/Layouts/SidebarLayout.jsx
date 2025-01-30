import React from "react";

export default function SidebarLayout({ children }) {
  return (
    <div
      className="h-screen bg-white text-gray-800 flex flex-col shadow-lg resize-x overflow-auto"
      style={{ minWidth: "300px", maxWidth: "400px" }} // Adjustable width with min and max limits
    >
      {children} {/* Render the sidebar content passed as children */}
    </div>
  );
}
































// import React, { useState } from "react";

// export default function SidebarLayout() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleEventClick = () => {
//     // Navigate to the new page (you can use React Router or any other navigation method)
//     window.location.href = "/event"; // Replace with your desired URL
//   };

//   return (
//     <div
//       className="h-screen bg-white text-gray-800 flex flex-col shadow-lg resize-x overflow-auto"
//       style={{ minWidth: "300px", maxWidth: "400px" }} // Adjustable width with min and max limits
//     >
//       {/* Top Section: Logo (Centered) */}
//       <div className="p-4 border-b border-gray-200 flex justify-center items-center">
//         <img
//           src="https://merakiui.com/images/logo.svg"
//           alt="Logo"
//           className="w-10 h-10" // Decreased logo size
//         />
//       </div>

//       {/* Middle Section: Status Dropdown */}
//       <div className="p-4 border-b border-gray-200">
//         <div
//           className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200"
//           onClick={toggleDropdown}
//         >
//           {/* Dynamic Plus/Minus Icon */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {isDropdownOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M20 12H4" // Minus icon
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 4v16m8-8H4" // Plus icon
//               />
//             )}
//           </svg>
//           <span className="ml-2">Status</span>
//         </div>

//         {/* Dropdown Menu */}
//         {isDropdownOpen && (
//           <div className="mt-2 pl-4">
//             <a
//               href="#"
//               className="flex items-center p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
//             >
//               {/* Dashboard Icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
//               </svg>
//               <span className="ml-2">Dashboard</span>
//             </a>

//             {/* Event Option */}
//             <a
//               href="#"
//               onClick={handleEventClick}
//               className="flex items-center p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200 mt-2"
//             >
//               {/* Event Icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               <span className="ml-2">Event</span>
//             </a>
//           </div>
//         )}
//       </div>

//       {/* Bottom Section: Logout Icon */}
//       <div className="mt-auto p-4 border-t border-gray-200">
//         <div className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200">
//           {/* Logout Icon */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//             />
//           </svg>
//           <span className="ml-2">Logout</span>
//         </div>
//       </div>
//     </div>
//   );
// }



