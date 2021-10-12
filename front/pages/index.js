import react from 'react';
import Head from 'next/head';
import { Box, Image } from '@chakra-ui/react';

import SecondLayout from '../components/SecondLayout';

function Home() {
  return (
    <>
      <Head>
        <title>디딤돌교회</title>
      </Head>
      <SecondLayout>
        <Box maxW="960px" m="0 auto">
          <Image src="http://localhost:3060/pictures/didimdol.jpg" />
        </Box>
      </SecondLayout>
    </>
  );
}

export default Home;
