import { FiLogOut } from "react-icons/fi";
import { Tooltip } from "react-tooltip";

export default function SidebarLogout({ isSidebarOpen }) {
  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <div
      className={`bottom-0 left-0 transition-all duration-300 bg-white border-t-0 border-gray-200 p-4 select-none ${
        isSidebarOpen ? "w-64 opacity-100" : "w-16 opacity-100 flex justify-center"
      }`}
    >
      <div
        className="relative group flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200"
        onClick={handleLogout}
        data-tooltip-id="logout-tooltip"
      >
        {/* Show Logout Icon only when Sidebar is Open */}
        <FiLogOut
          className={`text-lg cursor-pointer ${isSidebarOpen ? "block" : "hidden"} sm:block md:block lg:block xl:block`}
        />

        {/* Hide Logout Text When Sidebar is Closed */}
        {isSidebarOpen && (
          <span className="ml-2 text-md font-medium cursor-pointer">Logout</span>
        )}

        {/* Tooltip (Only Show When Sidebar is Closed on Small Screens) */}
        {!isSidebarOpen && (
          <Tooltip id="logout-tooltip" place="right" effect="solid">
            Logout
          </Tooltip>
        )}
      </div>
    </div>
  );
}
