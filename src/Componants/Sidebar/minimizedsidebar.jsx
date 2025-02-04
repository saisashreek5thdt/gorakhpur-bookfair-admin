import { useState } from "react";
import {
  FiMic,
  FiGrid,
  FiCalendar,
  FiInfo,
  FiImage,
  FiMapPin,
  FiUsers,
  FiLink,
  FiClock,
} from "react-icons/fi";
import { Tooltip } from "react-tooltip";

export default function MinimizedSidebar() {
  const icons = [
    { icon: FiGrid, tooltip: "Dashboard" },
    { icon: FiImage, tooltip: "Images" },
    { icon: FiInfo, tooltip: "Information" },
    { icon: FiCalendar, tooltip: "Calendar" },
    { icon: FiClock, tooltip: "Clock" },
    { icon: FiMic, tooltip: "Microphone" },
    { icon: FiUsers, tooltip: "Users" },
    { icon: FiMapPin, tooltip: "Location" },
    { icon: FiLink, tooltip: "Links" },
  ];

  return (
    <div className="overflow-auto">
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
