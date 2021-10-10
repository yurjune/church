import React from 'react';
import { useRouter } from 'next/router';

import SimplePage from '../components/SimplePage';
import SearchTable from '../components/SearchTable';
import useFetch from '../hooks/useFetch';

const Search = () => {
  const router = useRouter();
  const keyword = router.query.s;
  const message = `'${keyword}' 에 대한 검색 결과 입니다.`;

  const url = `/posts/search?s=${keyword}`
  const { data, error, isLoading } = useFetch(url);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    console.error(error);
    return <div>게시글을 불러오는 중 문제가 발생했습니다.</div>;
  }

  return (
    <SimplePage title={message}>
      <SearchTable data={data}></SearchTable>
    </SimplePage>
  );
};

export default Search;