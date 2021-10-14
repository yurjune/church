import React from 'react';
import { Flex, Divider } from '@chakra-ui/react';
import PostCardInfo from './PostCardInfo';
import PostCardButton from './PostCardButton';

const PostCard = ({ article }) => {
  return (
    <Flex direction="column">
      <PostCardInfo article={article} />
      <Divider my="20px" />
      {/* <PostCardButton article={article} /> */}
    </Flex>
  );
};

export default PostCard;
