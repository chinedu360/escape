// import React from 'react'
import PropTypes from "prop-types";
import { SimpleGrid, Center, Box } from "@chakra-ui/react";

const Modal = ({ length, authorLen, comment }) => {
  return (
    <div className="m-2">
      {" "}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        <Box
          bg="white"
          height="80px"
          borderRadius="lg "
          // boxShadow="outline"
          rounded="md"
          className=" border-red-300 border-[2px]"
          boxShadow="md"
        >
          <Center p={3} color="tomato">
            {length}
          </Center>
          <Center p={1} color="gray">
            My Articles
          </Center>
        </Box>
        <Box
          bg="white"
          height="80px"
          borderRadius="lg"
          // boxShadow="outline"
          rounded="md"
          className=" border-green-600 border-[2px]"
        >
          <Center p={3} color="green">
            {authorLen}
          </Center>
          <Center p={1} color="gray">
            Our Authors
          </Center>
        </Box>
        <Box
          bg="white"
          height="80px"
          borderRadius="lg"
          rounded="md"
          className=" border-teal-500 border-[2px]"
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

Modal.propTypes = {
  length: PropTypes.number,
  authorLen: PropTypes.number,
  comment: PropTypes.number,
};

export default Modal;
