// Import necessary modules and components from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import custom layout and page components
import DashboardLayout from "./layouts/DashboardLayout"; // Dashboard layout component
import Dashboard from "./Pages/dashboard/Dashboard"; // Dashboard page component
import LandingLayout from "./layouts/LandingLayout"; // Landing layout component
import Landing from "./Pages/landing/Landing"; // Landing page component

// Define the main App component
function App() {
  return (
    <Router>
      <Routes>
        {/* Define a route for the LandingLayout component */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Landing />} />{" "}
          {/* Define a route for the Landing page */}
        </Route>

        {/* Define a route for the DashboardLayout component */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />{" "}
          {/* Define a route for the Dashboard page */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App; // Export the main App component for use in the application
