import React from 'react';
import { useRouter } from 'next/router';
import AppLayout from '../../../components/AppLayout';
import Content from "../../../components/Content";

const Sunday = () => {
  const router = useRouter();
  const category = "주일예배";
  const { id } = router.query;

  return (
    <AppLayout>
      <Content category={category} id={id} />
    </AppLayout>
  );
};

export default Sunday;
