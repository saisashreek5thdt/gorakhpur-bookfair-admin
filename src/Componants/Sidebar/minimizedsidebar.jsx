import {
  FiMic,
  FiGrid,
  FiCalendar,
  FiInfo,
  FiImage,
  FiMapPin,
  FiUsers,
  FiLink,
  // FiClock,
} from "react-icons/fi";
import { Tooltip } from "react-tooltip";

export default function MinimizedSidebar() {
  const icons = [
    { icon: FiGrid, tooltip: "Dashboard" },
    { icon: FiImage, tooltip: "Banner" },
    { icon: FiInfo, tooltip: "About" },
    { icon: FiCalendar, tooltip: "Event" },
    // { icon: FiClock, tooltip: "Event Schedule" },
    { icon: FiMic, tooltip: "Speakers" },
    { icon: FiUsers, tooltip: "Gallery" },
    { icon: FiMapPin, tooltip: "Venues" },
    { icon: FiLink, tooltip: "Social Links" },
  ];

  return (
    <div className="overflow-auto hidden lg:block md:block xl:block">
      {icons.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 bg-white hover:bg-gray-100"
          data-tooltip-id={`tooltip-${index}`}
        >
          <item.icon className="w-6 h-6 text-black" />
          <Tooltip id={`tooltip-${index}`} place="right" effect="solid">
            {item.tooltip}
          </Tooltip>
        </div>
      ))}
    </div>
  );
}
