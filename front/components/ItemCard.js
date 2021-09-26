import React from 'react';
import { Box, Square, Image, Grid, GridItem } from "@chakra-ui/react";

const ItemCard = ({ post, index }) => {

  return (
    <GridItem>
      <Square size="225px" mb="15px">
        <Image src={post.Thumbnail.src}/>
      </Square>
      <Box fontSize="20px" fontWeight="bold" textAlign="center">
        {post.content + index}
      </Box>
    </GridItem>
  );
};

export default ItemCard;