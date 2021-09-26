import React from 'react';
import { Box, Text, Heading, Flex } from "@chakra-ui/react";

const Verse = () => {
  return (
    <>
      <Flex direction="column" alignItems="center" justifyContent="center" w="100%" height="250px" bg="blue.300">
        <Flex fontSize="25px" color="#fff" textAlign="center">
          수고하고 무거운 짐진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라
        </Flex>
        <Flex mt="15px" fontSize="20px" color="#fff" textAlign="center">
          (마 11:28)
        </Flex>
      </Flex>
    </>
  );
};

export default Verse;