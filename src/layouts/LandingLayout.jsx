// Import necessary modules and components
import { Outlet } from "react-router-dom"; // Import Outlet to render nested routes
import { Header } from "./../components/index"; // Import the Header component
import styles from "./LandingLayout.module.css"; // Import styles for LandingLayout

// Define the LandingLayout component
const LandingLayout = () => {
  return (
    <div className={styles.LandingLayout}>
      {/* Apply styles to the outer container */}
      <div className="col-span-1 row-span-1 " style={{ background: "red" }}>
        <Header /> {/* Render the Header component */}
      </div>
      <main className="col-span-1 flex justify-center items-center">
        <Outlet /> {/* Render the content inside the Outlet (nested routes) */}
      </main>
    </div>
  );
};

export default LandingLayout; // Export the LandingLayout component for use in the application
