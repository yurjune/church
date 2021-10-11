import React from 'react';
import { useRouter } from 'next/router';
import useFetch from '../hooks/useFetch';
import ContentsList from './ContentsList';

const ContentsListPage = ({ category }) => {
  const router = useRouter();
  const { page } = router.query;
  const url = `/posts?category=${category}&page=${page || 1}`
  const { data, error, isLoading } = useFetch(url);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    console.error(error);
    return <div>게시글을 불러오는 중 문제가 발생했습니다.</div>;
  }

  return (
    <ContentsList data={data} category={category}></ContentsList>
  );
};

export default ContentsListPage;
