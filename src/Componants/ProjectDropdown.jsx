// import React, { useState } from "react";
// import { FiChevronDown } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";

// const ProjectDropdown = ({ projects, selectedProject }) => {
//   const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => setIsProjectDropdownOpen(true)}
//       onMouseLeave={() => setIsProjectDropdownOpen(false)}
//     >
//       <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-300 transition-all">
//         {selectedProject} <FiChevronDown />
//       </button>

//       {/* Dropdown Menu */}
//       <AnimatePresence>
//         {isProjectDropdownOpen && (
//           <motion.div
//             className="absolute left-0 mt-2 w-56 bg-white border border-gray-300 rounded-md shadow-md z-50"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2 }}
//           >
//             <ul>
//               {projects.map((project, index) => (
//                 <li
//                   key={index}
//                   className="p-2 text-gray-800 hover:bg-blue-500 hover:text-white cursor-pointer transition-all"
//                 >
//                   {/* Link to the project page */}
//                   <a
//                     href={`/${project.path}`} // Link to the project page
//                     className="block w-full h-full"
//                   >
//                     {project.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ProjectDropdown;



import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ProjectDropdown = ({ projects, selectedProject, onSelectProject }) => {
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsProjectDropdownOpen(true)}
      onMouseLeave={() => setIsProjectDropdownOpen(false)}
    >
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-300 transition-all">
        {selectedProject} <FiChevronDown />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isProjectDropdownOpen && (
          <motion.div
            className="absolute left-0 mt-2 w-56 bg-white border border-gray-300 rounded-md shadow-md z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ul>
              {projects.map((project, index) => (
                <li
                  key={index}
                  className="p-2 text-gray-800 hover:bg-blue-500 hover:text-white cursor-pointer transition-all"
                  onClick={() => onSelectProject(project)}
                >
                  {project.name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDropdown;