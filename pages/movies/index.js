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

const Movies = ({ pictures, articles }) => {
  const router = useRouter();
  const header = pictures.find(item => item.fields.picture.fields.title === "header")
    .fields.picture.fields.file.url;
  const dummyThumbnail = pictures.find(item => item.fields.picture.fields.title === "thumbnail-1")
    .fields.picture.fields.file.url;
  const totalArticles = articles.filter(article =>
    (article.fields.category === "주일예배" || article.fields.category === "수요예배")
  );
  const sortedArticles = sortArticles(totalArticles, router.query.v);
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
