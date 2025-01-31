export default function SidebarLayout({ children }) {
  return (
    <div
      className="sidebarLayout h-screen bg-white text-gray-800 flex flex-col  overflow-hidden"
    >
      {children} {/* Render the sidebar content passed as children */}
    </div>
  );
}




























