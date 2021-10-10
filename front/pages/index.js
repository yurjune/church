import react from 'react';
import Head from 'next/head';
import { Box, Image } from '@chakra-ui/react';

import SecondLayOut from '../components/SecondLayOut';

function Home() {
  return (
    <>
      <Head>
        <title>디딤돌교회</title>
      </Head>
      <SecondLayOut>
        <Box maxW="960px" m="0 auto">
          <Image src="http://localhost:3060/pictures/didimdol.jpg" />
        </Box>
      </SecondLayOut>
    </>
  );
}

export default Home;
