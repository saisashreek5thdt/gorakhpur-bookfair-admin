export default function SidebarLogo({ toggleSidebar, isSidebarOpen }) {
  return (
    <div
      className={`p-4 border-b border-gray-200 flex justify-center items-center relative group cursor-pointer select-none transition-all duration-300
      ${isSidebarOpen ? "justify-start pl-4" : "justify-center"}`}
      onClick={toggleSidebar}
      title="Menubar"
    >
      <img
        src="https://merakiui.com/images/logo.svg"
        alt="Logo"
        className="w-10 h-10"
      />

      {/* Tooltip for Logo */}
      {!isSidebarOpen && (
        <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Toggle Sidebar
        </span>
      )}
    </div>
  );
}



//   export default function SidebarLogo() {
//   return (
//     <div className="p-4 border-b border-gray-200 flex justify-center items-center bg-white fixed w-64">
//       <img
//         src="https://merakiui.com/images/logo.svg"
//         alt="Logo"
//         className="w-10 h-10"
//       />
//     </div>
//   );
// }
