import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import AppLayout from './AppLayout';
import PostCard from './PostCard';
import PostArticle from './PostArticle';
import useFetch from '../hooks/useFetch';

const Content = ({ category, id }) => {
  const url = `/post?category=${category}&id=${id}`
  const { data, error, isLoading } = useFetch(url);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    console.error(error);
    return <div>게시글을 불러오는 중 문제가 발생했습니다.</div>;
  }

  return (
    <AppLayout>
      <Flex
        justify="space-between"
        direction={{ base: "column", lg: "row" }}
      >
        <Box
          w={{ base: "100%", lg: "33%" }}
        >
          <PostCard data={data} />
        </Box>
        <Box
          mt={{ base: "40px", lg: "0" }}
          w={{ base: "100%", lg: "65%" }}
        >
          <PostArticle data={data} />
        </Box>
      </Flex>
    </AppLayout>
  );
};

export default Content;
