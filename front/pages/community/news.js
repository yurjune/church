import { Flex } from '@chakra-ui/react';
import React from 'react';
import AppLayout from '../../components/AppLayout';
import MainContent from '../../components/MainContent';
import Sidebar from '../../components/SideBar';

const News = () => {
  return (
    <AppLayout>
      <Flex>
        <Sidebar></Sidebar>
        <MainContent></MainContent>
      </Flex>
    </AppLayout>
  );
};

export default News;