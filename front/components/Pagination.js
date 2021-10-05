import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter } from 'next/router';

import { PageButton, ArrowButton, SideButton } from './PageButton';
import useFetch from '../hooks/useFetch';

const getTotalPagesGroup = (data) => {
  const totalPosts = data;
  const totalPages = Math.ceil(totalPosts / 12);
  const pageList = new Array(60).fill().map((value, index) => index + 1);
  const result = [];
  for (let i = 0; i < pageList.length; i += 5) {
    result.push(pageList.slice(i, i + 5));
  }
  return result;
};

const getCurrentPageGroup = (data, currentPage) => {
  const totalPagesGroup = getTotalPagesGroup(data);
  const result = totalPagesGroup.find(element => element.find(value => value === currentPage));
  return result;
};

const Pagination = ({ category }) => {
  const router = useRouter();
  const initialPage = parseInt(router.query.page, 10) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [currentPageGroup, setCurrentPageGroup] = useState(getCurrentPageGroup(data, currentPage));
  const [isFirstPageGroup, setIsFirstPageGroup] = useState(false);
  const [isLastPageGroup, setIsLastPageGroup] = useState(false);

  const totalPages = useMemo(() => getTotalPagesGroup(data), [data]);
  const firstPageGroup = totalPages[0];
  const firstPage = firstPageGroup[0];
  const lastPageGroup = totalPages[totalPages.length - 1];
  const lastPage = lastPageGroup[lastPageGroup.length - 1];
  
  const url = `/posts/total?category=${category}`;
  const { data, error, isLoading } = useFetch(url);
  
  useEffect(() => {
    if (firstPageGroup[0] === currentPageGroup[0]) {
      return setIsFirstPageGroup(true);
    }
    setIsFirstPageGroup(false);
  }, [currentPageGroup]);
  
  useEffect(() => {
    if (lastPageGroup[0] === currentPageGroup[0]) {
      return setIsLastPageGroup(true);
    }
    setIsLastPageGroup(false);
  }, [currentPageGroup]);
  
  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    console.error(error);
    return <div>로딩 실패</div>;
  }

  const onClickButton = (children) => (e) => {
    setCurrentPage(children);
    router.push(`${router.pathname}?page=${children}`);
  };

  const onClickFirstButton = () => {
    setCurrentPage(firstPage);
    setCurrentPageGroup(firstPageGroup);
    router.push(`${router.pathname}?page=${firstPage}`);
  };

  const onClickLastButton = () => {
    setCurrentPage(lastPage);
    setCurrentPageGroup(lastPageGroup);
    router.push(`${router.pathname}?page=${lastPage}`);
  };

  const onClickPrevArrow = (data) => {
    const startPage = currentPageGroup[0];
    const prevPageGroup = getCurrentPageGroup(data, startPage - 1);
    setCurrentPage(startPage - 1);
    setCurrentPageGroup(prevPageGroup);
    router.push(`${router.pathname}?page=${startPage - 1}`);
  };

  const onClickNextArrow = (data) => {
    const endPage = currentPageGroup[currentPageGroup.length - 1];
    const nextPageGroup = getCurrentPageGroup(data, endPage + 1);
    setCurrentPage(endPage + 1);
    setCurrentPageGroup(nextPageGroup);
    router.push(`${router.pathname}?page=${endPage + 1}`);
  };

  return (
    <Flex
      p={30}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex>
        {isFirstPageGroup ? "" : (
          <>
            <SideButton onClickButton={onClickFirstButton}>1</SideButton>
            <ArrowButton currentPage={currentPage} onClickButton={onClickPrevArrow}>
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
        {isLastPageGroup ? "" : (
          <>
            <ArrowButton currentPage={currentPage} onClickButton={onClickNextArrow}>
              <Icon
                as={IoIosArrowForward}
                color="gray.700"
                boxSize={3}
              />
            </ArrowButton>
            <SideButton onClickButton={onClickLastButton}>{lastPage}</SideButton>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Pagination;
