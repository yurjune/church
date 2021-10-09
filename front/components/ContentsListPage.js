import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';

import AppLayout from './AppLayout';
import ContentsBar from './ContentsBar';
import ItemList from './ItemList';
import WriteButton from './WriteButton';
import Pagination from './Pagination';
import useFetch from '../hooks/useFetch';

const ContentsListPage = ({ category }) => {
  const router = useRouter();
  const { page } = router.query;
  const url = `/posts?category=${category}&page=${page || 1}`
  const { data, error, isLoading } = useFetch(url);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    console.error(error);
    return <div>게시글을 불러오는 중 문제가 발생했습니다.</div>;
  }

  const buttonList = ['전체', '성경', '주제'];
  return (
    <>
      <Head>
        <title>{category}</title>
      </Head>
      <AppLayout>
        <Box mb="20px">
          <ContentsBar category={category} buttonList={buttonList}></ContentsBar>
        </Box>
        <Box mb="50px" px={{ base: "20px", sm: "0", md: "0" }}>
          <ItemList data={data}></ItemList>
        </Box>
        <Box mb="30px">
          <WriteButton></WriteButton>
        </Box>
        <Box>
          <Pagination category={category}></Pagination>
        </Box>
      </AppLayout>
    </>
  );
};

export default ContentsListPage;
