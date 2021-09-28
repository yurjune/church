import React from 'react';
import { Box } from '@chakra-ui/react';

const Section = (props) => {
  return (
    <>
      <Box w="65%" mb="40px">
        {props.children}
      </Box>
    </>
  );
};

export default Section;
