import React, { useState } from 'react';
import Link from 'next/link';
import { Flex, Box, Image, Button, GridItem, Tab } from "@chakra-ui/react";

const Header = () => {
  const navItem = [
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
      <GridItem colStart={2} colEnd={3} rowStart={1} rowEnd={2} height="180px" bg="#3CB371">
        <Flex height="180px" justify="flex-end" align="center">
          {navItem.map(item => (
            <Box
              key={item.name}
              fontSize="22px"
              color="#fff"
              pl="50px"
              role="group"
            >
              <Box 
                _groupHover={{ borderTop: "4px solid #C73DA3", py: "0"}}
              >
              </Box>
              <Flex
                py="15px"
                cursor="pointer"
                textAlign="center"
                direction="column"
                pos="relative"
                // transition="2s"
              >
                <Link href={item.href}><a>{item.name}</a></Link>
                {dropDownMenu.map(dropDownItem => dropDownItem.name === item.name
                  ? (
                    dropDownItem.menus.map(menu => (
                    <Box
                      width="150%"
                      fontSize="15px"
                      bgColor="#C73DA3"
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
      </GridItem>
    </>
  );
};

export default Header;