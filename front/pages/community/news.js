import React from 'react';
import Head from 'next/head';
import AppLayout from '../../components/AppLayout';
import ContentsTablePage from '../../components/ContentsTablePage';

const News = () => {
  return (
    <>
      <Head>
        <title>교회소식</title>
      </Head>
      <AppLayout>
        <ContentsTablePage category="교회소식"></ContentsTablePage>
      </AppLayout>
    </>
  );
};

export default News;
