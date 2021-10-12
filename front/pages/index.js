import React from 'react';
import Head from 'next/head';
import SecondLayout from '../components/SecondLayout';
import MainImage from '../components/MainImage';

function Home() {
  return (
    <>
      <Head>
        <title>디딤돌교회</title>
      </Head>
      <SecondLayout>
        <MainImage></MainImage>
      </SecondLayout>
    </>
  );
}

export default Home;
