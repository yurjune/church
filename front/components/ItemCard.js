import React from 'react';
import { Box, Square, Image } from "@chakra-ui/react";

const ItemCard = ({ post }) => {

  return (
    <>
      <Square size="225px" mb="15px">
        <Image src={post.Thumbnail.src}/>
      </Square>
      <Box w="225px" fontSize="20px" fontWeight="bold" textAlign="center">
        {post.content}
      </Box>
    </>
  );
};

export default ItemCard;