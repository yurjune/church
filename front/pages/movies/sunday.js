import React from 'react';
import Head from 'next/head';
import AppLayout from '../../components/AppLayout';
import ContentsListPage from '../../components/ContentsListPage';

const Sunday = () => {
  return (
    <>
      <Head>
        <title>주일예배</title>
      </Head>
      <AppLayout>
        <ContentsListPage category="주일예배"></ContentsListPage>
      </AppLayout>
    </>
  );
};

export default Sunday;
