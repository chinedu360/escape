// Import necessary modules and components
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector from Redux for managing state
import { Modal, TableComp } from "../../components"; // Import custom components: Modal and TableComp
import { useEffect } from "react"; // Import useEffect hook for side effects
import {
  postData,
  userData,
  commentData,
} from "../../features/postSlice/postSlice"; // Import asynchronous thunks from postSlice

// Define the Dashboard component
const Dashboard = () => {
  const dispatch = useDispatch(); // Initialize the dispatch function from Redux for dispatching actions
  const { isLoading, comment, errorMessage, post, user } = useSelector(
    (store) => store.post
  ); // Use the useSelector hook to access state from the Redux store

  useEffect(() => {
    // Use the useEffect hook for handling side effects
    dispatch(postData()); // Dispatch the postData action to fetch post data
    dispatch(userData()); // Dispatch the userData action to fetch user data
    dispatch(commentData()); // Dispatch the commentData action to fetch comment data
  }, [dispatch]); // Run this effect when the dispatch function changes

  return (
    <div className="">
      <h2 className="ml-2 font-bold text-[25px] my-4">Welcome Back,</h2>
      {/* Render a welcome message */}
      <Modal
        length={post?.length}
        authorLen={user?.length}
        comment={comment?.length}
      />
      {/* Render the Modal component with information about post, user, and comments */}
      <div className="flex md:flex-row flex-col">
        <div className="w-[100%] md:w-[100%] space-y-4">
          <TableComp
            variant="striped"
            title="My Articles"
            titleName="Article Name"
            loading={isLoading}
            data={post}
            err={errorMessage}
            showTable="hidden"
          />
          {/* Render a table component displaying articles */}
        </div>
        <div className="w-[100%] md:w-[30%] space-y-4">
          <TableComp
            title="Best Authors"
            display={{ base: "none" }}
            titleName="Authors Name"
            show="hidden"
            data={user}
            err={errorMessage}
          />
          {/* Render a table component displaying authors */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; // Export the Dashboard component for use in the application
