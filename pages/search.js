import React from 'react';
import { useRouter } from 'next/router';
import { createClient } from 'contentful';
import AppLayout from '../components/AppLayout';
import SimplePage from '../components/SimplePage';
import SearchPage from '../components/SearchPage';
import { sortArticles } from '../hooks/useArticle';

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

const Search = ({ pictures, articles }) => {
  const router = useRouter();
  const keyword = router.query.s;
  const message = `'${keyword}' 에 대한 검색 결과 입니다.`;
  const header = pictures.find(item => item.fields.picture.fields.title === "header")
    .fields.picture.fields.file.url;
  const searchResult = articles.filter(article => (
    article.fields.title.includes(keyword)
    // article.fields.title.includes(keyword) || article.fields.paragraph.content.forEach(item => (
    //   item.content.forEach(post => (
    //     post.value.includes(keyword)
    //   ))
    // ))
  ));
  const sortedArticles = sortArticles(searchResult);
  return (
    <AppLayout
      header={header}
    >
      <SimplePage title={message}>
        <SearchPage articles={sortedArticles}></SearchPage>
      </SimplePage>
    </AppLayout>
  );
};

export default Search;
