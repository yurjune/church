import React, { useCallback } from 'react';
import Link from 'next/link';
import { Box } from '@chakra-ui/react';

import Router from 'next/router';
import Header from './Header';

const AppLayout = ({ children }) => {
  return (
    <Box w="960px" m="0 auto">
      <Header></Header>
      <div>{children}</div>
    </Box>
  );
};

export default AppLayout;
