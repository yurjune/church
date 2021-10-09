import React from 'react';
import { Box, Grid } from "@chakra-ui/react";
import { useRouter } from 'next/router';

import { categoryToContents } from '../utils/categoryConverter';

const ItemCard = ({ post }) => {
  const router = useRouter();

  const onClickImage = () => {
    router.push(`${categoryToContents(post.category)}/${post.id}`);
  };

  return (
    <Box
      textAlign="center"
      onClick={onClickImage}
      cursor="pointer"
    >
      {post.Thumbnails.length >= 1
        ? <Box
          h="0"
          pb="100%"
          bgImage={`url("http://localhost:3060/${post.Thumbnails[0]?.src}")`}
          backgroundPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
        >
        </Box>
        : <Box
          h="0"
          pb="100%"
          bgImage={`url("http://localhost:3060/pictures/갱얼쥐.jfif")`}
          backgroundPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
        >
        </Box>
      }
      <Box p="20px 10px 0 10px">
        <Box
          mb="3px"
          fontWeight="semibold"
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          {post.title}
        </Box>
        <Box fontSize="14px" color="grayLetter">
          {`${post.createdAt.slice(0, 10)}`}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemCard;
