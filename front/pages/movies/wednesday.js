import React from 'react';
import Head from 'next/head';
import AppLayout from '../../components/AppLayout';
import ContentsListPage from '../../components/ContentsListPage';

const Wednesday = () => {
  return (
    <>
      <Head>
        <title>수요예배</title>
      </Head>
      <AppLayout>
        <ContentsListPage category="수요예배"></ContentsListPage>
      </AppLayout>
    </>
  );
};

export default Wednesday;
