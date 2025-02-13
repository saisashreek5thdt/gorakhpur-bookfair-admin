import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import SidebarLayout from "../Layouts/SidebarLayout";
import SidebarLogo from "../Componants/Sidebar/SidebarLogo";
import SidebarLogout from "../Componants/Sidebar/SidebarLogout";
import SidebarNavList from "../Componants/Sidebar/SidebarNavList";
import MinimizedSidebar from "../Componants/Sidebar/minimizedsidebar";

// Import Sections (Keeping the misspelled folder name)
import DashboardSection from "../dashbaord/Sections/Dashboard";  
import AboutSection from "../dashbaord/Sections/About";
import BannerSection from "../dashbaord/Sections/Banner";
import EventsSection from "../dashbaord/Sections/Events";
import GallerySection from "../dashbaord/Sections/Gallery";
import SpeakersSection from "../dashbaord/Sections/Speakers";
import SponsorsSection from "../dashbaord/Sections/Sponsors";
import VenuesSection from "../dashbaord/Sections/Venues";
import SocialLinksSection from "../dashbaord/Sections/SocialLinks";

export default function DashboardLayout() {
  const { projectId } = useParams(); // Get selected project from URL
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const savedState = localStorage.getItem("sidebarOpen");
    setIsSidebarOpen(savedState === "true");
  }, []);

  const toggleSidebar = () => {
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);
    localStorage.setItem("sidebarOpen", newState);
  };

  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      {/* Sidebar */}
      <div className={`h-screen bg-white transition-all duration-300 flex flex-col ${isSidebarOpen ? "w-76" : "w-16"}`}>
        <SidebarLayout>
          <SidebarLogo toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          <div className="flex-1 overflow-y-auto">
            {isSidebarOpen ? <SidebarNavList /> : <MinimizedSidebar toggleSidebar={toggleSidebar} />}
          </div>
          <SidebarLogout isSidebarOpen={isSidebarOpen} />
        </SidebarLayout>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0 p-4 md:p-0 sm:mt-0 mt-16 bg-gray-100">
        <Routes>
          <Route index element={<DashboardSection />} />  
          <Route path="dashboard" element={<DashboardSection />} />
          <Route path="about" element={<AboutSection />} />
          <Route path="banner" element={<BannerSection />} />
          <Route path="events" element={<EventsSection />} />
          <Route path="gallery" element={<GallerySection />} />
          <Route path="speakers" element={<SpeakersSection />} />
          <Route path="sponsors" element={<SponsorsSection />} />
          <Route path="venues" element={<VenuesSection />} />
          <Route path="social-links" element={<SocialLinksSection />} />
        </Routes>
      </div>
    </div>
  );
}
























// import React, { useState, useEffect } from "react";
// import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import SidebarLayout from "../Layouts/SidebarLayout";
// import SidebarLogo from "../Componants/Sidebar/SidebarLogo";
// import SidebarLogout from "../Componants/Sidebar/SidebarLogout";
// import SidebarNavList from "../Componants/Sidebar/SidebarNavList";
// import MinimizedSidebar from "../Componants/Sidebar/minimizedsidebar";

// // Import Sections
// import DashboardSection from "../dashbaord/Sections/Dashboard";
// import AboutSection from "../dashbaord/Sections/About";
// import BannerSection from "../dashbaord/Sections/Banner";
// import EventsSection from "../dashbaord/Sections/Events";
// import GallerySection from "../dashbaord/Sections/Gallery";
// import SpeakersSection from "../dashbaord/Sections/Speakers";
// import SponsorsSection from "../dashbaord/Sections/Sponsors";
// import VenuesSection from "../dashbaord/Sections/Venues";
// import SocialLinksSection from "../dashbaord/Sections/SocialLinks";

// export default function Dashboard() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedState = localStorage.getItem("sidebarOpen");
//     setIsSidebarOpen(savedState === "true");
//   }, []);

//   const toggleSidebar = () => {
//     const newState = !isSidebarOpen;
//     setIsSidebarOpen(newState);
//     localStorage.setItem("sidebarOpen", newState);
//   };

//   return (
//     <div className="flex flex-col sm:flex-row min-h-screen">
//       {/* Sidebar */}
//       <div className={`h-screen bg-white transition-all duration-300 flex flex-col ${isSidebarOpen ? "w-76" : "w-16"}`}>
//         <SidebarLayout>
//           <SidebarLogo toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
//           <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-300">
//             {isSidebarOpen ? <SidebarNavList /> : <MinimizedSidebar toggleSidebar={toggleSidebar} />}
//           </div>
//           <SidebarLogout isSidebarOpen={isSidebarOpen} />
//         </SidebarLayout>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 min-w-0 p-4 md:p-0 sm:mt-0 mt-16 bg-gray-100">
//         <Routes>
//           <Route path="/" element={<Navigate replace to="dashboard" />} />
//           <Route path="dashboard" element={<DashboardSection />} />
//           <Route path="about" element={<AboutSection />} />
//           <Route path="banner" element={<BannerSection />} />
//           <Route path="events" element={<EventsSection />} />
//           <Route path="gallery" element={<GallerySection />} />
//           <Route path="speakers" element={<SpeakersSection />} />
//           <Route path="sponsors" element={<SponsorsSection />} />
//           <Route path="venues" element={<VenuesSection />} />
//           <Route path="social-links" element={<SocialLinksSection />} />
//           <Route path="*" element={<h1>404 Not Found</h1>} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

