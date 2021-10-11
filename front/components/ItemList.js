import React from 'react';
import { Grid, GridItem } from "@chakra-ui/react";

import ItemCard from './ItemCard';

const ItemList = ({ data }) => {
  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(220px, 1fr))"
      columnGap={5}
      rowGap={6}
    >
      {data && data.map((post, index) => (
        <GridItem key={post.title + index}>
          <ItemCard post={post}></ItemCard>
        </GridItem>
      ))}
    </Grid>
  );
};

export default ItemList;
