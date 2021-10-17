import React from 'react';
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
  const header = pictures.find(item => item.fields.picture.fields.title === "header")
    .fields.picture.fields.file.url;
  const sundayArticles = articles.filter(article => article.fields.category === "주일예배");
  const sortedArticles = sortArticles(sundayArticles);

  return (
    <AppLayout header={header}>
      <ContentPage
        category="주일예배"
        article={article}
        articles={sortedArticles}
      />
    </AppLayout>
  );
};

export default Sunday;
