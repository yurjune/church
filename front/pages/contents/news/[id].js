import React from 'react';
import { useRouter } from 'next/router';
import AppLayout from '../../../components/AppLayout';
import ContentPage from "../../../components/ContentPage";

const News = () => {
  const router = useRouter();
  const category = "교회소식";
  const { id } = router.query;

  return (
    <AppLayout>
      <ContentPage category={category} id={id} />
    </AppLayout>
  );
};

export default News;
