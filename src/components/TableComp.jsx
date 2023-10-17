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

const TableComp = ({
  variant,
  colorScheme,
  title,
  display,
  titleName,
  show,
  data,
  loading,
  err,
  showTable,
}) => {
  const imageUrl = "";
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div
      className={`m-2 rounded-lg bg-white shadow-lg h-[70vh] overflow-y-scroll`}
    >
      <h2
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "white",
          zIndex: 1,
        }}
        className="m-2 font-semibold text-[20px]"
      >
        {title}
      </h2>
      {err && (
        <div className="flex justify-center items-center w-[100%] h-[70vh]">
          <p className="text-[red] text-[13px]">{err?.message}</p>
        </div>
      )}
      {loading && (
        <div className="flex justify-center items-center w-[100%] h-[70vh]">
          <Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="Black.500"
            size="xl"
          />
        </div>
      )}
      <TableContainer borderRadius="lg">
        <Table variant={variant} colorScheme={colorScheme}>
          {!loading && !err ? (
            <Thead>
              <Tr>
                <Th> {titleName}</Th>
                <Th display={display}>Description</Th>
                {/* <Th display={display}>Date</Th> */}
              </Tr>
            </Thead>
          ) : null}

          <Tbody>
            {data?.map((item, index) => (
              <Tr key={index}>
                <Td className="flex items-center justify-start">
                  <div className=" pr-2 flex-col items-start ">
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
                  {item?.body?.split(" ")?.slice(0, 5)?.join(" ")}...
                </Td>
                {/* <Td display={display}>{randomDate.toDateString()}</Td> */}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <div
        className={`${show} flex p-5 items-center cursor-pointer space-x-1`}
        onClick={handleBack}
      >
        <IoMdArrowBack /> <p>Back</p>
      </div>
    </div>
  );
};

TableComp.propTypes = {
  variant: PropTypes.string,
  colorScheme: PropTypes.string,
  title: PropTypes.string,
  display: PropTypes.shape({
    base: PropTypes.string,
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string,
    xl: PropTypes.string,
  }),
  titleName: PropTypes.string,
  show: PropTypes.string,
  data: PropTypes.array,
  loading: PropTypes.bool,
  err: PropTypes.array,
  showTable: PropTypes.string,
};

export default TableComp;
