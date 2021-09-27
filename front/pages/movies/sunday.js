import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Grid, Button, GridItem } from '@chakra-ui/react';
import useSWR from 'swr';
import axios from "axios";

import AppLayout from '../../components/AppLayout';
import ContentsBar from '../../components/ContentsBar';
import ItemCard from '../../components/ItemCard';
import WriteButton from '../../components/WriteButton';
import Pagination from '../../components/Pagination';
import router from 'next/router';


const dummyPost = {
  id: 1,
  content: "말씀으로 승리하라",
  Thumbnail: {
    src: "https://via.placeholder.com/300",
  },
  Images: {
    src: "https://via.placeholder.com/300",
  },
  User: {
    id: 1,
  }
}

const useFetch = (category, page) => {
  const fetcher = (url) => axios.get(url, { withCredentials: true }).then((result) => result.data);
  const { data, error, mutate } = useSWR(
    `http://localhost:3060/posts?category=${encodeURIComponent(category)}&page=${page}`, fetcher,
  );
  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

const Sunday = () => {
  const router = useRouter();
  const { page } = router.query;
  const { data, error, isLoading } = useFetch('주일예배', page);
  const buttonList = ['전체', '성경', '주제'];

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(data);
    }, 2000);
    return () => {
      clearTimeout(timer);
    }
  }, []);

  if (isLoading) {
    <div>로딩 중...</div>
  }
  if (error) {
    <div>게시글을 불러오는 중 문제가 발생했습니다.</div>
  }

  return (
    <>
      <Head>
        <title>설교영상</title>
      </Head>
      <AppLayout>
        <ContentsBar title="설교영상" buttonList={buttonList}/>
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={5}>
          {data && data.map((post, index) => (
            <ItemCard key={post.content+index} post={post} index={index} category={'sunday'}></ItemCard>
          ))}
        </Grid>
        <Button mr="10px">등록</Button>
        <WriteButton></WriteButton>
        <Pagination></Pagination>
      </AppLayout>
    </>
  );
};

export default Sunday;
