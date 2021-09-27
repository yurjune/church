import React from 'react';
import { Box, Square, Image, Grid, GridItem } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import Link from 'next/router';

const ItemCard = ({ post, index, url, category }) => {
  const router = useRouter();
  const onClickImage = () => {
    router.push(`/contents/${category}/${post.id}`);
  }

  return (
    <>
      <GridItem>
        <Square mb="20px" onClick={onClickImage} cursor="pointer">
          {post.Thumbnail
            ? <Image src={post.Thumbnail.src} />
            : <Image src='https://via.placeholder.com/300' />
          }
        </Square>
        <Box fontSize="20px" fontWeight="bold" textAlign="center" mb="20px" onClick={onClickImage} cursor="pointer">
          {post.title}
        </Box>
      </GridItem>
    </>
  );
};

export default ItemCard;