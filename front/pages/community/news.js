import React from 'react';
import { Flex } from '@chakra-ui/react';

import AppLayout from '../../components/AppLayout';
import Section from '../../components/Section';
import Aside from '../../components/Aside';

const News = () => {
  return (
    <AppLayout>
      <Flex mt="20px">
        <Aside></Aside>
        <Section></Section>
      </Flex>
    </AppLayout>
  );
};

export default News;