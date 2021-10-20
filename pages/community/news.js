import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { createClient } from 'contentful';
import AppLayout from '../../components/AppLayout';
import NewsPage from '../../components/NewsPage';
import { sortArticles, getLimitedArticles } from '../../hooks/useArticle';

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

const News = ({ pictures, articles }) => {
  const router = useRouter();
  const page = router.query.page || 1;
  const newsArticles = articles.filter(article => article.fields.category === "교회소식");
  const sortedArticles = sortArticles(newsArticles);
  const limitedArticles = getLimitedArticles(sortedArticles, page);
  const firstArticle = sortedArticles[0];
  return (
    <>
      <Head>
        <title>교회소식</title>
      </Head>
      <AppLayout pictures={pictures}>
        <NewsPage
          firstArticle={firstArticle}
          limitedArticles={limitedArticles}
          sortedArticles={sortedArticles}
        />
      </AppLayout>
    </>
  );
};

export default News;
