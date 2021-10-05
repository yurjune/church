import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const MainImage = () => {
  return (
    <>
      <Box 
        bgColor="#ffffff"
      >
        <Box maxW="960px" m="0 auto">
          <Image src="http://localhost:3060/didimdol.jpg"></Image>
        </Box>
      </Box>
    </>
  );
};

export default MainImage;
