import React from 'react';
import { useRouter } from 'next/router';
import useFetch from '../hooks/useFetch';
import EditPost from '../components/EditPost';

const Edit = () => {
  const router = useRouter();
  const url = `/post/${router.query.id}`;
  const { data, error, isLoading } = useFetch(url);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    console.error(error);
    return <div>게시글을 불러오는 중 문제가 발생했습니다.</div>;
  }

  return (
    <EditPost data={data}></EditPost>
  );
};

export default Edit;
