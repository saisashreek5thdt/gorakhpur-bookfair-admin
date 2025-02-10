import React, { useState } from "react";
import { FiEye, FiEdit, FiTrash, FiCheck } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SpeakersSection = () => {
  const [speakers, setSpeakers] = useState([
    { name: "John Doe", topic: "AI & Future", organization: "Google", experience: "10 Years", status: "Confirmed" },
    { name: "Jane Smith", topic: "Cybersecurity Trends", organization: "Microsoft", experience: "8 Years", status: "Pending" },
    { name: "Mike Johnson", topic: "Blockchain Innovation", organization: "IBM", experience: "12 Years", status: "Confirmed" },
  ]);
  const [editingIndex, setEditingIndex] = useState(null);
  const navigate = useNavigate();

  const handleEdit = (index) => setEditingIndex(index);
  const handleSave = () => setEditingIndex(null);
  const handleDelete = (index) => setSpeakers(speakers.filter((_, i) => i !== index));
  const handleView = (item) => navigate("/view-speaker", { state: item });

  const handleChange = (index, field, value) => {
    const updatedSpeakers = speakers.map((item, i) => (
      i === index ? { ...item, [field]: value } : item
    ));
    setSpeakers(updatedSpeakers);
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full cursor-pointer select-none">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Speakers Management</h2>

      {/* Table View for Large Screens (Desktops/Tablets) */}
      <div className="hidden md:block relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-xs text-gray-700 uppercase bg-gradient-to-r from-blue-50 to-purple-50">
            <tr>
              <th className="px-6 py-4">Sr. No.</th>
              <th className="px-6 py-4">Speaker Name</th>
              <th className="px-6 py-4">Topic</th>
              <th className="px-6 py-4">Organization</th>
              <th className="px-6 py-4">Experience</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {speakers.map((item, index) => (
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
                        value={item.name}
                        onChange={(e) => handleChange(index, "name", e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        value={item.topic}
                        onChange={(e) => handleChange(index, "topic", e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        value={item.organization}
                        onChange={(e) => handleChange(index, "organization", e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        value={item.experience}
                        onChange={(e) => handleChange(index, "experience", e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        value={item.status}
                        onChange={(e) => handleChange(index, "status", e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                    <td className="px-6 py-4">{item.topic}</td>
                    <td className="px-6 py-4">{item.organization}</td>
                    <td className="px-6 py-4">{item.experience}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-sm font-semibold ${
                          item.status === "Confirmed"
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
      <div className="md:hidden space-y-4 cursor-pointer select-none">
        {speakers.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-md font-semibold text-gray-900">{item.name}</h3>
            <p className="text-sm text-gray-700"><strong>Topic:</strong> {item.topic}</p>
            <p className="text-sm text-gray-700"><strong>Organization:</strong> {item.organization}</p>
            <p className="text-sm text-gray-700"><strong>Experience:</strong> {item.experience}</p>
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

export default SpeakersSection;
