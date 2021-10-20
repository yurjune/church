import React from 'react';
import Link from 'next/link';
import { Flex, Box, Image } from "@chakra-ui/react";

import SearchBar from './SearchBar';
import Navigation from './Navigation';
import PopoverNav from './PopoverNav';
import { layoutWidth } from './AppLayout';

export const menuList = [
  '디딤돌교회',
  '예배와 말씀',
  '커뮤니티',
  '교회학교'
];
export const movieList = [
  '주일예배',
  '수요예배',
];
export const communityList = [
  '교회소식',
  '성경통독표',
  '오시는길',
];
export const schoolList = [
  '주일학교',
  '중고등부',
  '청년부',
];

const MobileHeader = ({ header }) => {
  return (
    <Flex
      display={{ base: "flex", md: "none" }}
      width="100%"
      height="40px"
      justify="space-between"
      bgImage={`url('https:${header}')`}
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

const DesktopHeader = ({ header, logo }) => {
  return (
    <Box
      display={{ base: "none", md: "block" }}
      width="100%"
      height="150px"
      bgImage={`url('https:${header}')`}
      bgSize="contain"
    >
      <Flex 
        pos="relative"
        maxW={layoutWidth}
        m="0 auto"
        height="100%"
        justify="flex-end"
        fontFamily="Noto Sans KR"
      >
        <Box pos="absolute" top="5px">
          <SearchBar />
        </Box>
        <Box pos="absolute" bottom="50px">
          <Navigation />
          {/* <PopoverNav /> */}
        </Box>
        <Box pos="absolute" left="10px" bottom="50px">
          <Image
            src={`https:${logo}`}
            width="95px"
            height="70px"
          />
        </Box>
      </Flex>
    </Box>
  );
};

const Header = ({ pictures }) => {
  const header = pictures.find(item => item.fields.picture.fields.title === "header")
    .fields.picture.fields.file.url;
  const logo = pictures.find(item => item.fields.picture.fields.title === "로고")
    .fields.picture.fields.file.url;
  return (
    <>
      <MobileHeader header={header} />
      <DesktopHeader header={header} logo={logo} />
    </>
  )
}

export default Header;
