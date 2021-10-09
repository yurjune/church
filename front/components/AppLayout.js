import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';

const AppLayout = ({ children }) => {
  return (
    <Grid
      templateColumns="1fr minmax(auto, 960px) 1fr"
      templateRows="auto 1fr auto"
      minH="100vh"
    >
      <GridItem colStart={1} colEnd={4} rowStart={1} rowEnd={2}>
        <Header></Header>
      </GridItem>
      <GridItem 
        colStart={2} 
        colEnd={3} 
        rowStart={2} 
        rowEnd={3} 
        py={["30px", "30px", "40px", "40px"]}
        px={["20px", "30px", "40px", "0"]}
      >
        {children}
      </GridItem>
      <GridItem colStart={1} colEnd={4} rowStart={3} rowEnd={4}>
        <Footer></Footer>
      </GridItem>
    </Grid>
  );
};

export default AppLayout;
