import React from 'react';
import { useRouter } from 'next/router';
import AppLayout from '../../../components/AppLayout';
import ContentPage from "../../../components/ContentPage";

const Wednesday = () => {
  const router = useRouter();
  const category = "수요예배";
  const { id } = router.query;

  return (
    <AppLayout>
      <ContentPage category={category} id={id} />
    </AppLayout>
  );
};

export default Wednesday;
