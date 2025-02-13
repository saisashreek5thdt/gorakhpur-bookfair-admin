// import SidebarNavList from "./SidebarNavList";

// export default function SidebarNav({ isSidebarOpen }) {
//   return (
//     <div
//       className={`p-4 border-b border-gray-200 text-lg transition-all duration-300  ${
//         isSidebarOpen ? "opacity-100" : "opacity-1"
//       }`}
//     >
//       <SidebarNavList />
//     </div>
//   );
// }




import SidebarNavList from "./SidebarNavList";

export default function SidebarNav({ isSidebarOpen }) {
  return (
    <div
      className={`p-4 border-b border-gray-200 text-lg transition-all duration-300 ${
        isSidebarOpen ? "opacity-100" : "opacity-1"
      }`}
    >
      <SidebarNavList />
    </div>
  );
}
