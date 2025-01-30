import { FiLogOut } from "react-icons/fi";

export default function SidebarLogout() {
  return (
    <div className="mt-auto p-4 border-t border-gray-200 text-lg select-none">
      <div className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200">
        {/* Logout Icon */}
        <FiLogOut />
        <span className="ml-2">Logout</span>
      </div>
    </div>
  );
}
