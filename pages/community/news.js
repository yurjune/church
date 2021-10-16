import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box, Divider } from '@chakra-ui/react';
import { createClient } from 'contentful';
import AppLayout from '../../components/AppLayout';
import PostCardWrapper from '../../components/PostCardWrapper';
import PostCardInfo from '../../components/PostCardInfo';
import ContentsTable from '../../components/ContentsTable';
import Pagination from '../../components/Pagination';
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

const tableStyle = {
  variant: "striped",
  colorScheme: "blackAlpha",
};

const News = ({ pictures, articles }) => {
  const router = useRouter();
  const page = router.query.page || 1;
  const header = pictures.find(item => item.fields.picture.fields.title === "header")
  .fields.picture.fields.file.url;
  const newsArticles = articles.filter(article => article.fields.category === '주일예배');
  const sortedArticles = sortArticles(newsArticles);
  const limitedArticles = getLimitedArticles(sortedArticles, page);
  const firstArticle = sortedArticles[0];
  return (
    <>
      <Head>
        <title>교회소식</title>
      </Head>
      <AppLayout
        header={header}
      >
        <Box mb="140px">
          <PostCardWrapper article={firstArticle}>
            <PostCardInfo article={firstArticle} />
          </PostCardWrapper>
        </Box>
        <Divider />
        <Box mb="40px">
          <ContentsTable articles={limitedArticles} tableStyle={tableStyle} />
        </Box>
        <Box>
          <Pagination articles={sortedArticles} category="교회소식" />
        </Box>
      </AppLayout>
    </>
  );
};

export default News;
