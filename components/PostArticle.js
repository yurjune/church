import React from 'react';
import { Box, Text, Divider, Link } from '@chakra-ui/react';
import Image from 'next/image';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { categoryToUrl } from '../utils/categoryConverter';

const option = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (<Image
        src={`https:${node.data.target.fields.file.url}`}
        height={node.data.target.fields.file.details.image.height}
        width={node.data.target.fields.file.details.image.width}
      />)
    },
    [BLOCKS.DOCUMENT]: (node, children) => (
      <Box fontSize="17px" lineHeight="180%">{children}</Box>
    ),
  },
  renderText: text => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
}

const PostArticle = ({ children, article }) => {
  const { paragraph } = article.fields;
  console.log(article);
  return (
    <Box>
      <Box>{documentToReactComponents(paragraph, option)}</Box>
      {children}
    </Box>
  );
};

export default PostArticle;
