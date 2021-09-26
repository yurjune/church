import React from 'react';
import { Box, Square, Image } from "@chakra-ui/react";

const ItemCard = ({ post, index }) => {

  return (
    <Box>
      <Square size="225px" mb="15px">
        <Image src={post.Thumbnail.src}/>
      </Square>
      <Box fontSize="20px" fontWeight="bold" textAlign="center">
        {post.content + index}
      </Box>
    </Box>
  );
};

export default ItemCard;