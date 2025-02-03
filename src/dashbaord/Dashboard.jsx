import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons
import { useNavigate } from "react-router-dom";
import SidebarLayout from "../Layouts/SidebarLayout";
import SidebarLogo from "../componants/Sidebar/SidebarLogo";
import SidebarLogout from "../componants/Sidebar/SidebarLogout";
import SidebarNav from "../componants/Sidebar/SidebarNav";

export default function Dashboard() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar open by default on larger screens

  // Load sidebar state from localStorage on first render
  useEffect(() => {
    const savedState = localStorage.getItem("sidebarOpen");
    setIsSidebarOpen(savedState === "true"); // Convert string to boolean
  }, []);

  // Toggle sidebar and save state in localStorage
  const toggleSidebar = () => {
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);
    localStorage.setItem("sidebarOpen", newState);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Menu Button - Always Visible */}
      <button
        className="fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-lg"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar Section */}
      <div
        className={`h-screen bg-white shadow-lg transition-all duration-300 
          ${isSidebarOpen ? "w-72" : "w-16"} overflow-hidden`}
      >
        <div className="h-screen flex flex-col">
          <SidebarLayout>
            {/* Sidebar Logo */}
            <div className="p-4">
              <SidebarLogo />
            </div>

            {/* Sidebar Navigation (Scrollable) */}
            <div className="flex-1 sm:overflow-y-auto md:overflow-y-auto lg:overflow-y-auto xl:overflow-y-auto">
              <SidebarNav />
            </div>

            {/* Sidebar Logout */}
            <div className="p-4 border-t border-gray-200">
              <SidebarLogout />
            </div>
          </SidebarLayout>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 min-w-0 p-4 md:p-8">
        <h1 className="text-2xl font-bold mb-4 user-select-none cursor-pointer">
          Dashboard
        </h1>

        {/* Dashboard Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="h-32 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer select-none" />
          <div className="h-32 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer select-none" />
          <div className="h-32 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer select-none" />
          <div className="h-32 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer select-none" />
        </div>
      </div>
    </div>
  );
}










// import { useNavigate } from "react-router-dom";
// import SidebarLayout from "../Layouts/SidebarLayout";
// import SidebarLogo from "../componants/Sidebar/SidebarLogo";
// import SidebarLogout from "../Componants/Sidebar/SidebarLogout";
// import SidebarNav from "../componants/Sidebar/SidebarNav";

// export default function Dashboard() {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen  bg-gray-100">
//       {/* Sidebar Section - Full width on mobile, fixed width on larger screens */}
//       <div className="w-full md:w-[300px] md:min-h-screen bg-white">
//         <div className="sticky top-0 h-screen overflow-hidden">
//           <SidebarLayout>
//             {/* Sidebar Logo */}
//             <div className="p-4">
//               <SidebarLogo />
//             </div>

//             {/* Sidebar Navigation */}
//             <div className="flex-1 sm:overflow-auto md:overflow-auto lg:overflow-auto xl:overflow-auto">
//               <div className="user-select-none cursor-pointer">
//                 <SidebarNav />
//               </div>
//             </div>

//             {/* Sidebar Logout */}
//             <div className="p-4">
//               <SidebarLogout />
//             </div>
//           </SidebarLayout>
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div className="flex-1 min-w-0">
//         <div className="p-4 md:p-8">
//           <h1 className="text-2xl font-bold mb-4 user-select-none cursor-pointer">
//             Dashboard
//           </h1>

//           {/* Dashboard Grid - Responsive grid with different columns based on screen size */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4">
//             <div className="h-32 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer select-none" />
//             <div className="h-32 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer select-none" />
//             <div className="h-32 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer select-none" />
//             <div className="h-32 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer select-none" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

