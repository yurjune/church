import React from 'react';
import { useRouter } from 'next/router';
import { Grid, GridItem } from "@chakra-ui/react";
import ItemCard from './ItemCard';

const getArticles = (articles, page) => {
  const num = 12 * page;
  const newArticle = articles.slice(num-12, num);
  return newArticle;
};

const ItemList = ({ articles, dummyThumbnail }) => {
  const router = useRouter();
  const page = router.query.page || 1;
  const newArticle = getArticles(articles, page);
  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(220px, 1fr))"
      columnGap={5}
      rowGap={6}
    >
      {newArticle.map((post, index) => (
        <GridItem key={post.sys.id}>
          <ItemCard post={post} dummyThumbnail={dummyThumbnail} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ItemList;
