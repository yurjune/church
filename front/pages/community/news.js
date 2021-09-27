import React from 'react';
import { Flex } from '@chakra-ui/react';

import AppLayout from '../../components/AppLayout';
import MainContent from '../../components/MainContent';
import Sidebar from '../../components/SideBar';

const News = () => {
  return (
    <AppLayout>
      <Flex mt="20px">
        <Sidebar></Sidebar>
        <MainContent></MainContent>
      </Flex>
    </AppLayout>
  );
};

export default News;