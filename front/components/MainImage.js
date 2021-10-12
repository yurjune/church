import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { layoutWidth } from './AppLayout';

const MainImage = () => {
  return (
    <>
      <Box 
        bgColor="#ffffff"
      >
        <Box maxW={layoutWidth} m="0 auto">
          <Image src="http://localhost:3060/pictures/didimdol.jpg"></Image>
        </Box>
      </Box>
    </>
  );
};

export default MainImage;
