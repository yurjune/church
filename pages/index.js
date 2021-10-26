import React from 'react';
import Head from 'next/head';
import { createClient } from 'contentful';
import { Box } from "@chakra-ui/react";
import SecondLayout from '../components/SecondLayout';
import MainImage from '../components/MainImage';
import Introduction from '../components/Introduction';
import WorshipTime from '../components/WorshipTime';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const pictures = await client.getEntries({
    content_type: 'picture',
  });
  return {
    props: {
      pictures: pictures.items,
    }
  }
}

function Home({ pictures }) {
  const mainImage = pictures.find(item => item.fields.picture.fields.title === "mainImage")
    .fields.picture.fields.file.url;
  return (
    <>
      <Head>
        <title>디딤돌교회</title>
      </Head>
      <SecondLayout
        pictures={pictures}
      >
        {/* <MainImage mainImage={mainImage} /> */}
        <Box mt="30px" mb="50px">
          <Introduction />
        </Box>
        <WorshipTime />
      </SecondLayout>
    </>
  );
}

export default Home;
