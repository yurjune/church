import React, { useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { categoryToContents } from '../utils/categoryConverter';

const ItemCard = ({ post, dummyThumbnail }) => {
  const router = useRouter();
  const { title, category } = post.fields;
  const thumbnail = post.fields.thumbnail?.fields.file.url;
  const { id, createdAt } = post.sys;

  const onClickImage = () => {
    router.push(`${categoryToContents(category)}/${id}`);
  };

  return (
    <Box
      textAlign="center"
      onClick={onClickImage}
      cursor="pointer"
    >
      {thumbnail
        ? <Box
          h="0"
          pb="100%"
          bgImage={`url("http:${thumbnail}")`}
          backgroundPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
        />
        : <Box
          h="0"
          pb="100%"
          backgroundPosition="center"
          bgImage={`url("http:${dummyThumbnail}")`}
          bgSize="cover"
          bgRepeat="no-repeat"
        />
      }
      <Box p="20px 10px 0 10px">
        <Box
          mb="3px"
          fontWeight="semibold"
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          {title}
        </Box>
        <Box fontSize="14px" color="grayLetter">
          {createdAt.slice(0, 10)}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemCard;
