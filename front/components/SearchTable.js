import React, { useEffect, useState } from 'react';
import { Box, Flex } from "@chakra-ui/react";

import SearchTableItem from './SearchTableItem';

const TableItem = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {typeof data == 'string' ? (
        <Flex justify="center">
          <Box>{data}</Box>
        </Flex>
      )
      : (
        <SearchTableItem data={data} />
      )}
    </>
  );
};

export default TableItem;
