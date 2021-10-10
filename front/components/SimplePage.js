import React from 'react';
import { Box } from '@chakra-ui/react';

import AppLayout from './AppLayout';
import TitleBar from './TitleBar';

const SimplePage = ({ children, title }) => {
  return (
    <AppLayout>
      <Box mb="30px">
        <TitleBar title={title}></TitleBar>
      </Box>
      {children}
    </AppLayout>
  );
};

export default SimplePage;
