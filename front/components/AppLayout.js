import React, { useCallback } from 'react';
import Link from 'next/link';
import { Box, Container } from '@chakra-ui/react';

import Router from 'next/router';
import Header from './Header';

const AppLayout = ({ children }) => {
  return (
    <Box w="960px" m="0 auto">
      <Header></Header>
      {children}
    </Box>
  );
};

export default AppLayout;
