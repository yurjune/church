import React from 'react';
import { createClient } from 'contentful';
import AppLayout from '../../../components/AppLayout';
import ContentPage from "../../../components/ContentPage";

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
  const articles = await client.getEntries({
    content_type: 'article',
    'sys.id': params.id,
  });
  return {
    props: {
      pictures: pictures.items,
      article: articles.items[0]
    }
  }
}

const News = ({ pictures, article }) => {
  const category = "교회소식";
  const header = pictures.find(item => item.fields.picture.fields.title === "header")
    .fields.picture.fields.file.url;
  return (
    <AppLayout header={header}>
      <ContentPage
        category={category}
        article={article}
      />
    </AppLayout>
  );
};

export default News;
