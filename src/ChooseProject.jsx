import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import DashboardOverviewSection from "./Layouts/DashbordLayout"; 

const ChooseProject = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([
    { id: "gorakhpur", name: "Gorakhpur Book Fair", status: "Complete", isEditing: false },
    { id: "patna", name: "Patna Book Fair", status: "Pending", isEditing: false },
  ]);

  const [newProject, setNewProject] = useState("");

  const handleCreateProject = () => {
    if (newProject.trim() === "") return;
    const newId = newProject.toLowerCase().replace(/ /g, "-");
    setProjects([...projects, { id: newId, name: newProject, status: "Pending", isEditing: false }]);
    setNewProject("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-600 to-purple-800">
      {/* Dashboard Overview Section (Three Cards) */}
      <DashboardOverviewSection />
    </div>
  );
};

export default ChooseProject;
