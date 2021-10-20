import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const SecondLayout = ({ children, pictures }) => {
  return (
    <Flex
      minH="100vh"
      direction="column"
    >
      <Box mb="30px">
        <Header pictures={pictures} />
      </Box>
      <Box>
        {children}
      </Box>
      <Box mt="auto">
        <Footer />
      </Box>
    </Flex>
  );
};

export default SecondLayout;
