import React, { useState } from 'react';
import Head from 'next/head'
import { Flex, Button } from '@chakra-ui/button';

import AppLayout from '../../components/AppLayout';
import ContentsBar from '../../components/ContentsBar';
import ItemCard from '../../components/ItemCard';

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

  const createButton = () => {
    setPosts((prev) => [dummyPost, ...prev]);
  }

  return (
    <>
      <Head>
        <title>설교영상</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppLayout>
        <ContentsBar title="설교영상" btn1="전체" btn2="성경" btn3="주제"/>
          {posts.map(post => <ItemCard post={post}></ItemCard>)}
        <Button onClick={createButton}>등록</Button>
      </AppLayout>
    </>
  );
};

export default Sunday;