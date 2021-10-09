import React from 'react';
import { useRouter } from 'next/router';

import ContentsPage from "../../../components/ContentsPage";

const Content = () => {
  const router = useRouter();
  const category = "주일예배";
  const { id } = router.query;

  return (
    <ContentsPage category={category} id={id} />
  );
};

export default Content;
