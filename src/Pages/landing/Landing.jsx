// Import necessary modules and components
import { Button } from "@chakra-ui/react"; // Import a button component from Chakra UI
import { BsArrowRightShort } from "react-icons/bs"; // Import an arrow icon from react-icons
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook from react-router-dom

// Define the Landing component
const Landing = () => {
  const navigate = useNavigate(); // Initialize the navigate function from react-router-dom

  const handleDashBoard = () => {
    navigate("/dashboard"); // Navigate to the "/dashboard" route when the button is clicked
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">
        <h1 className="font-bold text-[30px] sm:text-[60px] md:text-[80px]">
          Read An Article Today!
        </h1>
      </div>
      <Button
        rightIcon={<BsArrowRightShort />} // Display the arrow icon on the button
        colorScheme="teal" // Set the button color scheme to "teal"
        variant="outline" // Use the outlined button variant
        width="8rem" // Set the button width
        marginTop="2rem" // Add top margin to the button
        size="md" // Set the button size to medium
        onClick={handleDashBoard} // Call the handleDashBoard function when the button is clicked
      >
        Read More
      </Button>
    </div>
  );
};

export default Landing; // Export the Landing component for use in the application
