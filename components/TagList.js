import React from 'react';
import { Box, Flex, Divider, Link } from '@chakra-ui/react'
import { Collapse } from '@chakra-ui/transition';

const BibleTagList = ({ isOpen }) => {
  return (
    <Collapse in={isOpen}>
      <Box
        p="20px"
        color="white"
        mt="20px"
        bg="second"
        rounded="md"
        shadow="md"
      >
        <Box>성경별</Box>
        <Divider my="20px" />
        <Flex justify="space-between">
          <Link>사사기</Link>
          <Link>고린도전서</Link>
          <Link>룻기</Link>
          <Link>아가서</Link>
          <Link>마태복음</Link>
        </Flex>
      </Box>
    </Collapse>
  );
};

export default BibleTagList;
