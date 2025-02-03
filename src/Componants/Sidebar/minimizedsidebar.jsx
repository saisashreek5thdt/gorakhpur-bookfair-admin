import { useState } from "react";
import {
  FiMic,
  FiPlus,
  FiMinus,
  FiGrid,
  FiCalendar,
  FiInfo,
  FiImage,
  FiMapPin,
  FiUsers,
  FiLink,
  FiClock,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function MinimizedSidebar() {
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
  const [isSpeakerDropdownOpen, setIsSpeakerDropdownOpen] = useState(false);
  const [isBannerDropdownOpen, setIsBannerDropdownOpen] = useState(false);
  const [isSponsorsDropdownOpen, setIsSponsorsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const toggleBannerDropdown = (event) => {
    event.stopPropagation();
    setIsBannerDropdownOpen(!isBannerDropdownOpen);
    setIsEventDropdownOpen(false);
    setIsSpeakerDropdownOpen(false);
    setIsSponsorsDropdownOpen(false);
    setActiveSection("banner");
  };

  return (
    <>
      <div className="overflow-auto">
        {[
          { icon: FiGrid },
          { icon: FiImage },
          { icon: FiInfo },
          { icon: FiCalendar },
          { icon: FiClock },
          { icon: FiMic },
          { icon: FiUsers },
          { icon: FiMapPin },
          { icon: FiLink },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg select-none cursor-pointer transition-all duration-200 bg-white hover:bg-gray-100 dark:bg-white-400 dark:hover:bg-gray-400"
          >
            <item.icon className="w-6 h-6 md:w-6 md:h-4 lg:w-10 lg:h-10 xl:w-8 xl:h-12 text-black-200 dark:text-black-100 transition-transform duration-200 hover:text-black-100 dark:hover:text-gray-200" />
          </div>
        ))}
      </div>
    </>
  );
}
