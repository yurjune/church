import React from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Verse from '../components/BlackQuote';

const Main = () => {
  return (
    <>
      <Head>
        <title>디딤돌교회</title>
      </Head>
      <Header></Header>
      <Verse></Verse>
      <Footer></Footer>
    </>
  );
};

export default Main;
