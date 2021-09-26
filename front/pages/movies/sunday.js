import React, { useState } from 'react';
import Head from 'next/head';
import { Grid, Button, GridItem } from '@chakra-ui/react';

import AppLayout from '../../components/AppLayout';
import ContentsBar from '../../components/ContentsBar';
import ItemCard from '../../components/ItemCard';
import WriteButton from '../../components/WriteButton';

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

const Sunday = () => {
  const [posts, setPosts] = useState([]);

  const onClickEnroll = () => {
    setPosts((prev) => [dummyPost, ...prev]);
  }

  const buttonList = ['전체', '성경', '주제'];
  return (
    <>
      <Head>
        <title>설교영상</title>
      </Head>
      <AppLayout>
        <ContentsBar title="설교영상" buttonList={buttonList}/>
        <Grid templateColumns="repeat(4, 1fr)">
          {posts.map((post, index) => (
              <ItemCard key={post.content+index} post={post} index={index}></ItemCard>
          ))}
        </Grid>
        <Button mr="10px" onClick={onClickEnroll}>등록</Button>
        <WriteButton></WriteButton>
      </AppLayout>
    </>
  );
};

export default Sunday;