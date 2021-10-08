import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box, HStack, Grid, Button, GridItem } from '@chakra-ui/react';

import AppLayout from '../../components/AppLayout';
import ContentsBar from '../../components/ContentsBar';
import ItemCard from '../../components/ItemCard';
import WriteButton from '../../components/WriteButton';
import Pagination from '../../components/Pagination';
import useFetch from '../../hooks/useFetch';

const Sunday = () => {
  const router = useRouter();
  const category = encodeURIComponent('주일예배')
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
        <title>주일예배</title>
      </Head>
      <AppLayout>
        <ContentsBar title="주일예배" buttonList={buttonList}/>
        <Grid templateColumns="repeat(auto-fill, minmax(225px, auto))" gap={5}>
          {data && data.map((post, index) => (
            <ItemCard key={post.content+index} post={post} category="주일예배"></ItemCard>
          ))}
        </Grid>
        <HStack mt="20px">
          <WriteButton></WriteButton>
        </HStack>
        <Pagination category="주일예배"></Pagination>
      </AppLayout>
    </>
  );
};

export default Sunday;
