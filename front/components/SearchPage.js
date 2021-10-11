import React from 'react';
import { Box, Flex } from "@chakra-ui/react";

import ContentsListTable from './ContentsListTable';

const tableStyle = {
  variant: "striped",
  colorScheme: "green",
  size: "md",
}

const TableItem = ({ data }) => {
  return (
    <>
      {typeof data == 'string' ? (
        <Flex justify="center">
          <Box>{data}</Box>
        </Flex>
      )
      : (
        <ContentsListTable data={data} tableStyle={tableStyle} />
      )}
    </>
  );
};

export default TableItem;
