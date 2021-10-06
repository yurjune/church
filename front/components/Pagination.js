import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter } from 'next/router';

import { PageButton, ArrowButton } from './PageButton';
import useFetch from '../hooks/useFetch';

const getTotalPages = (totalPosts) => {
  const totalPages = totalPosts && Math.ceil(totalPosts / 12);
  const pageList = new Array(30).fill().map((value, index) => index + 1);
  const result = [];
  for (let i = 0; i < pageList.length; i += 5) {
    result.push(pageList.slice(i, i + 5));
  }
  return result;
};

const getCurrentPageGroup = (currentPage, totalPages) => {
  const result = totalPages?.find(element => element.find(value => value === currentPage));
  return result;
};

const Pagination = ({ category }) => {
  const url = `/posts/total?category=${category}`;
  const { data, error, isLoading } = useFetch(url);
  const router = useRouter();

  const totalPages = useMemo(() => getTotalPages(data), [data]);
  const initialPage = parseInt(router.query.page, 10) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const memorizedCurrentPageGroup = useMemo(() => getCurrentPageGroup(currentPage, totalPages), [currentPage, totalPages]);
  const [currentPageGroup, setCurrentPageGroup] = useState(memorizedCurrentPageGroup);

  const firstPageGroup = totalPages[0];
  const firstPage = firstPageGroup[0];
  const lastPageGroup = totalPages[totalPages.length - 1];
  const lastPage = lastPageGroup[lastPageGroup.length - 1];

  /* 만약 totalPages = [[1,2,3,4,5],[6,7,8,9,10],[11,12]], currentPage = 6 이면
  currentPageGroup = [6,7,8,9,10]
  fistPageGroup = [1,2,3,4,5]
  lastPageGroup = [11,12]
  firstPage = 1
  lastPage = 12 이다.
  */

  useEffect(() => {
    setCurrentPageGroup(memorizedCurrentPageGroup);
  }, [memorizedCurrentPageGroup]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    console.error(error);
    return <div>로딩 실패</div>;
  }

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
      alignItems="center"
      justifyContent="center"
    >
      <Flex>
        {firstPageGroup[0] === currentPageGroup[0] ? "" : (
          <>
            <PageButton onClickButton={onClickButton}>{firstPage}</PageButton>
            <ArrowButton onClickButton={onClickPrevArrow}>
              <Icon
                as={IoIosArrowBack}
                color="gray.700"
                boxSize={3}
              />
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
              <Icon
                as={IoIosArrowForward}
                color="gray.700"
                boxSize={3}
              />
            </ArrowButton>
            <PageButton onClickButton={onClickButton}>{lastPage}</PageButton>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Pagination;
