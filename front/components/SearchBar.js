import React, { useState } from 'react';
import { Button, Input, IconButton, HStack, useDisclosure } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';

import DrawerButton from './DrawerButton';

export default function SearchBar() {
  return (
    <HStack mr="8px">
      <Input
        size="sm"
        variant="filled"
        placeholder="검색"
        _hover={{ bgColor: "none" }}
        _focus={{ bgColor: "none" }}
      />
      <IconButton
        w="32px"
        h="32px"
        bg="none"
        color="white"
        _focus="none"
        icon={<SearchIcon />}
      />
      <DrawerButton></DrawerButton>
    </HStack>
  );
}
