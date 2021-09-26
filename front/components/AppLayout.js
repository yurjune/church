import React, { useCallback } from 'react';
import Link from 'next/link';
import { Box, Container, Grid, GridItem } from '@chakra-ui/react';

import Router from 'next/router';
import Header from './Header';

const AppLayout = ({ children }) => {
  return (
    <Grid templateColumns="1fr 960px 1fr">
      <Header></Header>
      <GridItem colStart={2} colEnd={3} rowStart={3} rowEnd={4}>
        {children}
      </GridItem>
    </Grid>
  );
};

export default AppLayout;
