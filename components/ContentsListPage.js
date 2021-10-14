import React from 'react';
import { useRouter } from 'next/router';

import useFetch from '../hooks/useFetch';
import ContentsList from './ContentsList';

const ContentsListPage = ({ category, article }) => {


  return (
    <ContentsList
      category={category}
      article={article}
    ></ContentsList>
  );
};

export default ContentsListPage;
