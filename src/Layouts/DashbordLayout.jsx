import React, { useState, useEffect } from "react";
import Header from "../Layouts/Headerlayout";
import WelcomeCard from "../dashbaord/cards/WelcomeCard";
import CalendarCard from "../dashbaord/cards/CalendarCard";
import ClockCard from "../dashbaord/cards/ClockCard";
import ProjectTable from "../dashbaord/cards/ProjectTable"; // ✅ Import ProjectTable

const DashboardOverviewSection = () => {
  const [notifications, setNotifications] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  const [projects, setProjects] = useState([
    { id: "gorakhpur", name: "Gorakhpur Book Fair", status: "Complete", isEditing: false },
    { id: "patna", name: "Patna Book Fair", status: "Pending", isEditing: false },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen select-none">
      {/* Header */}
      <Header notifications={notifications} onClearNotifications={() => setNotifications([])} />

      {/* Cards Section */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
        <WelcomeCard />
        <CalendarCard selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        <ClockCard
          time={{
            hours: String(currentTime.getHours()).padStart(2, "0"),
            minutes: String(currentTime.getMinutes()).padStart(2, "0"),
            seconds: String(currentTime.getSeconds()).padStart(2, "0"),
          }}
        />
      </div>

      {/* Project Table Section */}
      <div className="p-6 mt-4">
        <ProjectTable projects={projects} setProjects={setProjects} />
      </div>
    </div>
  );
};

export default DashboardOverviewSection;
