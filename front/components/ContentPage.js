import React from 'react';
import PostCardWrapper from './PostCardWrapper';
import PostCard from './PostCard';
import useFetch from '../hooks/useFetch';

const ContentPage = ({ category, id }) => {
  const url = `/post?category=${category}&id=${id}`
  const { data, error, isLoading } = useFetch(url);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    console.error(error);
    return <div>게시글을 불러오는 중 문제가 발생했습니다.</div>;
  }

  return (
    <PostCardWrapper data={data}>
      <PostCard data={data}></PostCard>
    </PostCardWrapper>
  );
};

export default ContentPage;
