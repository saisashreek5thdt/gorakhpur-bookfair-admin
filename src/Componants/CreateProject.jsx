import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const [projectName, setProjectName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!projectName) {
      alert("Please enter a project name.");
      return;
    }
    alert(`Project "${projectName}" created successfully!`);
    navigate("/choose-project"); // Redirect back after creation
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">📖 Create a New Project</h2>
        
        {/* Project Name Input */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter project name"
            className="w-full p-3 border rounded-lg mb-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all"
          >
            Create Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
