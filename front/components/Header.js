import React, { useState } from 'react';
import Link from 'next/link';
import { Flex, Box, Button, HStack } from "@chakra-ui/react";
import "@fontsource/noto-serif-kr";

import NavItem from './NavItem';

const Header = () => {
  const movieItems = [
    {name: "주일예배", href: "/movies/sunday"},
    {name: "수요예배", href: "#"},
  ];
  const communityItems = [
    {name: "교회소식", href: "/community/news"},
    {name: "성경통독표", href: "#"},
    {name: "오시는길", href: "/community/map"},
  ];

  return (
    <Box w="100%" height="180px" bgImage={"url('http://localhost:3060/banner.jpg')"}>
      <Flex maxW="960px" m="0 auto" height="180px" justify="flex-end" align="center">
        <HStack fontFamily="Noto Sans KR" display={{ base: "none", md: "block" }}>
          <Button variant="menu"><Link href="/main">디딤돌교회</Link></Button>
          <NavItem title="예배와 말씀" items={movieItems}></NavItem>
          <NavItem title="커뮤니티" items={communityItems}></NavItem>
          <Button variant="menu"><Link href="/#">교회학교</Link></Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
