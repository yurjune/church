import React from 'react';
import Head from 'next/head';
import { createClient } from 'contentful';
import AppLayout from '../../components/AppLayout';
import ContentsListPage from '../../components/ContentsListPage';
import { sortArticles, filterByTag } from '../../hooks/useArticle';

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
  const filteredArticles = articles.items.filter(article => article.fields.category === "주일예배");
  const sortedArticles = sortArticles(filteredArticles);
  return {
    props: {
      pictures: pictures.items,
      articles: sortedArticles,
    }
  }
}

const Friday = ({ pictures, articles: temp }) => {
  const articles = new Array(205).fill(temp[0]);

  return (
    <>
      <Head>
        <title>수요예배</title>
      </Head>
      <AppLayout pictures={pictures}>
        <ContentsListPage
          category="수요예배"
          pictures={pictures}
          articles={articles}
        />
      </AppLayout>
    </>
  );
};

export default Friday;