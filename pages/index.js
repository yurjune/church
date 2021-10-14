import React from 'react';
import Head from 'next/head';
import { createClient } from 'contentful';
import SecondLayout from '../components/SecondLayout';
import MainImage from '../components/MainImage';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: 'picture',
  });
  return {
    props: {
      picture: res.items,
    }
  }
}

function Home({ picture }) {
  const header = picture.find(item => item.fields.picture.fields.title === "header")
    .fields.picture.fields.file.url;
  const mainImage = picture.find(item => item.fields.picture.fields.title === "mainImage")
    .fields.picture.fields.file.url;
  return (
    <>
      <Head>
        <title>디딤돌교회</title>
      </Head>
      <SecondLayout
        header={header}
      >
        <MainImage mainImage={mainImage} />
      </SecondLayout>
    </>
  );
}

export default Home;
