import React from 'react';
import { Box } from '@chakra-ui/react';

const MainContent = ({ content }) => {
  return (
    <>
      <Box w="70%">
        {content.content}
      </Box>
    </>
  );
};

export default MainContent;
