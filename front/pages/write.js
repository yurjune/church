import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import WritePost from '../components/WritePost';

const Write = () => {
  return (
    <>
      <Head>
        <title>글쓰기</title>
      </Head>
      <AppLayout>
        <WritePost></WritePost>
      </AppLayout>
    </>
  );
};

export default Write;
