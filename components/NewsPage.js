import React from 'react';
import { Box, Flex, Divider } from '@chakra-ui/react';
import PostCard from './PostCard';
import PostArticle from './PostArticle';
import ContentsTable from './ContentsTable';
import Pagination from './Pagination';
import NoPost from './NoPost';

const tableStyle = {
  variant: "striped",
  colorScheme: "blackAlpha",
};

const NewsPage = ({ firstArticle, sortedArticles, limitedArticles }) => {
  return (
    <>
      {firstArticle ?
        (<>
          <Box mb="140px">
            <Flex
              justify={{ base: "flex-start", lg: "space-between" }}
              direction={{ base: "column", lg: "row" }}
            >
              <Box
                w={{ base: "100%", lg: "30%" }}
                mb={{ base: "40px", lg: "0" }}
              >
                <PostCard article={firstArticle} />
              </Box>
              <Box w={{ base: "100%", lg: "67%" }}>
                <PostArticle article={firstArticle} />
              </Box>
            </Flex>
          </Box>
          <Divider />
          <Box mb="40px">
            <ContentsTable articles={limitedArticles} tableStyle={tableStyle} />
          </Box>
          <Pagination articles={sortedArticles} category="교회소식" />
        </>)
      : <NoPost />}
    </>
  );
};

export default NewsPage;
