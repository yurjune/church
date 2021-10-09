import React from 'react';
import { Box, Grid, GridItem } from "@chakra-ui/react";

import ItemCard from './ItemCard';

const ItemList = ({ data }) => {
  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(225px, auto))"
      columnGap={5}
      rowGap={6}
    >
      {data && data.map((post, index) => (
        <GridItem>
          <ItemCard
            key={post.title + index}
            post={post}
            >
          </ItemCard>
        </GridItem>
      ))}
    </Grid>
  );
};

export default ItemList;