import React from 'react';
import { Image } from '@chakra-ui/react';
import SimplePage from '../../components/SimplePage';
import AppLayout from '../../components/AppLayout';

const Read = () => {
  return (
    <>
      <AppLayout>
        <SimplePage title="성경통독표">
          <Image src="http://localhost:3060/pictures/하반기_성경통독.jpg"></Image>
        </SimplePage>
      </AppLayout>
    </>
  );
};

export default Read;
