import React, { useEffect, useState, useMemo } from "react";
import { chakra, Flex, Icon } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter } from 'next/router';

import { PageButton, ArrowButton, FirstButton, LastButton } from './PageButton';
import useFetch from '../hooks/useFetch';
  
const getTotalPageGroup = (data) => {
  const totalPosts = data;
  const totalPages = Math.ceil(totalPosts / 12);
  const pageList = new Array(12).fill().map((value, index) => index + 1);
  const dividedPageList = [];
  for (let i = 0; i < pageList.length; i += 5) {
    dividedPageList.push(pageList.slice(i, i+5));
  }
  return dividedPageList;
};

const getPageGroup = (data, currentPage) => {
  const dividedPageList = getTotalPageGroup(data);
  const result = dividedPageList.find(element => element.find(value => value === currentPage));
  return result;
};

const Pagination = ({ category }) => {
  const router = useRouter();
  const initialPage = parseInt(router.query.page, 10) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageGroup, setPageGroup] = useState(getPageGroup(data, currentPage));
  
  const url = `/posts/total?category=${category}`;
  const { data, error, isLoading } = useFetch(url);
  
  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);
  
  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    console.error(error);
    return <div>로딩 실패</div>;
  }

  const onClickButton = (children) => (e) => {
    router.push(`${router.pathname}?page=${children}`);
    setCurrentPage(children);
  };

  const onClickPrevArrow = (data) => {
    const firstPage = pageGroup[0];
    const prevPageGroup = getPageGroup(data, firstPage - 1);
    if (!prevPageGroup) {
      return alert('첫번째입니다.');
    }
    setCurrentPage(firstPage - 1);
    router.push(`${router.pathname}?page=${firstPage - 1}`);
    setPageGroup(prevPageGroup);
  };

  const onClickNextArrow = (data) => {
    const lastPage = pageGroup[pageGroup.length - 1];
    const nextPageGroup = getPageGroup(data, lastPage + 1);
    if (!nextPageGroup) {
      return alert('마지막입니다.');
    }
    setCurrentPage(lastPage + 1);
    router.push(`${router.pathname}?page=${lastPage + 1}`);
    setPageGroup(nextPageGroup);
  };

  const onClickFirstButton = () => {
    const firstPageGroup = getTotalPageGroup(data)[0];
    const firstPage = firstPageGroup[0];
    if (currentPage === firstPage) {
      return;
    }
    setCurrentPage(firstPage);
    router.push(`${router.pathname}?page=${firstPage}`);
    setPageGroup(firstPageGroup);
  };

  const onClickLastButton = () => {
    const total = getTotalPageGroup(data);
    const lastPageGroup = total[total.length - 1]
    const lastPage = lastPageGroup[lastPageGroup.length - 1];
    if (currentPage === lastPage) {
      return;
    }
    setCurrentPage(lastPage);
    router.push(`${router.pathname}?page=${lastPage}`);
    setPageGroup(lastPageGroup);
  };

  return (
    <Flex
      p={30}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex>
        <FirstButton onClickButton={onClickFirstButton}></FirstButton>
        <ArrowButton currentPage={currentPage} onClickButton={onClickPrevArrow}>
          <Icon
            as={IoIosArrowBack}
            color="gray.700"
            boxSize={3}
          />
        </ArrowButton>
        {pageGroup.map(value => (
          <PageButton
            key={value}
            currentPage={currentPage}
            onClickButton={onClickButton}
          >
            {value}
          </PageButton>
        ))}
        {/* <DotButton></DotButton> */}
        <ArrowButton currentPage={currentPage} onClickButton={onClickNextArrow}>
          <Icon
            as={IoIosArrowForward}
            color="gray.700"
            boxSize={3}
          />
        </ArrowButton>
        <LastButton onClickButton={onClickLastButton}></LastButton>
      </Flex>
    </Flex>
  );
};

export default Pagination;
