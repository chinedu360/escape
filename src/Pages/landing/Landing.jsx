// import React from "react";

import { Button } from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";
// import { Image, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const handleDashBoard = () => {
    navigate("/dashboard");
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="">
        <h1 className="font-bold text-[30px] sm:text-[60px] md:text-[80px]">
          Read An Article Today!
        </h1>
      </div>
      <Button
        rightIcon={<BsArrowRightShort />}
        colorScheme="teal"
        variant="outline"
        width="8rem"
        marginTop="2rem"
        size="md"
        onClick={handleDashBoard}
      >
        Read More
      </Button>
      {/* <Box boxSize="sm" marginTop="5rem">
        <Image
          src="src/assets/school.jpg"
          alt="Dan Abramov"
          orderRadius="full"
          borderRadius="5px"
        />
      </Box> */}
    </div>
  );
};

export default Landing;
