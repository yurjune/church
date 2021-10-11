import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import PostArticle from './PostArticle';

const PostCardWrapper = ({ children, data }) => {
  return (
    <Flex
      justify="space-between"
      direction={{ base: "column", lg: "row" }}
    >
      <Box
        w={{ base: "100%", lg: "30%" }}
      >
        {children}
      </Box>
      <Box
        mt={{ base: "40px", lg: "0" }}
        w={{ base: "100%", lg: "65%" }}
      >
        <PostArticle data={data} />
      </Box>
    </Flex>
  );
};

export default PostCardWrapper;
