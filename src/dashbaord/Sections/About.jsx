import React, { useState } from "react";
import { FiEdit, FiCheck, FiTrash, FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const [aboutContent, setAboutContent] = useState({
    title: "About Our Event",
    description:
      "Welcome to our annual tech conference, where industry experts, innovators, and enthusiasts come together to discuss the latest advancements in technology, AI, and digital transformation.",
    mission:
      "Our mission is to create a collaborative environment where ideas flourish, professionals network, and groundbreaking technologies are showcased.",
    vision:
      "We envision a world where technology empowers individuals and businesses to reach their highest potential.",
  });

  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  const handleEdit = () => setEditing(true);
  const handleSave = () => setEditing(false);
  const handleDelete = () => {
    setAboutContent({
      title: "",
      description: "",
      mission: "",
      vision: "",
    });
  };

  const handleChange = (field, value) => {
    setAboutContent((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleView = () => {
    navigate("/view-about", { state: aboutContent });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full cursor-pointer select-none">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
        <div className="flex items-center space-x-3">
          <button
            onClick={handleView}
            className="text-blue-600 hover:text-blue-700 flex items-center space-x-1 bg-blue-50 px-4 py-2 rounded-md transition"
          >
            <FiEye />
            <span>View</span>
          </button>
          {!editing ? (
            <button
              onClick={handleEdit}
              className="text-yellow-600 hover:text-yellow-700 flex items-center space-x-1 bg-yellow-50 px-4 py-2 rounded-md transition"
            >
              <FiEdit />
              <span>Edit</span>
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="text-green-600 hover:text-green-700 flex items-center space-x-1 bg-green-50 px-4 py-2 rounded-md transition"
            >
              <FiCheck />
              <span>Save</span>
            </button>
          )}
          <button
            onClick={handleDelete}
            className="text-red-600 hover:text-red-700 flex items-center space-x-1 bg-red-50 px-4 py-2 rounded-md transition"
          >
            <FiTrash />
            <span>Delete</span>
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {/* Card for Title */}
        <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-gray-800">Title</h3>
          {editing ? (
            <input
              type="text"
              value={aboutContent.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="border border-gray-300 rounded-md p-2 mt-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-xl text-gray-800">{aboutContent.title}</p>
          )}
        </div>

        {/* Card for Description */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-gray-800">Description</h3>
          {editing ? (
            <textarea
              value={aboutContent.description}
              onChange={(e) => handleChange("description", e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          ) : (
            <p className="text-lg text-gray-800">{aboutContent.description}</p>
          )}
        </div>

        {/* Card for Mission */}
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-gray-800">Mission</h3>
          {editing ? (
            <textarea
              value={aboutContent.mission}
              onChange={(e) => handleChange("mission", e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
          ) : (
            <p className="text-lg text-gray-800">{aboutContent.mission}</p>
          )}
        </div>

        {/* Card for Vision */}
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-gray-800">Vision</h3>
          {editing ? (
            <textarea
              value={aboutContent.vision}
              onChange={(e) => handleChange("vision", e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
          ) : (
            <p className="text-lg text-gray-800">{aboutContent.vision}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
