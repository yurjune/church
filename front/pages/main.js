import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import Footer from '../components/Footer';
import HeadLine from '../components/HeadLine';
import Verse from '../components/Verse';

const Main = () => {
  return (
    <>
      <Head>
        <title>디딤돌교회</title>
      </Head>
      <AppLayout>
      </AppLayout>
      <HeadLine />
      <Verse />
      <Footer />
    </>
  );
};

export default Main;
