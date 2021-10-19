import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

export const postNumberPerOnePage = 12;

const getTotalPages = (articles) => {
  const totalPosts = articles.length;
  const totalPages = Math.ceil(totalPosts / postNumberPerOnePage);
  const pageList = new Array(totalPages).fill().map((value, index) => index + 1);
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

const usePagination = (articles) => {
  const router = useRouter();
  const initialPage = parseInt(router.query.page, 10) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = useMemo(() => getTotalPages(articles), [articles]);
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

  return {
    currentPage,
    setCurrentPage,
    currentPageGroup,
    firstPageGroup,
    lastPageGroup,
    firstPage,
    lastPage,
  }
};

export default usePagination;
