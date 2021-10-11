import React from 'react';
import { Box, Flex, Text, Divider } from '@chakra-ui/react';
import PostCardButton from './PostCardButton';
import useDayjs from '../hooks/useDayjs';

const titleStyle = {
  fontSize: { base: "25px", md: "25px" },
  mb: { base: "15px", md: "20px" },
}
const textStyle = {
  ml: "2px",
  mb: { base: "10px", md: "15px" },
  fontSize: "17px"
};
const PostCard = ({ data }) => {
  return (
    <Flex direction="column">
      <Box>
        <Text {...titleStyle}>{data.category}</Text>
        <Text {...textStyle}>제목: {data.title}</Text>
        <Text {...textStyle}>일시: {useDayjs(data.createdAt)}</Text>
        {/* <Text {...textStyle}>작성자: {data.User.id}</Text> */}
        <Divider my="20px"></Divider>
      </Box>
      <PostCardButton data={data} />
    </Flex>
  );
};

export default PostCard;
