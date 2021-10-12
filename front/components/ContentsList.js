import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

import ContentsBar from './ContentsBar';
import ItemList from './ItemList';
import WriteButton from './WriteButton';
import Pagination from './Pagination';

const buttonList = ['전체', '성경', '주제'];
const ContentsList = ({ data, category }) => {
  return (
    <>
      <Box mb="20px">
        <ContentsBar
          category={category}
          buttonList={buttonList}
        />
      </Box>
      <Box
        px={{ base: "20px", sm: "0", md: "0" }}
        mb="50px"
      >
        <ItemList data={data}></ItemList>
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

export default ContentsList;
