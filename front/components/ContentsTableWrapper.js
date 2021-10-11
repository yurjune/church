import React from 'react';
import { Box } from '@chakra-ui/react';

import TitleBar from './TitleBar';
import ContentsTable from './ContentsTable';
import WriteButton from './WriteButton';
import Pagination from './Pagination';

const ContentsTableWrapper = () => {
  const tableStyle = {
    colorScheme: "whiteAlpha",
    colorScheme: "blackAlpha",
    // size: "sm",
  };

  return (
    <>
      <Box mb="20px">
        <TitleBar title={category}></TitleBar>
      </Box>
      <Box mb="40px">
        <ContentsTable data={data} tableStyle={tableStyle} />
      </Box>
      <Box mb="30px">
        <WriteButton></WriteButton>
      </Box>
      <Box>
        <Pagination category={category}></Pagination>
      </Box>
    </>
  );
};

export default ContentsTableWrapper;
