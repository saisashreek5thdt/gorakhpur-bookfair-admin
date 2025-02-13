import React, { useState, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const PieChartSection = ({ title }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  // Chart Data Stored Here
  const chartData = useMemo(() => ({
    "User Distribution": [
      { name: "Active Visitors", value: 70000, color: "#4F46E5" },
      { name: "Registered Vendors", value: 20000, color: "#82ca9d" },
      { name: "Regular Volunteers", value: 8730, color: "#ff8042" },
    ],
    "Event Participants": [
      { name: "Premium Sponsors", value: 120, color: "#8884d8" },
      { name: "Featured Exhibitors", value: 80, color: "#FFBB28" },
      { name: "Guest Authors", value: 60, color: "#FF8042" },
      { name: "Keynote Speakers", value: 40, color: "#00C49F" },
    ],
  }), []);

  // Get data based on the title
  const data = chartData[title] || [];

  // Handle Pie Slice & Legend Click
  const handleClick = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  // Handle Hover Effects
  const handleMouseEnter = (index) => setHoverIndex(index);
  const handleMouseLeave = () => setHoverIndex(null);

  // Calculate total value for percentage calculation
  const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <motion.div
      className="bg-white p-4 rounded-xl shadow-lg w-full h-[300px] border border-gray-200 flex flex-col items-center relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Title */}
      <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>

      <div className="flex items-center w-full h-full">
        {/* Pie Chart on Left */}
        <div className="w-1/2 h-full flex items-center justify-center relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={60}
                dataKey="value"
                onClick={(_, index) => handleClick(index)}
                onMouseEnter={(_, index) => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                animationDuration={500}
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke="white"
                    strokeWidth={2}
                    opacity={selectedIndex === index || hoverIndex === index ? 1 : 0.5}
                    className="transition-all duration-300"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend on Right */}
        <div className="w-1/2 flex flex-col justify-center pl-4 relative z-10">
          {data.map((item, index) => {
            const percentage = ((item.value / totalValue) * 100).toFixed(2); // Calculate percentage
            const isActive = selectedIndex === index || hoverIndex === index;

            return (
              <div
                key={index}
                className="flex items-center gap-2 mb-1 cursor-pointer transition-all duration-300"
                onClick={() => handleClick(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Rectangle color box with hover effect */}
                <motion.span
                  className="w-6 h-3 transition-all duration-300"
                  style={{
                    backgroundColor: item.color,
                    borderRadius: isActive ? "6px" : "3px",
                    transform: isActive ? "scale(1.2)" : "scale(1)",
                    boxShadow: isActive ? "0px 0px 10px rgba(0,0,0,0.2)" : "none",
                  }}
                ></motion.span>

                {/* Text with hover effect */}
                <motion.span
                  className={`text-sm font-medium transition-all duration-300 ${
                    isActive ? "text-blue-600 font-bold scale-105" : "text-gray-700"
                  }`}
                >
                  {item.name} - {item.value} ({percentage}%)
                </motion.span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default PieChartSection;