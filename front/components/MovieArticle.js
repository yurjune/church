import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const MovieArticle = ({ content }) => {
  return (
    <Box fontSize="16px">
      {content.Images?.length >= 1
      ? (
        content.Images.map(image => (
          <Image
            src={`http://localhost:3060/${image.src}`}
            maxW="100%"
            mb="10px"
          >
          </Image>
        ))
      )
      : ''
      }
      <Box>{content.content}</Box>
    </Box>
  );
};

export default MovieArticle;
