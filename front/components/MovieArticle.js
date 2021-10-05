import React from 'react';
import { Box } from '@chakra-ui/react';

const MovieArticle = ({ data }) => {
  return (
    <Box>
      <Box dangerouslySetInnerHTML={{ __html: data.content }}></Box>
    </Box>
  );
};

export default MovieArticle;
