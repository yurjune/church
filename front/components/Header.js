import React, { useState } from 'react';
import Link from 'next/link';
import { Flex, Box, Image, Button, GridItem, Text } from "@chakra-ui/react";

const Header = () => {
  const navItems = [
    {name: "디딤돌교회", href: "/main"},
    {name: "설교영상", href: "/movies/sunday"},
    {name: "커뮤니티", href: "/community/news"},
    {name: "오시는길", href: "/map"},
  ];

  const dropDownMenu = [
    {name: "설교영상", menus: ['주일예배', '수요예배']},
    {name: "커뮤니티", menus: ['교회소식', '성경통독표']}
  ];

  return (
    <>
      <GridItem
        colStart={1} 
        colEnd={4} 
        rowStart={1} 
        rowEnd={2} 
        height="180px" 
        bgColor="first"
        bgImage={"url('http://localhost:3060/banner.jpg')"}
      >
        <Box maxW="960px" m="0 auto">
          <Flex height="180px" justify="flex-end" align="center">
            {navItems.map(item => (
              <Box
                key={item.name}
                fontSize="22px"
                color="#ffffff"
                pl="50px"
                role="group"
              >
                <Flex
                  py="15px"
                  cursor="pointer"
                  textAlign="center"
                  direction="column"
                  pos="relative"
                  _groupHover={{ borderTop: "4px solid #392f31" }}
                  // transition="2s"
                >
                  <Link href={item.href}><a>{item.name}</a></Link>
                  {dropDownMenu.map(dropDownItem => dropDownItem.name === item.name
                    ? (
                      dropDownItem.menus.map(menu => (
                      <Box
                        width="150%"
                        fontSize="15px"
                        bgColor="#392f31"
                        padding="10px"
                        display="none"
                        _groupHover={{ display: "block" }}
                        top="90%"
                        pos="absolute"
                      >
                        {menu}
                      </Box>
                    ))
                    )
                    : ''
                  )}
                </Flex>
              </Box>
            ))}
          </Flex>
        </Box>
      </GridItem>
    </>
  );
};

export default Header;