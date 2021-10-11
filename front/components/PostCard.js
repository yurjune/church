import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Text, Divider } from '@chakra-ui/react';
import axios from 'axios';

import PostCardButton from './PostCardButton';
import { categoryToUrl } from '../utils/categoryConverter';
// import useFetch from '../hooks/useFetch';

axios.defaults.baseURL = 'http://localhost:3060';
axios.defaults.withCredentials = true;

const PostCard = ({ data }) => {
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

  const titleStyle = {
    fontSize: { base: "25px", md: "25px" },
    mb: { base: "15px", md: "20px" },
  }
  const textStyle = {
    ml: "2px",
    mb: { base: "10px", md: "15px" },
    fontSize: "17px"
  };
  return (
    <>
      <Flex direction="column">
        <Box>
          <Text {...titleStyle}>
            {data.category}
          </Text>
          <Text {...textStyle}>제목: {data.title}</Text>
          <Text {...textStyle}>일시: {data.createdAt.substring(0, 10)}</Text>
          {/* <Text {...textStyle}>작성자: {data.User.id}</Text> */}
          <Divider my="20px"></Divider>
        </Box>
        <PostCardButton
          data={data}
          url={url}
          deletePost={deletePost}
          movePost={movePost}
        />
      </Flex>
    </>
  );
};

export default PostCard;
