import React from 'react';
import { Box, Flex } from "@chakra-ui/react";

import ContentsTable from './ContentsTable';

const tableStyle = {
  variant: "striped",
  colorScheme: "linkedin",
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
        <ContentsTable data={data} tableStyle={tableStyle} />
      )}
    </>
  );
};

export default TableItem;
