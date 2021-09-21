import React from 'react';
import NextLink from 'next/link';
import { Flex, Box } from "@chakra-ui/react";

const Header = () => {
  const navItem = [
    {name: "디딤돌교회", href: "/main"},
    {name: "설교영상", href: "/movies/sunday"},
    {name: "커뮤니티", href: "/community/news"},
    {name: "오시는길", href: "/map"},
  ];
  return (
    <>
      <Flex w="100%" h="180px" mb="20px" bg="blue.400">
        <Flex m="80px 0 0 450px">
          {navItem.map(item => (
            <Flex fontSize="22px" color="#fff" pl="30px">
              <NextLink href={item.href}><a>{item.name}</a></NextLink>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default Header;