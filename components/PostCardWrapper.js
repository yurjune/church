import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import PostArticle from './PostArticle';

const PostCardWrapper = ({ children, article }) => {
  return (
    <Flex
      justify={{ base: "flex-start", lg: "space-between" }}
      direction={{ base: "column", lg: "row" }}
    >
      <Box
        w={{ base: "100%", lg: "30%" }}
        mb={{ base: "40px", lg: "0" }}
      >
        {children}
      </Box>
      <Box
        w={{ base: "100%", lg: "67%" }}
      >
        <PostArticle article={article} />
      </Box>
    </Flex>
  );
};

export default PostCardWrapper;
