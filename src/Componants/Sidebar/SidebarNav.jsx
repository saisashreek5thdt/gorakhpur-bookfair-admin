import SidebarNavList from "./SidebarNavList";

export default function SidebarNav() {
  return (
    <>
      <div className="p-4 border-b border-gray-200 text-lg overflow-auto" >
        <SidebarNavList />
      </div>
    </>
  );
}