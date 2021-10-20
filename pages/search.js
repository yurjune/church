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
  const searchResult = articles.filter(article => (
    article.fields.title.includes(keyword) 
  ));
  const a = articles.filter((article, aidx) => {
    return article.fields.paragraph.content.some((item, bidx) => {
      return item.content.some((post, cidx) => {
        return post.value.includes(keyword)
      })
    })
  })
  const b = searchResult.concat(a);
  // 알골랴, fulltextsearch
  const sortedArticles = sortArticles(b);
  return (
    <AppLayout pictures={pictures}>
      <SimplePage title={message}>
        <SearchPage articles={sortedArticles} />
      </SimplePage>
    </AppLayout>
  );
};

export default Search;
