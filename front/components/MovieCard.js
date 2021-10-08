import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Text, Divider } from '@chakra-ui/react';
import axios from 'axios';

import MovieCardButton from './MovieCardButton';
import { categoryToUrl } from '../utils/categoryConverter';
// import useFetch from '../hooks/useFetch';

axios.defaults.baseURL = 'http://localhost:3060';
axios.defaults.withCredentials = true;

const MovieCard = ({ data }) => {
  const router = useRouter();
  const url = categoryToUrl(data.category);

  const deletePost = async () => {
    try {
      const isDelete = confirm('정말로 삭제하시겠습니까?');
      if (isDelete) {
        await axios.delete(`/post/${data.id}`);
        alert('게시글이 삭제되었습니다!');
        return router.push(url);
      }
      return;
    } catch (error) {
      console.error(error);
    }
  };

  const movePost = (data, go) => async (e) => {
    const prev = go;
    const url = `/post/${prev}?category=${data.category}&id=${data.id}`;
    const result = await axios.get(url);
    const cardData = result.data;
    return router.push(`${cardData.id}`);
  };

  return (
    <>
      <Flex fontSize="17px" direction="column">
        <Box>
          <Text fontSize="30px">{data.category}</Text>
          <Divider mt="10px" mb="20px"></Divider>
            <Text ml="2px" mb="15px">제목: {data.title}</Text>
            <Text ml="2px" mb="15px">일시: {data.createdAt.substring(0, 10)}</Text>
            <Text ml="2px" mb="15px">작성자: {data.User.id}</Text>
          <Divider mt="10px" mb="20px"></Divider>
        </Box>
        <MovieCardButton
          data={data}
          url={url}
          deletePost={deletePost}
          movePost={movePost}
        />
      </Flex>
    </>
  );
};

export default MovieCard;
