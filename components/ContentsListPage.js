import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import ContentsBar from './ContentsBar';
import ItemList from './ItemList';
import Pagination from './Pagination';

const buttonList = ['전체', '성경', '주제'];
const ContentsListPage = ({ category, articles, dummyThumbnail }) => {
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
      <ItemList articles={articles} dummyThumbnail={dummyThumbnail} />
      </Box>
      <Box>
        <Pagination articles={articles} />
      </Box>
    </>
  );
};

export default ContentsListPage;
