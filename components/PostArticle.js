import React from 'react';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const renderOption = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (<Image
        src={`https:${node.data.target.fields.file.url}`}
        height={node.data.target.fields.file.details.image.height}
        width={node.data.target.fields.file.details.image.width}
      />)
    }
  }
}

const PostArticle = ({ article }) => {
  console.log
  const { paragraph } = article.fields;
  return (
    <Box>{documentToReactComponents(paragraph, renderOption)}</Box>
  );
};

export default PostArticle;
