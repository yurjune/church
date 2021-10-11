import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useFetch from '../hooks/useFetch';
import AppLayout from '../components/AppLayout';
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
    <>
      <Head>
        <title>수정</title>
      </Head>
      <AppLayout>
        <EditPost data={data}></EditPost>
      </AppLayout>
    </>
  );
};

export default Edit;
