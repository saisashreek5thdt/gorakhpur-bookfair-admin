import React, { useState } from "react";
import { FiEye, FiEdit, FiTrash, FiCheck } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SocialLinksSection = () => {
  const [socialLinks, setSocialLinks] = useState([
    { platform: "Facebook", url: "https://facebook.com/example", status: "Active" },
    { platform: "Twitter", url: "https://twitter.com/example", status: "Inactive" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/example", status: "Active" },
  ]);
  const [editingIndex, setEditingIndex] = useState(null);
  const navigate = useNavigate();

  const handleEdit = (index) => setEditingIndex(index);
  const handleSave = () => setEditingIndex(null);
  const handleDelete = (index) => setSocialLinks(socialLinks.filter((_, i) => i !== index));
  const handleView = (item) => navigate("/view-social-link", { state: item });

  const handleChange = (index, field, value) => {
    const updatedSocialLinks = socialLinks.map((item, i) => (
      i === index ? { ...item, [field]: value } : item
    ));
    setSocialLinks(updatedSocialLinks);
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full cursor-pointer select-none">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Social Links Management</h2>

      {/* Table View for Large Screens (Desktops/Tablets) */}
      <div className="hidden md:block relative overflow-x-auto rounded-lg mt-4">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-xs text-gray-700 uppercase bg-gradient-to-r from-blue-50 to-purple-50">
            <tr>
              <th className="px-6 py-4">Sr. No.</th>
              <th className="px-6 py-4">Platform</th>
              <th className="px-6 py-4">URL</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {socialLinks.map((item, index) => (
              <tr
                key={index}
                className={`bg-white border-b hover:bg-gray-50 transition ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-6 py-4 font-medium text-gray-900">{index + 1}</td>
                {editingIndex === index ? (
                  <>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        value={item.platform}
                        onChange={(e) => handleChange(index, "platform", e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        value={item.url}
                        onChange={(e) => handleChange(index, "url", e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={item.status}
                        onChange={(e) => handleChange(index, "status", e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-6 py-4 font-medium text-gray-900">{item.platform}</td>
                    <td className="px-6 py-4">
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {item.url}
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-sm font-semibold ${
                          item.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </>
                )}
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center space-x-3">
                    {editingIndex === index ? (
                      <button
                        onClick={handleSave}
                        className="text-green-600 hover:text-green-700 flex items-center space-x-1 bg-green-50 px-3 py-2 rounded-md transition"
                      >
                        <FiCheck />
                        <span>Save</span>
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => handleView(item)}
                          className="text-blue-600 hover:text-blue-700 flex items-center space-x-1 bg-blue-50 px-3 py-2 rounded-md transition"
                        >
                          <FiEye />
                          <span>View</span>
                        </button>
                        <button
                          onClick={() => handleEdit(index)}
                          className="text-yellow-600 hover:text-yellow-700 flex items-center space-x-1 bg-yellow-50 px-3 py-2 rounded-md transition"
                        >
                          <FiEdit />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="text-red-600 hover:text-red-700 flex items-center space-x-1 bg-red-50 px-3 py-2 rounded-md transition"
                        >
                          <FiTrash />
                          <span>Delete</span>
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4 cursor-pointer select-none mt-4">
        {socialLinks.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-md font-semibold text-gray-900">{item.platform}</h3>
            <p className="text-sm text-gray-700"><strong>URL:</strong> <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{item.url}</a></p>
            <p className="text-sm text-gray-700"><strong>Status:</strong> {item.status}</p>
            <div className="mt-3 flex items-center justify-between">
              <button onClick={() => handleView(item)} className="text-blue-600 hover:text-blue-700 flex items-center space-x-1"><FiEye /><span>View</span></button>
              <button onClick={() => handleEdit(index)} className="text-yellow-600 hover:text-yellow-700 flex items-center space-x-1"><FiEdit /><span>Edit</span></button>
              <button onClick={() => handleDelete(index)} className="text-red-600 hover:text-red-700 flex items-center space-x-1"><FiTrash /><span>Delete</span></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinksSection;
