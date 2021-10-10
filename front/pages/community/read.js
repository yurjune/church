import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';

import SimplePage from '../../components/SimplePage';

const Read = () => {
  return (
    <SimplePage title="성경통독표">
      <Image src="http://localhost:3060/pictures/하반기_성경통독.jpg"></Image>
    </SimplePage>
  );
};

export default Read;
