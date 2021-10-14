import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';

export const layoutWidth = "1100px";

const AppLayout = ({ children, header }) => {
  return (
    <Grid
      templateColumns={`1fr minmax(auto, ${layoutWidth}) 1fr`}
      templateRows="auto 1fr auto"
      minH="100vh"
    >
      <GridItem colStart={1} colEnd={4} rowStart={1} rowEnd={2}>
        <Header header={header} />
      </GridItem>
      <GridItem 
        colStart={2} 
        colEnd={3} 
        rowStart={2} 
        rowEnd={3} 
        pt={["40px", "40px", "60px", "60px"]}
        pb={["60px", "60px", "80px", "80px"]}
        px={["20px", "30px", "40px", "20px"]}
      >
        {children}
      </GridItem>
      <GridItem colStart={1} colEnd={4} rowStart={3} rowEnd={4}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default AppLayout;
