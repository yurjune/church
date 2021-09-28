import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';

const Footer = () => {
  return (
    <>
      <Flex
        w="100%"
        h="180px"
        bgColor="#212529"
        justify="center"
        align="center"
        color="#979797"
        fontFamily="sans-serif"
        fontSize="12px"
      >
        <Box
          w="80%"
          h="120px"
        >
          <Box py="10px" mb="16px">© 2021 DIDIMDOL CHURCH. ALL RIGHT RESERVED</Box>
          <Box>경기도 의왕시 보우상가</Box>
        </Box>
      </Flex>
    </>
  );
};

export default Footer;
