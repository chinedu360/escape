import {
  Table,
  Thead,
  Tbody,
  // Tfoot,
  Tr,
  Th,
  Td,
  // TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const TableComp = ({
  variant,
  colorScheme,
  title,
  display,
  height,
  scroll,
  overflow,
  titleName,
  show,
}) => {
  const name = "Chinedu"; //would come from an api
  const imageUrl = "";

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className={`m-2 rounded-lg bg-white shadow-lg`}>
      <h2 className="m-2 font-semibold text-[20px]">{title}</h2>
      <TableContainer borderRadius="lg">
        <Table variant={variant} colorScheme={colorScheme}>
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th> {titleName}</Th>
              <Th display={display}>Description</Th>
              <Th display={display}>Date</Th>
              <Th display={display}>Writer</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td className="flex items-center justify-start">
                <div className=" pr-2 flex-col items-start ">
                  <div className="flex">
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
                <p>inches</p>
              </Td>
              <Td display={display}>millimetres (mm)</Td>
              <Td display={display}>25.4</Td>
              <Td display={display}>Chinedu</Td>
            </Tr>
            <Tr>
              <Td className="flex items-center justify-start">
                <div className=" pr-2 flex-col items-start ">
                  <div className="flex">
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
                <p>inches</p>
              </Td>
              <Td display={display}>millimetres (mm)</Td>
              <Td display={display}>25.4</Td>
              <Td display={display}>Chinedu</Td>
            </Tr>
            <Tr>
              <Td className="flex items-center justify-start">
                <div className=" pr-2 flex-col items-start ">
                  <div className="flex">
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
                <p>inches</p>
              </Td>
              <Td display={display}>millimetres (mm)</Td>
              <Td display={display}>25.4</Td>
              <Td display={display}>Chinedu</Td>
            </Tr>
            <Tr>
              <Td className="flex items-center justify-start">
                <div className=" pr-2 flex-col items-start ">
                  <div className="flex">
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
                <p>inches</p>
              </Td>
              <Td display={display}>millimetres (mm)</Td>
              <Td display={display}>25.4</Td>
              <Td display={display}>Chinedu</Td>
            </Tr>
            <Tr>
              <Td className="flex items-center justify-start">
                <div className=" pr-2 flex-col items-start ">
                  <div className="flex">
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
                <p>inches</p>
              </Td>
              <Td display={display}>millimetres (mm)</Td>
              <Td display={display}>25.4</Td>
              <Td display={display}>Chinedu</Td>
            </Tr>
            <Tr>
              <Td className="flex items-center justify-start">
                <div className=" pr-2 flex-col items-start ">
                  <div className="flex">
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
                <p>inches</p>
              </Td>
              <Td display={display}>millimetres (mm)</Td>
              <Td display={display}>25.4</Td>
              <Td display={display}>Chinedu</Td>
            </Tr>
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

export default TableComp;
