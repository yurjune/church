import React, { useState } from 'react';
import NextLink from 'next/link';
import { Flex, Box, Image, Button, GridItem } from "@chakra-ui/react";

const Header = () => {
  const navItem = [
    {name: "디딤돌교회", href: "/main"},
    {name: "설교영상", href: "/movies/sunday"},
    {name: "커뮤니티", href: "/community/news"},
    {name: "오시는길", href: "/map"},
  ];

  return (
    <>
      <GridItem colStart={2} colEnd={3} rowStart={1} rowEnd={2} h="180px" bg="#3CB371">
        <Flex h="180px" justify="flex-end" align="center">
          {navItem.map(item => (
            <Box key={item.name} fontSize="22px" color="#fff" pl="30px">
              <NextLink href={item.href}>
                <a>{item.name}</a>
              </NextLink>
            </Box>
          ))}
        </Flex>
      </GridItem>
    </>
  );
};

export default Header;