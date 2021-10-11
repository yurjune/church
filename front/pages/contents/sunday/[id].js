import React from 'react';
import { useRouter } from 'next/router';
import AppLayout from '../../../components/AppLayout';
import ContentPage from "../../../components/ContentPage";

const Sunday = () => {
  const router = useRouter();
  const category = "주일예배";
  const { id } = router.query;

  return (
    <AppLayout>
      <ContentPage category={category} id={id} />
    </AppLayout>
  );
};

export default Sunday;
