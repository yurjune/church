import React, { useEffect } from 'react';
import { Box, Text, Heading, } from '@chakra-ui/react';

const Sidebar = ({ content }) => {
  return (
    <>
      <Box minW="30%">
        <Heading size="lg" mb="30">아침예배</Heading>
        <Text ml="2px" mb="15px">작성일시: {content}</Text>
        <Text ml="2px" mb="15px">조정민 목사</Text>
        <Text ml="2px" mb="15px">본문: 삿 21:1-25</Text>
      </Box>
    </>
  );
};

export default Sidebar;