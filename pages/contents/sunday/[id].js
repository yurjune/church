import React from 'react';
import { createClient } from 'contentful';
import AppLayout from '../../../components/AppLayout';
import ContentPage from "../../../components/ContentPage";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "article" 
  });
  const paths = res.items.map(item => {
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
  const { items: pic } = await client.getEntries({
    content_type: 'picture',
  });
  const { items } = await client.getEntries({
    content_type: 'article',
    'sys.id': params.id,
  });
  return {
    props: {
      picture: pic,
      article: items[0]
    }
  }
}

const Sunday = ({ article, picture }) => {
  const category = "주일예배";
  const header = picture.find(item => item.fields.picture.fields.title === "header")
  .fields.picture.fields.file.url;
  console.log(article);
  return (
    <AppLayout header={header}>
      <ContentPage
        category={category}
        article={article}
      />
    </AppLayout>
  );
};

export default Sunday;
