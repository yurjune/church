import React, { useCallback } from 'react';
import { Box, Container, Grid, GridItem } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';

const AppLayout = ({ children }) => {
  return (
    <Grid templateColumns="1fr 960px 1fr">
      <Header></Header>
      <GridItem colStart={2} colEnd={3} rowStart={3} rowEnd={4}>
        {children}
      </GridItem>
      <GridItem colStart={1} colEnd={4} rowStart={4} rowEnd={5}>
        <Footer></Footer>
      </GridItem>
    </Grid>
  );
};

export default AppLayout;
