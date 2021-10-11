import React from 'react';
import { useRouter } from 'next/router';
import AppLayout from '../../../components/AppLayout';
import Content from "../../../components/Content";

const Wednesday = () => {
  const router = useRouter();
  const category = "수요예배";
  const { id } = router.query;

  return (
    <AppLayout>
      <Content category={category} id={id} />
    </AppLayout>
  );
};

export default Wednesday;
