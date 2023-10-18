// Import necessary modules and components
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../components"; // Import Header and Sidebar components
import styles from "./dashboardLayout.module.css"; // Import styles for DashboardLayout

// Define the DashboardLayout component
const DashboardLayout = () => {
  // Define state to control whether the sidebar is hidden based on the window width
  const [isAsideHidden, setIsAsideHidden] = useState(window.innerWidth <= 768); // Adjust the breakpoint as needed

  // Use the useEffect hook to handle window resize events
  useEffect(() => {
    // Define a function to handle window resize events
    const handleResize = () => {
      setIsAsideHidden(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Add an event listener for the "resize" event and call the handleResize function
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  // Return the JSX for the DashboardLayout component
  return (
    <div className={`${styles.dashboardLayout} divide-x `}>
      <div className="col-span-2 row-span-1">
        <Header /> {/* Render the Header component */}
      </div>
      {!isAsideHidden && (
        <aside className="row-start-2 row-span-4 h-[90%] md:block">
          <Sidebar />{" "}
          {/* Render the Sidebar component when the sidebar is not hidden */}
        </aside>
      )}
      <main
        className={`col-start-${
          isAsideHidden ? "1" : "2"
        } md:col-span-1 col-span-2 h-screen md:h-[124%] bg-[#F9F9FE]`}
      >
        <Outlet /> {/* Render the content inside the Outlet (nested routes) */}
      </main>
    </div>
  );
};

export default DashboardLayout; // Export the DashboardLayout component for use in the application
