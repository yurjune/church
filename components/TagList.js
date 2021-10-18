import React from 'react';
import { Box, Flex, Divider, Link } from '@chakra-ui/react'
import { Collapse } from '@chakra-ui/transition';
import { categoryToUrl } from '../utils/categoryConverter';

const bibleList = [
  { '창세기': '창세기' },
  { '출애굽기': '출애굽기' },
  { '레위기': '레위기' },
];

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
        <Flex justify="space-between">
          {bibleList.map(item => (
            <Link
              key={Object.keys(item)}
              href={`${categoryToUrl(category)}?v=${Object.values(item)}`}
            >
              {Object.keys(item)}
            </Link>
          ))}
        </Flex>
      </Box>
    </Collapse>
  );
};

export default TagList;
