import { useNavigate } from "react-router-dom";
import SidebarLayout from "../Layouts/SidebarLayout"; // Adjust the import path as needed
import SidebarLogo from "../componants/Sidebar/SidebarLogo";
import SidebarLogout from "../componants/Sidebar/SidebarLogout";
import SidebarNav from "../componants/Sidebar/SidebarNav";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] h-screen">
      {/* Sidebar Section */}
      <div>
        <SidebarLayout>
          {/* Sidebar Logo Start */}
          <SidebarLogo />
          {/* Sidebar Logo End */}

          {/* Sidebar Nav Start */}
          <div className="user-select-none cursor-pointer">
            {/* Prevents text selection and adds pointer cursor */}
            <SidebarNav />
          </div>
          {/* Sidebar Nav End */}

          {/* Sidebar Logout Start */}
          <SidebarLogout />
          {/* Sidebar Logout End */}
        </SidebarLayout>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 p-8 bg-gray-100 overflow-auto">
        <h1 className="text-2xl font-bold mb-4 user-select-none cursor-pointer">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="h-32 rounded-lg bg-white shadow-md cursor-pointer select-none"></div>
          <div className="h-32 rounded-lg bg-white shadow-md cursor-pointer select-none"></div>
          <div className="h-32 rounded-lg bg-white shadow-md cursor-pointer select-none"></div>
          <div className="h-32 rounded-lg bg-white shadow-md cursor-pointer select-none"></div>
        </div>
      </div>
    </div>
  );
}
