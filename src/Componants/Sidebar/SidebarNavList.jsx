import { useState } from "react";
import { FiMic, FiPlus, FiMinus, FiGrid, FiCalendar } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function SidebarNavList() {
  const navigate = useNavigate();

  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
  const [isSpeakerDropdownOpen, setIsSpeakerDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track the active section

  // Toggle Event Dropdown
  const toggleEventDropdown = (event) => {
    event.stopPropagation();
    setIsEventDropdownOpen(!isEventDropdownOpen);
    setIsSpeakerDropdownOpen(false);
    setActiveSection("events"); // Set active section to Events
  };

  // Toggle Speaker Dropdown
  const toggleSpeakerDropdown = (event) => {
    event.stopPropagation();
    setIsSpeakerDropdownOpen(!isSpeakerDropdownOpen);
    setIsEventDropdownOpen(false);
    setActiveSection("speakers"); // Set active section to Speakers
  };

  // Handle Navigation Without Showing URL on Hover
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* Dashboard Link */}
      <div
        className={`flex items-center justify-between p-2 rounded-lg select-none cursor-pointer ${
          activeSection === "dashboard" ? "font-medium" : ""
        }`}
        onClick={() => {
          setActiveSection("dashboard"); // Set active section to Dashboard
          handleNavigation("/dashboard");
        }}
      >
        <div className="flex items-center">
          <FiGrid />
          <span className="ml-2">Dashboard</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-200 my-2"></div>

      {/* Events Section */}
      <div
        className={`flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer select-none ${
          activeSection === "events" ? "font-medium" : ""
        }`}
        onClick={toggleEventDropdown}
      >
        <div className="flex items-center">
          <FiCalendar />
          <span className="ml-2">Events</span>
        </div>
        <button className="focus:outline-none">
          {isEventDropdownOpen ? <FiMinus /> : <FiPlus />}
        </button>
      </div>

      {/* Events Dropdown Menu */}
      {isEventDropdownOpen && (
        <div className="mt-2 pl-4">
          <div
            className="flex items-center p-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer select-none"
            onClick={() => handleNavigation("/create-event")}
          >
            <span className="ml-2">Create Event</span>
          </div>
          <div
            className="flex items-center p-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg mt-2 cursor-pointer select-none"
            onClick={() => handleNavigation("/view-events")}
          >
            <span className="ml-2">View Events</span>
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="border-b border-gray-200 my-2"></div>

      {/* Speakers Section */}
      <div
        className={`flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer select-none ${
          activeSection === "speakers" ? "font-medium" : ""
        }`}
        onClick={toggleSpeakerDropdown}
      >
        <div className="flex items-center">
          <FiMic />
          <span className="ml-2">Speakers</span>
        </div>
        <button className="focus:outline-none">
          {isSpeakerDropdownOpen ? <FiMinus /> : <FiPlus />}
        </button>
      </div>

      {/* Speakers Dropdown Menu */}
      {isSpeakerDropdownOpen && (
        <div className="mt-2 pl-4">
          <div
            className="flex items-center p-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer select-none"
            onClick={() => handleNavigation("/create-speaker")}
          >
            <span className="ml-2">Create Speaker</span>
          </div>
          <div
            className="flex items-center p-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg mt-2 cursor-pointer select-none"
            onClick={() => handleNavigation("/view-speakers")}
          >
            <span className="ml-2">View Speakers</span>
          </div>
        </div>
      )}

      {/* Divider */}
      {/* <div className="border-b border-gray-200 my-2"></div> */}

      {/* Add More Sections Here */}
      {/* Any new section will automatically have a divider above it */}
    </>
  );
}
