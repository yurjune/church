import React from 'react';
import Link from 'next/link';
import { Flex, Box, Button, HStack } from "@chakra-ui/react";

import NavItem from './NavItem';
import SearchBar from './SearchBar';

export const movieList = [
  '주일예배',
  '수요예배',
];
export const communityList = [
  '교회소식',
  '성경통독표',
  '오시는길',
];

const MiniHeader = () => {
  return (
    <Flex
      display={{ base: "flex", md: "none" }}
      width="100%"
      height="40px"
      justify="space-between"
      bgImage={"url('http://localhost:3060/pictures/연두배경.png')"}
      bgSize="contain"
    >
      <Box
        ml="10px"
        mr="20px"
        height="100%"
        lineHeight="40px"
        color="white"
      >
        <Box display={{ base: "none", sm: "block" }} >
          Didimdol Church
        </Box>
        <Box display={{ base: "block", sm: "none" }} >
          DidimdolCh
        </Box>
      </Box>
      <SearchBar />
    </Flex>
  );
};

const Header = () => {
  return (
    <>
      <Box
        display={{ base: "none", md: "block" }}
        width="100%"
        height="150px"
        bgImage={"url('http://localhost:3060/pictures/연두배경.png')"}
        bgSize="contain"
      >
        <Flex 
          maxW="960px"
          m="0 auto"
          height="100%"
          justify="flex-end"
          pos="relative"
        >
          <Box pos="absolute" top="5px">
            <SearchBar />
          </Box>
          <HStack
            pos="absolute"
            top="65px"
            fontFamily="Noto Sans KR"
            display={{ base: "none", md: "block" }}
          >
            <Button variant="menu">
              <Link href="/">디딤돌교회</Link>
            </Button>
            <NavItem title="예배와 말씀" menu={movieList}></NavItem>
            <NavItem title="커뮤니티" menu={communityList}></NavItem>
            <Button variant="menu">
              <Link href="/#">교회학교</Link>
            </Button>
          </HStack>
        </Flex>
      </Box>
      <MiniHeader />
    </>
  );
};

export default Header;
