import react from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import AppLayout from '../components/AppLayout';
import BlockQuote from '../components/BlockQuote';
import MainImage from '../components/MainImage';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Head>
        <title>디딤돌교회</title>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      <Header></Header>
      <MainImage></MainImage>
      <BlockQuote></BlockQuote>
      <Footer></Footer>
    </>
  );
}

export default Home;
