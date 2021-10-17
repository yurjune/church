import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const option = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (<Image
        src={`https:${node.data.target.fields.file.url}`}
        height={node.data.target.fields.file.details.image.height}
        width={node.data.target.fields.file.details.image.width}
      />)
    },
    [BLOCKS.PARAGRAPH]: (node, children) => <Box mb="5px">{children}</Box>,
  },
  renderText: text => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
}

const PostArticle = ({ article }) => {
  const { paragraph } = article.fields;
  console.log(paragraph);
  return (
    <Box>{documentToReactComponents(paragraph, option)}</Box>
  );
};

export default PostArticle;
