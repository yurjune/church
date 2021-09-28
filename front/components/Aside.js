import React, { useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';

const Aside = (props) => {
  return (
    <>
      <Box w="33%" mb="40px">
        {props.children}
      </Box>
    </>
  );
};

export default Aside;