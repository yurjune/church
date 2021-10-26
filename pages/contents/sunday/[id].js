import React from 'react';
import Head from 'next/head';
import { createClient } from 'contentful';
import AppLayout from '../../../components/AppLayout';
import ContentPage from "../../../components/ContentPage";
import { sortArticles } from '../../../hooks/useArticle';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const articles = await client.getEntries({ 
    content_type: "article" 
  });
  const paths = articles.items.map(item => {
    return {
      params: { id: item.sys.id }
    }
  });
  return {
    paths,
    fallback: false
  };
}

export const getStaticProps = async ({ params }) => {
  const pictures = await client.getEntries({
    content_type: 'picture',
  });
  const article = await client.getEntries({
    content_type: 'article',
    'sys.id': params.id,
  });
  const articles = await client.getEntries({
    content_type: 'article',
  });
  return {
    props: {
      pictures: pictures.items,
      article: article.items[0],
      articles: articles.items,
    }
  }
}

const Sunday = ({ pictures, article, articles }) => {
  const sundayArticles = articles.filter(article => article.fields.category === "주일예배");
  const sortedArticles = sortArticles(sundayArticles);
  return (
    <>
      <Head>
        <title>주일예배</title>
      </Head>
      <AppLayout pictures={pictures}>
        <ContentPage
          category="주일예배"
          article={article}
          articles={sortedArticles}
        />
      </AppLayout>
    </>
  );
};

export default Sunday;
