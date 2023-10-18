// Import necessary modules and components
import PropTypes from "prop-types";
import { SimpleGrid, Center, Box } from "@chakra-ui/react";

// Define the Modal component
const Modal = ({ length, authorLen, comment }) => {
  return (
    <div className="m-2">
      {/* Create a grid with 1 column on small screens, 2 columns on medium screens, and 3 columns on large screens */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {/* Box for 'My Articles' */}
        <Box
          bg="white"
          height="80px"
          borderRadius="lg"
          className="border-red-300 border-[2px] rounded-md"
          boxShadow="md"
        >
          <Center p={3} color="tomato">
            {length}
          </Center>
          <Center p={1} color="gray">
            My Articles
          </Center>
        </Box>
        {/* Box for 'Our Authors' */}
        <Box
          bg="white"
          height="80px"
          borderRadius="lg"
          className="border-green-600 border-[2px] rounded-md"
        >
          <Center p={3} color="green">
            {authorLen}
          </Center>
          <Center p={1} color="gray">
            Our Authors
          </Center>
        </Box>
        {/* Box for 'Comments' */}
        <Box
          bg="white"
          height="80px"
          borderRadius="lg"
          className="border-teal-500 border-[2px] rounded-md"
        >
          <Center p={3} color="teal">
            {comment}
          </Center>
          <Center p={1} color="gray">
            Comments
          </Center>
        </Box>
      </SimpleGrid>
    </div>
  );
};

// Define propTypes for the Modal component to specify expected prop types
Modal.propTypes = {
  length: PropTypes.number, // Length of 'My Articles'
  authorLen: PropTypes.number, // Length of 'Our Authors'
  comment: PropTypes.number, // Number of 'Comments'
};

// Export the Modal component
export default Modal;
