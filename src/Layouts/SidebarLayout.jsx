// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";

// export default function SidebarLayout({ children }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <>
//       {/* Hamburger Menu Button (only visible on small screens) */}
//       <button
//         className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-lg"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed md:relative top-0 left-0 h-screen bg-white text-gray-800 flex flex-col 
//           transition-all duration-300 shadow-lg md:shadow-none 
//           ${isSidebarOpen ? "w-64" : "w-0 md:w-64"} 
//           overflow-y-auto hide-scrollbar`}
//       >
//         <div className="h-full">{children}</div>
//       </div>
//     </>
//   );
// }










export default function SidebarLayout({ children }) {
  return (
    <div
      className="sidebarLayout h-screen bg-white text-gray-800 flex flex-col  overflow-hidden"
    >
      {children} {/* Render the sidebar content passed as children */}
    </div>
  );
}


























