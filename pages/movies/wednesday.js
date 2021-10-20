import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { createClient } from 'contentful';
import AppLayout from '../../components/AppLayout';
import ContentsListPage from '../../components/ContentsListPage';
import { sortArticles } from '../../hooks/useArticle';

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

const Wednesday = ({ pictures, articles }) => {
  const router = useRouter();
  const wednesdayArticles = articles.filter(article => article.fields.category === "수요예배");
  const sortedArticles = sortArticles(wednesdayArticles, router.query.v);
  return (
    <>
      <Head>
        <title>수요예배</title>
      </Head>
      <AppLayout pictures={pictures}>
        <ContentsListPage
          category="수요예배"
          articles={sortedArticles}
          pictures={pictures}
        />
      </AppLayout>
    </>
  );
};

export default Wednesday;
