import React from 'react';
import { Flex, Divider } from '@chakra-ui/react';
import PostCardInfo from './PostCardInfo';
import PostCardButton from './PostCardButton';

const PostCard = ({ data }) => {
  return (
    <Flex direction="column">
      <PostCardInfo data={data}></PostCardInfo>
      <Divider my="20px" />
      <PostCardButton data={data}></PostCardButton>
    </Flex>
  );
};

export default PostCard;
