import React from 'react';
import { Box } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const PostArticle = ({ article }) => {
  const { paragraph } = article.fields;
  return (
    <Box>{documentToReactComponents(paragraph)}</Box>
  );
};

export default PostArticle;
