import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';

const AppLayout = ({ children }) => {
  return (
    <Grid templateColumns="1fr minmax(auto, 960px) 1fr">
      <GridItem colStart={1} colEnd={4} rowStart={1} rowEnd={2}>
        <Header></Header>
      </GridItem>
      <GridItem 
        colStart={2} 
        colEnd={3} 
        rowStart={2} 
        rowEnd={3} 
        px={{ base: "20px", sm: "30px", md: "40px", lg: "0" }}
        py={{ base: "20px", sm: "30px", md: "40px", lg: "40px" }}
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
