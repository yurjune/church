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
  const header = pictures.find(item => item.fields.picture.fields.title === "header")
    .fields.picture.fields.file.url;
  const mainImage = pictures.find(item => item.fields.picture.fields.title === "mainImage")
    .fields.picture.fields.file.url;
  const logo = pictures.find(item => item.fields.picture.fields.title === "로고")
    .fields.picture.fields.file.url;
  console.log(pictures)
  return (
    <>
      <Head>
        <title>디딤돌교회</title>
      </Head>
      <SecondLayout
        header={header}
        logo={logo}
        pictures={pictures}
      >
        <MainImage mainImage={mainImage} />
      </SecondLayout>
    </>
  );
}

export default Home;
