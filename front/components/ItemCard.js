import React, { useMemo } from 'react';
import { Box } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { categoryToContents } from '../utils/categoryConverter';

const getCardImage = (min, max) => () => {
  console.log('getCardImage');
  const cardImage = [
    `url("http://localhost:3060/pictures/강아지.jfif")`,
    `url("http://localhost:3060/pictures/토끼.jfif")`,
    `url("http://localhost:3060/pictures/고양이.png")`,
    `url("http://localhost:3060/pictures/수달.jpg")`,
  ];
  const pick = cardImage[Math.floor(Math.random() * (max - min + 1)) + min];
  return pick;
};

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
          bgImage={getCardImage(0, 3)}
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
          {post.createdAt.slice(0, 10)}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemCard;
