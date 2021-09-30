import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';

const Footer = () => {
  return (
    <Box w="100%" h="180px" bgColor="charcole">
      <Flex
        maxW="960px"
        h="180px"
        m="0 auto"
        direction="column"
        color="grayLetter"
        fontSize="12px"
        px={{ base: "20px", sm: "30px", md: "40px", lg: "0" }}
        py="30px"
        justify={{ base: "center", md: "flex-start" }}
        align={{ base: "center", md: "flex-start" }}
      >
        <Box py="10px" mb="16px">© 2021 DIDIMDOL CHURCH. ALL RIGHT RESERVED</Box>
        <Box>경기도 의왕시 보우상가</Box>
      </Flex>
    </Box>
  );
};

export default Footer;
