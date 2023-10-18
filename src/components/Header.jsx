// Import necessary modules and components
import PropTypes from "prop-types"; // Fixed import
import Sidebar from "./Siderbar";
import { useState } from "react";
import { MdSubject, MdOutlineNotifications } from "react-icons/md";

// Define the Header component
const Header = () => {
  // State for controlling the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sample data (to be fetched from an API)
  const name = "Chinedu"; // Would come from an API
  const imageUrl = "";

  return (
    <div className="items-center flex sm:flex-row justify-between sm:items-center bg-white fixed top-0 left-0 right-0 z-30 border-b">
      <div className="flex items-center justify-center z-10 relative">
        {/* Logo (commented out) */}
        {/* <a>
          <img src={Logo} className="h-20 p-5" alt="theCultiverly logo" />
        </a> */}

        <h2 className="m-2 font-extrabold text-[22px] my-5">E-SCAPE</h2>

        {/* Sidebar toggle button (visible on small screens) */}
        <span
          className="cursor-pointer md:hidden block"
          onClick={toggleSidebar}
        >
          <MdSubject size={25} />
        </span>

        {isSidebarOpen && (
          <>
            {/* Overlay to close sidebar (visible on small screens) */}
            <div
              className="fixed inset-0 bg-black opacity-80"
              onClick={toggleSidebar} // Close the sidebar when clicking the overlay
            ></div>

            {/* Sidebar (visible on small screens) */}
            <aside className="h-screen w-[80%] top-0 pl-9 z-20 fixed md:hidden">
              <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
            </aside>
          </>
        )}
      </div>

      <div className="flex flex-end space-x-2 pr-5">
        {/* Bell Notification Icon */}
        <div className="flex py-3 cursor-pointer">
          <div className="rounded-full h-10 w-10 bg-gray-100 flex justify-center items-center">
            <span className="text-white font-bold text-sm">
              <MdOutlineNotifications color="black" size={22} />
            </span>
          </div>
        </div>

        {/* Image Logo/User Initials (visible on medium and large screens) */}
        <div className="w-[100%] flex-col items-center hidden md:flex">
          <div className="flex py-3">
            {imageUrl || "" ? (
              <img
                src={imageUrl || ""}
                alt="Profile"
                className="rounded-full h-10 w-10"
              />
            ) : (
              <div className="rounded-full h-10 w-10 bg-gray-300 flex justify-center items-center">
                <span className="text-white font-bold text-sm">
                  {name.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Define propTypes for the Header component
Header.propTypes = {
  privateHeaderStyle: PropTypes.string,
};

// Export the Header component
export default Header;
