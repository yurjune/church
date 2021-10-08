import React, { useState } from 'react';
import Link from 'next/link';
import { Flex, Box, Button, HStack } from "@chakra-ui/react";
import "@fontsource/noto-sans-kr";

import NavItem from './NavItem';

const movieList = [
  '주일예배',
  '수요예배',
];
const communityList = [
  '교회소식',
  '성경통독표',
  '오시는길',
];

const Header = () => {
  return (
    <Box
      w="100%"
      height="150px"
      // bgColor="first"
      bgImage={"url('http://localhost:3060/연두배경.png')"}
      bgSize="contain"
    >
      <Flex maxW="960px" m="0 auto" height="150px" justify="flex-end" align="center">
        <HStack fontFamily="Noto Sans KR" display={{ base: "none", md: "block" }}>
          <Button variant="menu"><Link href="/">디딤돌교회</Link></Button>
          <NavItem title="예배와 말씀" menu={movieList}></NavItem>
          <NavItem title="커뮤니티" menu={communityList}></NavItem>
          <Button variant="menu"><Link href="/#">교회학교</Link></Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
