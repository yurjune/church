import React from 'react';
import Head from 'next/head';
import AppLayout from '../../components/AppLayout';
import ContentsListPage from '../../components/ContentsListPage';

const Movies = () => {
  return (
    <>
      <Head>
        <title>예배와 말씀</title>
      </Head>
      <AppLayout>
        <ContentsListPage category="예배와 말씀"></ContentsListPage>
      </AppLayout>
    </>
  );
};

export default Movies;
