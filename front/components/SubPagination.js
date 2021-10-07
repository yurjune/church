import React, { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Icon } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PageButton, ArrowButton } from './PageButton';

import usePagination from './usePagination';

const SubPagination = ({ data }) => {
  const router = useRouter();
  const initialPage = parseInt(router.query.page, 10) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const {
    currentPageGroup,
    firstPageGroup,
    lastPageGroup,
    firstPage,
    lastPage,
  } = usePagination(data, currentPage);

  const movePage = (page) => {
    setCurrentPage(page);
    router.push(`${router.pathname}?page=${page}`);
  };

  const onClickButton = (children) => (e) => {
    movePage(children);
  };

  const onClickPrevArrow = () => {
    const startPage = currentPageGroup[0];
    movePage(startPage - 1);
  };

  const onClickNextArrow = () => {
    const endPage = currentPageGroup[currentPageGroup.length - 1];
    movePage(endPage + 1);
  };

  return (
    <Flex
      p={30}
      w="full"
      align="center"
      justify="center"
    >
      <Flex>
        {firstPageGroup[0] === currentPageGroup[0] ? "" : (
          <>
            <PageButton onClickButton={onClickButton}>{firstPage}</PageButton>
            <ArrowButton onClickButton={onClickPrevArrow}>
              <Icon as={IoIosArrowBack} boxSize={3} />
            </ArrowButton>
          </>
        )}
        <Box mx={3}>
          {currentPageGroup.map(value => (
            <PageButton
              key={value}
              currentPage={currentPage}
              onClickButton={onClickButton}
            >
              {value}
            </PageButton>
          ))}
        </Box>
        {lastPageGroup[0] === currentPageGroup[0] ? "" : (
          <>
            <ArrowButton onClickButton={onClickNextArrow}>
              <Icon as={IoIosArrowForward} boxSize={3} />
            </ArrowButton>
            <PageButton onClickButton={onClickButton}>{lastPage}</PageButton>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default SubPagination;
