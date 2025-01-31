import { FiLogOut } from "react-icons/fi";

export default function SidebarLogout() {
  // Handle Logout Functionality
  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
  };

  return (
    <div className="fixed bottom-0 left-0 w-64 bg-white  border-gray-200 p-4 select-none">
      <div
        className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200"
        onClick={handleLogout}
      >
        {/* Logout Icon */}
        <FiLogOut className="text-lg cursor-pointer" />
        <span className="ml-2 text-md font-medium cursor-pointer">Logout</span>
      </div>
    </div>
  );
}