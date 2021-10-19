import React from 'react';
import { Link, Grid, GridItem } from '@chakra-ui/react'
import { categoryToUrl } from '../utils/categoryConverter';

const BibleTag = ({ bible, category }) => {
  return (
    <Grid
      templateColumns={{
        md: "repeat(auto-fit, minmax(17%, 1fr))",
        sm: "repeat(auto-fit, minmax(20%, 1fr))",
        base: "repeat(auto-fit, minmax(30%, 1fr))",
      }}
      columnGap={3}
      rowGap={3}
    >
      {bible.map(item => (
        <Link
          key={Object.keys(item)}
          href={`${categoryToUrl(category)}?v=${Object.values(item)}`}
        >
          {Object.keys(item)}
        </Link>
      ))}
    </Grid>
  );
};

export default BibleTag;