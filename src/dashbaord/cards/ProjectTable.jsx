import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBook, FaPlus, FaEdit, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProjectTable = ({ projects, setProjects }) => {
  const navigate = useNavigate();
  const [newProjectName, setNewProjectName] = useState("");

  // Status colors for UI improvement
  const statusColors = {
    Pending: "bg-yellow-200 text-yellow-800",
    "In Progress": "bg-blue-200 text-blue-800",
    Completed: "bg-green-200 text-green-800",
  };

  // Handle View
  const handleView = (id) => {
    navigate(`/dashboard/${id}`);
  };

  // Handle Edit
  const handleEdit = (id) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id ? { ...project, isEditing: !project.isEditing } : project
      )
    );
  };

  // Handle Project Name Update
  const handleUpdateProject = (id, newName) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id ? { ...project, name: newName, isEditing: false } : project
      )
    );
  };

  // Handle Status Change
  const handleStatusChange = (id, newStatus) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id ? { ...project, status: newStatus } : project
      )
    );
  };

  // Handle Create New Project
  const handleCreateProject = () => {
    if (newProjectName.trim() === "") return;
    const newId = newProjectName.toLowerCase().replace(/ /g, "-");
    setProjects([...projects, { id: newId, name: newProjectName, status: "Pending", isEditing: false }]);
    setNewProjectName("");
  };

  return (
    <div className="w-full bg-white p-4 rounded-xl shadow-lg">
      {/* Table Header */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center">
          <FaBook className="mr-2 text-blue-500" /> Select Your Project
        </h2>
      </div>

      {/* Create Project Input and Button */}
      {/* <div className="mb-4 flex flex-col sm:flex-row justify-center items-center gap-3">
        <input
          type="text"
          placeholder="Enter new project name"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none w-full sm:w-64"
        />
        <motion.button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCreateProject}
        >
          <FaPlus className="mr-2" /> Create
        </motion.button>
      </div> */}

      {/* Scrollable Table Container */}
      <div className="max-h-96 overflow-y-auto rounded-lg shadow-md border">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-blue-500 text-white text-center text-sm sm:text-base">
              <th className="p-3">Sr. No.</th>
              <th className="p-3">Logo</th>
              <th className="p-3">Project Name</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {projects.map((project, index) => (
              <motion.tr
                key={project.id}
                className="hover:bg-gray-50 transition-all text-center h-12 text-sm sm:text-base"
                whileHover={{ scale: 1.01 }}
              >
                <td className="p-2 font-semibold text-gray-700">{index + 1}</td>
                <td className="p-2 text-lg flex items-center justify-center">
                  {project.name === "Gorakhpur Book Fair" ? (
                    <img
                      src="https://merakiui.com/images/logo.svg"
                      alt="Gorakhpur Logo"
                      className="h-6 w-6 mx-auto"
                    />
                  ) : (
                    <FaBook className="text-blue-500" />
                  )}
                </td>
                <td className="p-2">
                  {project.isEditing ? (
                    <input
                      type="text"
                      value={project.name}
                      onChange={(e) => handleUpdateProject(project.id, e.target.value)}
                      className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
                    />
                  ) : (
                    <span className="font-medium text-gray-800">{project.name}</span>
                  )}
                </td>
                <td className="p-2">
                  <select
                    className={`p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 cursor-pointer transition-all text-xs sm:text-sm ${statusColors[project.status]}`}
                    value={project.status}
                    onChange={(e) => handleStatusChange(project.id, e.target.value)}
                  >
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                  </select>
                </td>
                <td className="p-2 flex justify-center gap-2 flex-wrap sm:flex-nowrap">
                  <motion.button
                    className="bg-green-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg hover:bg-green-600 transition-all flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleView(project.id);
                    }}
                  >
                    <FaEye className="mr-1" /> View
                  </motion.button>
                  <motion.button
                    className="bg-yellow-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg hover:bg-yellow-600 transition-all flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(project.id);
                    }}
                  >
                    <FaEdit className="mr-1" /> {project.isEditing ? "Save" : "Edit"}
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;