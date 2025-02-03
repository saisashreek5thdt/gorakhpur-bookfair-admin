import { useState } from "react";
import { FiMic, FiPlus, FiMinus, FiGrid, FiCalendar, FiInfo, FiImage, FiMapPin, FiUsers, FiLink, FiClock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function SidebarNavList() {
  const navigate = useNavigate();

  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
  const [isSpeakerDropdownOpen, setIsSpeakerDropdownOpen] = useState(false);
  const [isBannerDropdownOpen, setIsBannerDropdownOpen] = useState(false);
  const [isSponsorsDropdownOpen, setIsSponsorsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track the active section

  // Toggle Event Dropdown
  const toggleEventDropdown = (event) => {
    event.stopPropagation();
    setIsEventDropdownOpen(!isEventDropdownOpen);
    setIsSpeakerDropdownOpen(false);
    setIsBannerDropdownOpen(false);
    setIsSponsorsDropdownOpen(false);
    setActiveSection("events"); // Set active section to Events
  };

  // Toggle Speaker Dropdown
  const toggleSpeakerDropdown = (event) => {
    event.stopPropagation();
    setIsSpeakerDropdownOpen(!isSpeakerDropdownOpen);
    setIsEventDropdownOpen(false);
    setIsBannerDropdownOpen(false);
    setIsSponsorsDropdownOpen(false);
    setActiveSection("speakers"); // Set active section to Speakers
  };

  // Toggle Banner Dropdown
  const toggleBannerDropdown = (event) => {
    event.stopPropagation();
    setIsBannerDropdownOpen(!isBannerDropdownOpen);
    setIsEventDropdownOpen(false);
    setIsSpeakerDropdownOpen(false);
    setIsSponsorsDropdownOpen(false);
    setActiveSection("banner"); // Set active section to Banner
  };

  // Toggle Sponsors Dropdown
  const toggleSponsorsDropdown = (event) => {
    event.stopPropagation();
    setIsSponsorsDropdownOpen(!isSponsorsDropdownOpen);
    setIsEventDropdownOpen(false);
    setIsSpeakerDropdownOpen(false);
    setIsBannerDropdownOpen(false);
    setActiveSection("sponsors"); // Set active section to Sponsors
  };

  // Handle Navigation Without Showing URL on Hover
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-64 sm:h-auto bg-white rounded-lg p-4">
      {/* Dashboard Link */}
      <div
        className={`flex items-center justify-between p-3 rounded-lg select-none cursor-pointer transition-all duration-200 ${
          activeSection === "dashboard"
            ? "bg-blue-50 text-blue-600"
            : "hover:bg-gray-100"
        }`}
        onClick={() => {
          setActiveSection("dashboard"); // Set active section to Dashboard
          handleNavigation("/dashboard");
        }}
      >
        <div className="flex items-center">
          <FiGrid className="text-lg" />
          <span className="ml-2 text-sm font-medium">Dashboard</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-100 my-2"></div>

      {/* Banner Section */}
      <div
        className={`flex items-center justify-between p-3 rounded-lg select-none cursor-pointer transition-all duration-200 ${
          activeSection === "banner"
            ? "bg-blue-50 text-blue-600"
            : "hover:bg-gray-100"
        }`}
        onClick={toggleBannerDropdown}
      >
        <div className="flex items-center">
          <FiImage className="text-lg" />
          <span className="ml-2 text-sm font-medium">Banner</span>
        </div>
        <button className="focus:outline-none">
          {isBannerDropdownOpen ? (
            <FiMinus className="text-gray-500" />
          ) : (
            <FiPlus className="text-gray-500" />
          )}
        </button>
      </div>

      {/* Banner Dropdown Menu */}
      {isBannerDropdownOpen && (
        <div className="mt-2 pl-6">
          <div
            className="flex items-center p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer select-none transition-all duration-200"
            onClick={() => handleNavigation("/create-banner")}
          >
            <span>Create Banner</span>
          </div>
          <div
            className="flex items-center p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg mt-1 cursor-pointer select-none transition-all duration-200"
            onClick={() => handleNavigation("/view-banners")}
          >
            <span>View Banners</span>
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="border-b border-gray-100 my-2"></div>

      {/* About Section */}
      <div
        className={`flex items-center justify-between p-3 rounded-lg select-none cursor-pointer transition-all duration-200 ${
          activeSection === "about"
            ? "bg-blue-50 text-blue-600"
            : "hover:bg-gray-100"
        }`}
        onClick={() => {
          setActiveSection("about");
          handleNavigation("/about");
        }}
      >
        <div className="flex items-center">
          <FiInfo className="text-lg" />
          <span className="ml-2 text-sm font-medium">About</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-100 my-2"></div>

      {/* Events Section */}
      <div
        className={`flex items-center justify-between p-3 rounded-lg cursor-pointer select-none transition-all duration-200 ${
          activeSection === "events"
            ? "bg-blue-50 text-blue-600"
            : "hover:bg-gray-100"
        }`}
        onClick={toggleEventDropdown}
      >
        <div className="flex items-center">
          <FiCalendar className="text-lg" />
          <span className="ml-2 text-sm font-medium">Events</span>
        </div>
        <button className="focus:outline-none">
          {isEventDropdownOpen ? (
            <FiMinus className="text-gray-500" />
          ) : (
            <FiPlus className="text-gray-500" />
          )}
        </button>
      </div>

      {/* Events Dropdown Menu */}
      {isEventDropdownOpen && (
        <div className="mt-2 pl-6">
          <div
            className="flex items-center p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer select-none transition-all duration-200"
            onClick={() => handleNavigation("/create-event")}
          >
            <span>Create Event</span>
          </div>
          <div
            className="flex items-center p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg mt-1 cursor-pointer select-none transition-all duration-200"
            onClick={() => handleNavigation("/view-events")}
          >
            <span>View Events</span>
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="border-b border-gray-100 my-2"></div>

      {/* Event Schedule Section */}
      <div
        className={`flex items-center justify-between p-3 rounded-lg select-none cursor-pointer transition-all duration-200 ${
          activeSection === "event-schedule"
            ? "bg-blue-50 text-blue-600"
            : "hover:bg-gray-100"
        }`}
        onClick={() => {
          setActiveSection("event-schedule");
          handleNavigation("/event-schedule");
        }}
      >
        <div className="flex items-center">
          <FiClock className="text-lg" />
          <span className="ml-2 text-sm font-medium">Event Schedule</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-100 my-2"></div>

      {/* Speakers Section */}
      <div
        className={`flex items-center justify-between p-3 rounded-lg cursor-pointer select-none transition-all duration-200 ${
          activeSection === "speakers"
            ? "bg-blue-50 text-blue-600"
            : "hover:bg-gray-100"
        }`}
        onClick={toggleSpeakerDropdown}
      >
        <div className="flex items-center">
          <FiMic className="text-lg" />
          <span className="ml-2 text-sm font-medium">Speakers</span>
        </div>
        <button className="focus:outline-none">
          {isSpeakerDropdownOpen ? (
            <FiMinus className="text-gray-500" />
          ) : (
            <FiPlus className="text-gray-500" />
          )}
        </button>
      </div>

      {/* Speakers Dropdown Menu */}
      {isSpeakerDropdownOpen && (
        <div className="mt-2 pl-6">
          <div
            className="flex items-center p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer select-none transition-all duration-200"
            onClick={() => handleNavigation("/create-speaker")}
          >
            <span>Create Speaker</span>
          </div>
          <div
            className="flex items-center p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg mt-1 cursor-pointer select-none transition-all duration-200"
            onClick={() => handleNavigation("/view-speakers")}
          >
            <span>View Speakers</span>
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="border-b border-gray-100 my-2"></div>

      {/* Gallery Section */}
      <div
        className={`flex items-center justify-between p-3 rounded-lg select-none cursor-pointer transition-all duration-200 ${
          activeSection === "gallery"
            ? "bg-blue-50 text-blue-600"
            : "hover:bg-gray-100"
        }`}
        onClick={() => {
          setActiveSection("gallery");
          handleNavigation("/gallery");
        }}
      >
        <div className="flex items-center">
          <FiImage className="text-lg" />
          <span className="ml-2 text-sm font-medium">Gallery</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-100 my-2"></div>

      {/* Sponsors Section */}
      <div
        className={`flex items-center justify-between p-3 rounded-lg select-none cursor-pointer transition-all duration-200 ${
          activeSection === "sponsors"
            ? "bg-blue-50 text-blue-600"
            : "hover:bg-gray-100"
        }`}
        onClick={toggleSponsorsDropdown}
      >
        <div className="flex items-center">
          <FiUsers className="text-lg" />
          <span className="ml-2 text-sm font-medium">Sponsors</span>
        </div>
        <button className="focus:outline-none">
          {isSponsorsDropdownOpen ? (
            <FiMinus className="text-gray-500" />
          ) : (
            <FiPlus className="text-gray-500" />
          )}
        </button>
      </div>

      {/* Sponsors Dropdown Menu */}
      {isSponsorsDropdownOpen && (
        <div className="mt-2 pl-6">
          <div
            className="flex items-center p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer select-none transition-all duration-200"
            onClick={() => handleNavigation("/create-sponsor")}
          >
            <span>Create Sponsor</span>
          </div>
          <div
            className="flex items-center p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg mt-1 cursor-pointer select-none transition-all duration-200"
            onClick={() => handleNavigation("/view-sponsors")}
          >
            <span>View Sponsors</span>
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="border-b border-gray-100 my-2"></div>

      {/* Venues Section */}
      <div
        className={`flex items-center justify-between p-3 rounded-lg select-none cursor-pointer transition-all duration-200 ${
          activeSection === "venues"
            ? "bg-blue-50 text-blue-600"
            : "hover:bg-gray-100"
        }`}
        onClick={() => {
          setActiveSection("venues");
          handleNavigation("/venues");
        }}
      >
        <div className="flex items-center">
          <FiMapPin className="text-lg" />
          <span className="ml-2 text-sm font-medium">Venues</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-100 my-2"></div>

      {/* Social Links Section */}
      <div
        className={`flex items-center justify-between p-3 rounded-lg select-none cursor-pointer transition-all duration-200 ${
          activeSection === "social-links"
            ? "bg-blue-50 text-blue-600"
            : "hover:bg-gray-100"
        }`}
        onClick={() => {
          setActiveSection("social-links");
          handleNavigation("/social-links");
        }}
      >
        <div className="flex items-center">
          <FiLink className="text-lg" />
          <span className="ml-2 text-sm font-medium">Social Links</span>
        </div>
      </div>

    </div>
  );
}





