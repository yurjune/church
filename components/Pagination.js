import React from "react";

import useFetch from '../hooks/useFetch';
import SubPagination from "./SubPagination";

const Pagination = ({ category }) => {
  const url = `/posts/total?category=${category}`;
  const { data, error, isLoading } = useFetch(url);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    console.error(error);
    return <div>로딩 실패</div>;
  }

  return (
    <SubPagination data={data}></SubPagination>
  );
};

export default Pagination;
