import React from 'react';
import { Box, Flex, Divider } from '@chakra-ui/react'
import { Collapse } from '@chakra-ui/transition';
import BibleTag from './BibleTag';
import { oldBible, newBible } from './Bible';

const TagList = ({ category, isOpen }) => {
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
        <BibleTag bible={oldBible} category={category} />
        <Divider my="20px" />
        <BibleTag bible={newBible} category={category} />
      </Box>
    </Collapse>
  );
};

export default TagList;
