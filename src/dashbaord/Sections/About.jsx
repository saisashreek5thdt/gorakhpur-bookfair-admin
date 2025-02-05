// src/dashboard/Sections/About.jsx
import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">About Event Management Platform</h2>
      <div className="space-y-4">
        <p className="text-gray-600">
          Our platform provides comprehensive event management solutions 
          to streamline your event planning and execution process.
        </p>
        <div>
          <h3 className="font-medium mb-2">Key Features:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Event Creation and Management</li>
            <li>Speaker and Sponsor Tracking</li>
            <li>Real-time Analytics</li>
            <li>Customizable Banner Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;


