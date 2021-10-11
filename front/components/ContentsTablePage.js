import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';

import AppLayout from './AppLayout';
import TitleBar from './TitleBar';
import ContentsTable from './ContentsTable';
import WriteButton from './WriteButton';
import Pagination from './Pagination';
import useFetch from '../hooks/useFetch';

const ContentsTablePage = ({ category }) => {
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

  const tableStyle = {
    colorScheme: "whiteAlpha",
    colorScheme: "blackAlpha",
    // size: "sm",
  };
  return (
    <>
      <Head>
        <title>{category}</title>
      </Head>
      <AppLayout>
        <Box mb="20px">
          <TitleBar title={category}></TitleBar>
        </Box>
        <Box mb="40px">
          <ContentsTable data={data} tableStyle={tableStyle} />
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

export default ContentsTablePage;
