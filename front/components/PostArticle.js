import React from 'react';
import { Box } from '@chakra-ui/react';

const PostArticle = ({ data }) => {
  return (
    <Box dangerouslySetInnerHTML={{ __html: data.content }}></Box>
  );
};

export default PostArticle;
