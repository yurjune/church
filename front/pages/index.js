import react from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import AppLayout from '../components/AppLayout';
import BlockQuote from '../components/BlockQuote';
import MainImage from '../components/MainImage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SecondLayOut from '../components/SecondLayOut';

function Home() {
  return (
    <>
      <Head>
        <title>디딤돌교회</title>
      </Head>
      <SecondLayOut>
        <MainImage></MainImage>
      </SecondLayOut>
    </>
  );
}

export default Home;
