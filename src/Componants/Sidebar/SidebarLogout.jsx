import { FiLogOut } from "react-icons/fi";

export default function SidebarLogout({ isSidebarOpen }) {
  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <div
      className={`fixed bottom-0 left-0 transition-all duration-300 bg-white border-t border-gray-200 p-4 select-none ${
        isSidebarOpen ? "w-64 opacity-100" : "w-16 opacity-100 flex justify-center"
      }`}
    >
      <div
        className="relative group flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200"
        onClick={handleLogout}
      >
        {/* Logout Icon Always Visible */}
        <FiLogOut className="text-lg cursor-pointer" />

        {/* Hide Logout Text When Sidebar is Closed */}
        {isSidebarOpen && (
          <span className="ml-2 text-md font-medium cursor-pointer">Logout</span>
        )}

        {/* Tooltip (Only Show When Sidebar is Closed) */}
        {!isSidebarOpen && (
          <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Logout
          </span>
        )}
      </div>
    </div>
  );
}
