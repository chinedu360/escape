// import React from 'react'
import { SimpleGrid, Center, Box } from "@chakra-ui/react";

const Modal = () => {
  return (
    <div className="m-2">
      {" "}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        <Box bg="white" height="80px" borderRadius="lg " boxShadow="md">
          <Center p={3} color="tomato">
            2000
          </Center>
          <Center p={1} color="gray">
            This is the Center
          </Center>
        </Box>
        <Box bg="white" height="80px" borderRadius="lg" boxShadow="md">
          <Center p={3} color="green">
            2000
          </Center>
          <Center p={1} color="gray">
            This is the Center
          </Center>
        </Box>
        <Box bg="white" height="80px" borderRadius="lg" boxShadow="md">
          <Center p={3} color="teal">
            2000
          </Center>
          <Center p={1} color="gray">
            This is the Center
          </Center>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Modal;
