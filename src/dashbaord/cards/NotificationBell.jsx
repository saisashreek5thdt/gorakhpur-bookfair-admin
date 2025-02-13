// import React, { useState } from "react";
// import { FiBell, FiX } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";

// const NotificationBell = ({ notifications = [], onClear, onDelete }) => {
//   const [notificationsVisible, setNotificationsVisible] = useState(false);

//   return (
//     <div
//       className="fixed top-4 right-4 z-50"
//       onMouseEnter={() => setNotificationsVisible(true)}
//       onMouseLeave={() => setNotificationsVisible(false)}
//     >
//       <div className="relative">
//         <FiBell className="h-6 w-6 text-gray-600 hover:text-blue-500 transition-all cursor-pointer" />
//         {notifications?.length > 0 && (
//           <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">
//             {notifications.length}
//           </span>
//         )}
//         <AnimatePresence>
//           {notificationsVisible && (
//             <motion.div
//               className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl p-4"
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.2 }}
//             >
//               <div className="flex justify-between items-center mb-3">
//                 <h3 className="font-semibold text-gray-700">Notifications</h3>
//                 <button className="text-blue-500 text-sm hover:underline" onClick={onClear}>
//                   Clear All
//                 </button>
//               </div>
//               <ul className="space-y-2">
//                 {notifications.map((notification) => (
//                   <motion.li
//                     key={notification.id}
//                     className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
//                     initial={{ opacity: 0, x: -10 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -10 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <span className="text-sm text-gray-600">{notification.message}</span>
//                     <FiX
//                       className="h-4 w-4 text-gray-400 hover:text-red-500 cursor-pointer"
//                       onClick={() => onDelete(notification.id)}
//                     />
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default NotificationBell;
