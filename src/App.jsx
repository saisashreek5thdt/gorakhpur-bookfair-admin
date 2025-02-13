// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./Home";
// import Dashboard from "./dashbaord/Dashboard";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/dashboard/*", // Allow Dashboard to handle nested routes
//     element: <Dashboard />,
//   }
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;









// // import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import Home from "./Home";
// // import Dashboard from "./dashbaord/Dashboard";

// // function App() {
// //   const router = createBrowserRouter([
// //     {
// //       path: "/",
// //       element: <Home />,
// //     },
// //     {
// //       path: "/dashboard",
// //       element: <Dashboard />
// //     }
// //   ]);

// //   return <RouterProvider router={router} />;
// // }

// // export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ChooseProject from "./ChooseProject";
import Dashboard from "./dashbaord/Dashboard";
import CreateProject from "./Componants/CreateProject"; // Import CreateProject page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-project" element={<ChooseProject />} />
        <Route path="/dashboard/:projectId/*" element={<Dashboard />} />
        <Route path="/create-project" element={<CreateProject />} /> {/* NEW PAGE */}
      </Routes>
    </Router>
  );
};

export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import ChooseProject from "./ChooseProject";
// import Dashboard from "./dashbaord/Dashboard";
// import CreateProject from "./Componants/CreateProject"; // Import CreateProject page
// import Gorakhpur from "./projects/Gorakhpur"; // Import Gorakhpur page
// import Patna from "./projects/Patna"; // Import Patna page
// import Mumbai from "./projects/Mumbai"; // Import Mumbai page
// import Jaipur from "./projects/Jaipur"; // Import Jaipur page

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/choose-project" element={<ChooseProject />} />
//         <Route path="/dashboard/:projectId/*" element={<Dashboard />} />
//         <Route path="/create-project" element={<CreateProject />} /> {/* NEW PAGE */}
//         {/* Add routes for project-specific pages */}
//         <Route path="/gorakhpur" element={<Gorakhpur />} />
//         <Route path="/patna" element={<Patna />} />
//         <Route path="/mumbai" element={<Mumbai />} />
//         <Route path="/jaipur" element={<Jaipur />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;




