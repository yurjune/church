import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import ContentsBar from './ContentsBar';
import ItemList from './ItemList';
import Pagination from './Pagination';
import Working from './Working';

const buttonList = ['전체', '성경', '주제'];
const ContentsListPage = ({ category, articles, dummyThumbnail }) => {
  return (
    <>
      {articles.length >= 1 ?
        (<>
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
          <Pagination articles={articles} />
        </>)
        : <Working />
      }
    </>
  );
};

export default ContentsListPage;
