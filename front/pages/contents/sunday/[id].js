import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex } from '@chakra-ui/react';

import AppLayout from '../../../components/AppLayout';
import MovieCard from '../../../components/MovieCard';
import MovieArticle from '../../../components/MovieArticle';
import useFetch from '../../../hooks/useFetch';

const Content = () => {
  const router = useRouter();
  const category = encodeURIComponent("주일예배");
  const { id } = router.query;
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
    <>
      <AppLayout>
        <Flex
          justify="space-between"
          direction={{ base: "column", lg: "row" }}
        >
          <Box w={{ base: "100%", lg: "33%" }}>
            <MovieCard data={data}></MovieCard>
          </Box>
          <Box mt={{ base: "40px", lg: "0" }} w={{ base: "100%", lg: "65%" }}>
            <MovieArticle data={data}></MovieArticle>
          </Box>
        </Flex>
      </AppLayout>
    </>
  );
};

export default Content;
