import React, { useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Box, Flex } from '@chakra-ui/react';

import AppLayout from '../../../components/AppLayout';
import Sidebar from '../../../components/SideBar';
import MainContent from '../../../components/MainContent';

export const useFetch = (category, id) => {
  const fetcher = (url) => axios.get(url, { withCredentials: true }).then((result) => result.data);
  const { data, error, mutate } = useSWR(
    `http://localhost:3060/post?category=${category}&id=${id}`, fetcher,
  );
  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

const Content = () => {
  const router = useRouter();
  const category = encodeURIComponent("주일예배");
  const { id } = router.query;

  return (
    <>
      <AppLayout>
        <Flex>
          <Sidebar category={category} id={id}/>
          <MainContent/>
        </Flex>
      </AppLayout>
    </>
  );
};

export default Content;