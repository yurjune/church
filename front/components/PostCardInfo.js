import React from 'react';
import { Box, Text, Divider } from '@chakra-ui/react';

const PostCardInfo = ({ data }) => {
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
    <Box>
      <Text {...titleStyle} fontWeight="semibold">{data.category}</Text>
      <Text {...textStyle}>제목: {data.title}</Text>
      <Text {...textStyle}>일시: {data.createdAt.slice(0, 10)}</Text>
      {/* <Text {...textStyle}>작성자: {data.User.id}</Text> */}
    </Box>
  );
};

export default PostCardInfo;