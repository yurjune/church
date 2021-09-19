import React from 'react';
import Head from 'next/head'

import AppLayout from '../../components/AppLayout';
import ContentsBar from '../../components/ContentsBar';
import ItemCard from '../../components/ItemCard';


const Sunday = () => {
  return (
    <>
      <Head>
        <title>설교영상</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppLayout>
        <ContentsBar title="설교영상" btn1="전체" btn2="성경" btn3="주제"/>
        <ItemCard></ItemCard>
      </AppLayout>
    </>
  );
};

export default Sunday;