import React, { useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Box, Flex } from '@chakra-ui/react';

import AppLayout from '../../../components/AppLayout';
import MovieCard from '../../../components/MovieCard';
import MovieArticle from '../../../components/MovieArticle';

export const useFetch = (category, id) => {
  const fetcher = (url) => axios.get(url, { withCredentials: true }).then((result) => result.data);
  const { data, error, mutate } = useSWR(
    `http://localhost:3060/post?category=${category}&id=${id}`, fetcher,
  );
  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

const Content = () => {
  const router = useRouter();
  const category = encodeURIComponent("주일예배");
  const { id } = router.query;

  const { data, error, isLoading } = useFetch(category, id);

  // useEffect(() => {
  //   console.log('정보: ', data);
  // }, [data]);

  if (isLoading) {
    return <div>로딩 중...</div>
  }

  if (error) {
    console.error(error);
    return <div>게시글을 불러오는 중 문제가 발생했습니다.</div>
  }

  return (
    <>
      <AppLayout>
        <Flex mt="40px" mb="40px" justify="space-between">
          <Box w="33%">
            <MovieCard content={data}></MovieCard>
          </Box>
          <Box w="65%">
            <MovieArticle content={data}></MovieArticle>
          </Box>
        </Flex>
      </AppLayout>
    </>
  );
};

export default Content;
