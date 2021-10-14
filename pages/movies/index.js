import React from 'react';
import Head from 'next/head';
import { createClient } from 'contentful';
import AppLayout from '../../components/AppLayout';
import ContentsListPage from '../../components/ContentsListPage';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: 'picture',
  });
  const article = await client.getEntries({
    content_type: 'article',
  });
  return {
    props: {
      picture: res.items,
      article: article.items,
    }
  }
}

const Movies = ({ picture, article }) => {
  const header = picture.find(item => item.fields.picture.fields.title === "header")
    .fields.picture.fields.file.url;
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
          article={article}
        />
      </AppLayout>
    </>
  );
};

export default Movies;
