import React, { useEffect } from 'react';
import { Box, Square, Image, Grid, GridItem } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import Link from 'next/router';

const ItemCard = ({ post, index, url, category }) => {
  const router = useRouter();
  const onClickImage = () => {
    router.push(`/contents/${category}/${post.id}`);
  }

  useEffect(() => {
    // console.log(post);
  });

  return (
    <>
      <GridItem>
        {post.Images.length >= 1
          ? <Image boxSize="225px" src={`http://localhost:3060/${post.Images[0]?.src}`} mb="20px" onClick={onClickImage} cursor="pointer" />
          : <Image boxSize="225px" src={`http://localhost:3060/Frame_1.png`} mb="20px" onClick={onClickImage} cursor="pointer"/>
        }
        <Box fontSize="20px" fontWeight="bold" textAlign="center" mb="20px" onClick={onClickImage} cursor="pointer">
          {post.title}
        </Box>
      </GridItem>
    </>
  );
};

export default ItemCard;