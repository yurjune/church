import React, { useEffect } from 'react';
import { Box, Text, Heading, } from '@chakra-ui/react';

import { useFetch } from '../pages/contents/sunday/[id]';

const Sidebar = ({ category, id }) => {
  const { data, error, isLoading } = useFetch(category, id);

  useEffect(() => {
    console.log('정보: ', data);
  }, [data]);

  if (error) {
    console.error(error);
    return <div>게시글을 불러오는 중 문제가 발생했습니다.</div>
  }

  return (
    <>
      <Box w="300px">
        <Heading size="lg" mb="30">아침예배</Heading>
        <Text ml="2px" mb="15px">작성일시:</Text>
        <Text ml="2px" mb="15px">조정민 목사</Text>
        <Text ml="2px" mb="15px">본문: 삿 21:1-25</Text>
      </Box>
    </>
  );
};

export default Sidebar;