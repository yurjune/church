import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box, Divider } from '@chakra-ui/react';
import AppLayout from '../../components/AppLayout';
import PostCardWrapper from '../../components/PostCardWrapper';
import PostCardInfo from '../../components/PostCardInfo';
import ContentsTable from '../../components/ContentsTable';
import WriteButton from '../../components/WriteButton';
import Pagination from '../../components/Pagination';
import useFetch from '../../hooks/useFetch';

const News = () => {
  const router = useRouter();
  const category = "교회소식";
  const { page } = router.query;
  const url = `/posts?category=${category}&page=${page || 1}`

  const { data, error, isLoading } = useFetch(url);
  const { data: newData, error: newError, isLoading: newIsLoading } = useFetch(
    `/post/latest?category=${category}`
  );

  if (isLoading || newIsLoading) {
    return <div>로딩 중...</div>;
  }
  if (error || newError) {
    console.error(error);
    return <div>게시글을 불러오는 중 문제가 발생했습니다.</div>;
  }

  return (
    <>
      <Head>
        <title>{category}</title>
      </Head>
      <AppLayout>
        <PostCardWrapper data={newData}>
          <PostCardInfo data={newData}></PostCardInfo>
        </PostCardWrapper>
        <Divider mt="80px" />
        <Box mb="40px">
          <ContentsTable data={data} />
        </Box>
        <Box mb="30px">
          <WriteButton></WriteButton>
        </Box>
        <Pagination category={category}></Pagination>
      </AppLayout>
    </>
  );
};

export default News;
