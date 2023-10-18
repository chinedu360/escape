// Import necessary modules and components
import PropTypes from "prop-types";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Spinner,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

// Define the TableComp component
const TableComp = ({
  variant, // Table variant, e.g., "striped", "simple"
  colorScheme, // Color scheme for the table
  title, // Title displayed at the top of the table
  display, // Display settings for columns
  titleName, // Name of the title column
  show, // Show/hide settings for elements
  data, // Data to display in the table
  loading, // Flag indicating if data is loading
  err, // Error information
  showTable, // Show/hide settings for the table
}) => {
  const imageUrl = ""; // An image URL (can be dynamic)
  const navigate = useNavigate(); // Get the navigation function from React Router

  // Function to handle navigating back
  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="m-2 rounded-lg bg-white shadow-lg h-70vh overflow-y-scroll">
      <h2
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "white",
          zIndex: 1,
        }}
        className="m-2 font-semibold text-20px"
      >
        {title} {/* Display the title */}
      </h2>

      {err && (
        <div className="flex justify-center items-center w-100% h-70vh">
          <p className="text-red text-13px">{err?.message}</p>{" "}
          {/* Display error message */}
        </div>
      )}

      {loading && (
        <div className="flex justify-center items-center w-100% h-70vh">
          <Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="Black.500"
            size="xl"
          />{" "}
          {/* Display a loading spinner */}
        </div>
      )}

      <TableContainer borderRadius="lg">
        <Table variant={variant} colorScheme={colorScheme}>
          {!loading && !err ? (
            <Thead>
              <Tr>
                <Th> {titleName}</Th> {/* Display the title name */}
                <Th display={display}>Description</Th>{" "}
                {/* Display the description column */}
              </Tr>
            </Thead>
          ) : null}

          <Tbody>
            {data?.map((item, index) => (
              <Tr key={index}>
                <Td className="flex items-center justify-start">
                  <div className="pr-2 flex-col items-start ">
                    <div className="flex">
                      {imageUrl || "" ? (
                        <img
                          src={"imageUrl" || ""}
                          alt="Profile"
                          className="rounded-full h-10 w-10"
                        />
                      ) : (
                        <div className="rounded-full h-10 w-10 bg-gray-300 flex justify-center items-center">
                          <span className="text-white font-bold text-sm">
                            {item?.title?.slice(0, 2)?.toUpperCase()}
                            {item?.name?.slice(0, 2)?.toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="flex flex-col">
                    {item.title?.split(" ")?.slice(0, 1)?.join(" ")}
                    {item?.username}
                    <span className={`${showTable} text-xs text-gray-500`}>
                      {item?.email}
                    </span>
                  </p>
                </Td>
                <Td display={display}>
                  {item?.body?.split(" ")?.slice(0, 5)?.join(" ")}...{" "}
                  {/* Display truncated description */}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <div
        className={`${show} flex p-5 items-center cursor-pointer space-x-1`}
        onClick={handleBack}
      >
        <IoMdArrowBack /> <p>Back</p> {/* Display a back button */}
      </div>
    </div>
  );
};

// Define propTypes for the TableComp component to specify expected prop types
TableComp.propTypes = {
  variant: PropTypes.string, // PropType for table variant
  colorScheme: PropTypes.string, // PropType for table color scheme
  title: PropTypes.string, // PropType for the table title
  display: PropTypes.shape({
    base: PropTypes.string,
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string,
    xl: PropTypes.string,
  }), // PropType for column display settings
  titleName: PropTypes.string, // PropType for the title column name
  show: PropTypes.string, // PropType for element show/hide settings
  data: PropTypes.array, // PropType for the table data
  loading: PropTypes.bool, // PropType for the loading flag
  err: PropTypes.array, // PropType for error information
  showTable: PropTypes.string, // PropType for table show/hide settings
};

// Export the TableComp component
export default TableComp;
