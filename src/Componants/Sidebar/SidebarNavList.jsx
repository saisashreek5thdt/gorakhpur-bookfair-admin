import { useState } from "react";
import {
  FiMic, FiPlus, FiMinus, FiGrid, FiCalendar, 
  FiInfo, FiImage, FiMapPin, FiUsers, 
  FiLink, FiClock,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function SidebarNavList({ onSectionChange }) {
  const navigate = useNavigate();

  const [dropdownStates, setDropdownStates] = useState({
    events: false,
    speakers: false,
    banner: false,
    sponsors: false
  });

  const [activeSection, setActiveSection] = useState("dashboard");

  const handleNavigation = (section) => {
    navigate(`/dashboard/${section}`); // Navigates inside Dashboard
    setActiveSection(section);
    onSectionChange && onSectionChange(section); // Pass the active section to the parent
  };

  const toggleDropdown = (section) => {
    setDropdownStates(prevStates => ({
      ...prevStates,
      [section]: !prevStates[section]
    }));
    handleNavigation(section); // Navigate to the main section when toggling dropdown
  };

  const renderDropdownItems = (items) => {
    return items.map((item, index) => (
      <div
        key={index}
        className="flex items-center p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg mt-1 cursor-pointer transition-all duration-200"
        onClick={() => handleNavigation(item.section)}
      >
        <span>{item.label}</span>
      </div>
    ));
  };

  const renderNavItem = (icon, label, section, dropdownItems = null) => {
    const isDropdownOpen = dropdownStates[section];
    const isActive = activeSection === section || activeSection.startsWith(`${section}/`);

    return (
      <>
        <div
          className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 ${
            isActive ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
          }`}
          onClick={() => {
            if (dropdownItems) {
              toggleDropdown(section);
            } else {
              handleNavigation(section);
            }
          }}
        >
          <div className="flex items-center">
            {icon}
            <span className="ml-2 text-sm font-medium">{label}</span>
          </div>
          {dropdownItems && (
            <button className="focus:outline-none">
              {isDropdownOpen ? <FiMinus className="text-gray-500" /> : <FiPlus className="text-gray-500" />}
            </button>
          )}
        </div>

        {dropdownItems && isDropdownOpen && (
          <div className="mt-2 pl-6">
            {renderDropdownItems([
              { label: "Create", section: `${section}/create` },
              { label: "View", section: `${section}/view` }
            ])}
          </div>
        )}

        <div className="border-b border-gray-100 my-2"></div>
      </>
    );
  };

  return (
    <div className="w-64 sm:h-auto bg-white rounded-lg p-4 cursor-pointer select-none">
      {renderNavItem(<FiGrid className="text-lg" />, "Dashboard", "dashboard")}
      {renderNavItem(<FiInfo className="text-lg" />, "About", "about")}
      {renderNavItem(<FiImage className="text-lg" />, "Banner", "banner", true)}
      {renderNavItem(<FiCalendar className="text-lg" />, "Events", "events", true)}
      {/* {renderNavItem(<FiClock className="text-lg" />, "Event Schedule", "event-schedule")} */}
      {renderNavItem(<FiImage className="text-lg" />, "Gallery", "gallery")}
      {renderNavItem(<FiMapPin className="text-lg" />, "Venues", "venues")}     
      {renderNavItem(<FiMic className="text-lg" />, "Speakers", "speakers", true)}
      {renderNavItem(<FiUsers className="text-lg" />, "Sponsors", "sponsors", true)}
      {renderNavItem(<FiLink className="text-lg" />, "Social Links", "social-links")}
    </div>
  );
}












