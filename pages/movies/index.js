import React from 'react';
import Head from 'next/head';
import { createClient } from 'contentful';
import AppLayout from '../../components/AppLayout';
import ContentsListPage from '../../components/ContentsListPage';
import useTime from '../../hooks/useTime';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const pictures = await client.getEntries({
    content_type: 'picture',
  });
  const articles = await client.getEntries({
    content_type: 'article',
  });
  return {
    props: {
      pictures: pictures.items,
      articles: articles.items,
    }
  }
}

const Movies = ({ pictures, articles }) => {
  const header = pictures.find(item => item.fields.picture.fields.title === "header")
    .fields.picture.fields.file.url;
  const dummyThumbnail = pictures.find(item => item.fields.picture.fields.title === "thumbnail-1")
    .fields.picture.fields.file.url;
  const sortedArticles = useTime(articles);
  return (
    <>
      <Head>
        <title>예배와 말씀</title>
      </Head>
      <AppLayout
        header={header}
      >
        <ContentsListPage
          category="예배와 말씀"
          articles={sortedArticles}
          dummyThumbnail={dummyThumbnail}
        />
      </AppLayout>
    </>
  );
};

export default Movies;
