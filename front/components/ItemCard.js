import React, { useEffect } from 'react';
import { Box, Flex, Square, Image } from "@chakra-ui/react";
import { useRouter } from 'next/router';

import { categoryToContents } from '../utils/categoryConverter';

const ItemCard = ({ post, category }) => {
  const router = useRouter();
  const url = categoryToContents(category);

  const onClickImage = () => {
    router.push(`${url}/${post.id}`);
  };

  return (
    <>
      <Box
        mb="20px"
        textAlign="center"
        onClick={onClickImage}
        cursor="pointer"
      >
        {post.Thumbnails.length >= 1
          ? <Box
            w="100%"
            h="0"
            pb="100%"
            bgImage={`url("http://localhost:3060/${post.Thumbnails[0]?.src}")`}
            backgroundPosition= "center"
            bgSize="cover"
            bgRepeat="no-repeat"
          >
          </Box>
          : <Box
            w="100%"
            h="0"
            pb="100%"
            bgImage={`url("http://localhost:3060/Frame_1.png")`}
            backgroundPosition= "center"
            bgSize="cover"
            bgRepeat="no-repeat"
          >
          </Box>
        }
        <Box p="20px 10px 0 10px">
          <Box mb="5px" fontSize="18px" fontWeight="bold">
            {post.title}
          </Box>
          <Box fontSize="14px" color="grayLetter">
            {post.createdAt.slice(0, 10)}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ItemCard;
