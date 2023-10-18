// Import necessary modules and components
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { MdClear, MdDashboard } from "react-icons/md";

// Define the Sidebar component
const Sidebar = ({ onClose }) => {
  // Get the navigation function from React Router
  const navigate = useNavigate();

  // Function to handle navigating to the dashboard and closing the sidebar
  const handleDashBoard = () => {
    navigate("/dashboard"); // Navigate to the "/dashboard" route
    onClose(); // Close the sidebar
  };

  const name = "Chinedu"; // This would typically come from an API
  const imageUrl = "";

  return (
    <div className="bg-white flex flex-col justify-between h-100% md:h-90%">
      <div className="mt-5 md:mt-0">
        <div className="cursor-pointer flex flex-row items-center md:hidden px-2">
          <div className="w-100% flex-col items-center flex">
            <div className="flex py-3">
              {imageUrl ? (
                <img
                  src={imageUrl}
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
          <div onClick={onClose}>
            <MdClear size={30} /> {/* Close button */}
          </div>
        </div>
        <nav className="w-100% flex flex-col items-center justify-center space-y-4 pt-6">
          <div
            className="w-100% flex flex-row py-2 items-center cursor-pointer hover:bg-red hover:text-black justify-center"
            onClick={handleDashBoard} // Handle dashboard navigation
          >
            <MdDashboard size={25} /> {/* Dashboard icon */}
            <div className="mx-2">Dashboard</div> {/* Dashboard text */}
          </div>
        </nav>
      </div>
    </div>
  );
};

// Define propTypes for the Sidebar component to specify expected prop types
Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired, // A boolean flag to indicate if the sidebar is open
  onClose: PropTypes.func, // A function to close the sidebar
};

// Export the Sidebar component
export default Sidebar;
