import { Modal, TableComp } from "../../components";

const Dashboard = () => {
  return (
    <div>
      <h2 className="ml-2 font-bold text-[25px] my-4">
        Welcome Back, Chinedu!
      </h2>
      <Modal />

      <div className="flex md:flex-row flex-col">
        <div className="w-[100%] md:w-[100%] space-y-4">
          <TableComp
            variant="striped"
            title="My Articles"
            titleName="Article Name"
          />
        </div>
        <div className="w-[100%] md:w-[30%] space-y-4">
          <TableComp
            title="Best Authors"
            display={{ base: "none" }}
            titleName="Authors Name"
            show="hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
