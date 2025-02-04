import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SidebarLayout from "../Layouts/SidebarLayout";
import SidebarLogo from "../Componants/Sidebar/SidebarLogo";
import SidebarLogout from "../Componants/Sidebar/SidebarLogout";
import SidebarNav from "../Componants/Sidebar/SidebarNav";
import MinimizedSidebar from "../Componants/Sidebar/minimizedsidebar";

export default function Dashboard() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const savedState = localStorage.getItem("sidebarOpen");
    setIsSidebarOpen(savedState === "true");
  }, []);

  const toggleSidebar = () => {
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);
    localStorage.setItem("sidebarOpen", newState);
  };

  return (
    <div className="flex flex-col sm:flex-row min-h-screen ">
      {/* Sidebar Section */}
      <div
        className={`h-screen bg-white sm:shadow-none md:shadow-lg lg:shadow-lg xl:shadow-lg transition-all duration-300 flex flex-col
          ${isSidebarOpen ? "w-76" : "w-16"}`}
      >
        <SidebarLayout>
          <SidebarLogo toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
            {isSidebarOpen ? <SidebarNav isSidebarOpen={isSidebarOpen} /> : <MinimizedSidebar />}
          </div>
          <SidebarLogout isSidebarOpen={isSidebarOpen} />
        </SidebarLayout>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 min-w-0 p-4 md:p-8 sm:mt-0 mt-16 bg-gray-100">
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
