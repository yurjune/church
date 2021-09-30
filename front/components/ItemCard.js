import React, { useEffect } from 'react';
import { Box, Flex, Square, Image } from "@chakra-ui/react";
import { useRouter } from 'next/router';

const ItemCard = ({ post, category }) => {
  const router = useRouter();
  const onClickImage = () => {
    router.push(`/contents/${category}/${post.id}`);
  }

  useEffect(() => {
    // console.log(post);
  });

  return (
    <>
      <Box
        mb="20px"
        textAlign="center"
        onClick={onClickImage}
        cursor="pointer"
      >
        {post.Images.length >= 1
          ? <Box w="100%" h="0" pb="100%">
            <Image
              src={`http://localhost:3060/${post.Images[0]?.src}`}
            />
          </Box>
          : <Box w="100%" h="0" pb="100%">
            <Image 
              src={`http://localhost:3060/Frame_1.png`} 
            />
          </Box>
        }
        <Box p="1em 1em 0 1em">
          <Box mb="5px" fontSize="20px" fontWeight="bold">
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
