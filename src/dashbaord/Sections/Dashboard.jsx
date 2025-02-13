import React, { useState, useEffect } from "react";
import Header from "../cards/Header";
import WelcomeCard from "../cards/WelcomeCard";
import CalendarCard from "../cards/CalendarCard";
import ClockCard from "../cards/ClockCard";
import PieChartSection from "../cards/PieChartSection";
import EventList from "../cards/eventlist";

const DashboardOverviewSection = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New event scheduled for tomorrow", read: false },
    { id: 2, message: "New purchase made by Guy Hawkins", read: false },
    { id: 3, message: "Book 'React Essentials' is back in stock", read: false },
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Header
        notifications={notifications}
        onClearNotifications={() => setNotifications([])}
        onDeleteNotification={(id) => setNotifications(notifications.filter(n => n.id !== id))}
      />

      {/* Responsive Grid Layout */}
      <div className="p-6">
        {/* First Row - No Changes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <WelcomeCard />
          <CalendarCard selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          <ClockCard time={{ 
            hours: String(currentTime.getHours()).padStart(2, "0"), 
            minutes: String(currentTime.getMinutes()).padStart(2, "0"), 
            seconds: String(currentTime.getSeconds()).padStart(2, "0") 
          }} />
        </div>

        {/* Second Row - Responsive Layout */}
        <div className="grid grid-cols-1 lg:hidden gap-4">
          {/* Mobile and Tablet Layout - Vertical Stack */}
          <PieChartSection title="User Distribution" />
          <PieChartSection title="Event Participants" />
          <EventList />
        </div>

        <div className="hidden lg:flex lg:gap-4">
          {/* Desktop Layout - Custom Widths */}
          <div className="w-[30%]">
            <PieChartSection title="User Distribution" />
          </div>
          <div className="w-[30%]">
            <PieChartSection title="Event Participants" />
          </div>
          <div className="w-[40%]">
            <EventList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverviewSection;