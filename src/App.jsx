import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./Pages/dashboard/Dashboard";
import LandingLayout from "./layouts/LandingLayout";
import Landing from "./Pages/landing/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Landing />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/vetttracker" element={<VetTracker />} />
          <Route path="/earnandspend" element={<EarnAndSpend />} />
          <Route path="/setting" element={<Setting />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
