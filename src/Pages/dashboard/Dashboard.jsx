import { useDispatch, useSelector } from "react-redux";
import { Modal, TableComp } from "../../components";
import { useEffect } from "react";
import {
  postData,
  userData,
  commentData,
} from "../../features/postSlice/postSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { isLoading, comment, errorMessage, post, user } = useSelector(
    (store) => store.post
  );

  useEffect(() => {
    dispatch(postData());
    dispatch(userData());
    dispatch(commentData());
  }, [dispatch]);

  return (
    <div className="">
      <h2 className="ml-2 font-bold text-[25px] my-4">
        Welcome Back, Chinedu!
      </h2>
      <Modal
        length={post?.length}
        authorLen={user?.length}
        comment={comment?.length}
      />

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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
