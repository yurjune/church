import React, { useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { categoryToContents } from '../utils/categoryConverter';

const ItemCard = ({ article, pictures }) => {
  const router = useRouter();
  const { title, category } = article.fields;
  const { id, createdAt } = article.sys;
  const thumbnail = article.fields.thumbnail?.fields.file.url;
  const dummyThumbnail = pictures.find(item => item.fields.picture.fields.title === "thumbnail-1")
    .fields.picture.fields.file.url;

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
