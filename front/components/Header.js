import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Box w={960} m="0 auto" mb="10" h={180} bg="tomato" pos="relative" fontSize="23">
        <Box>
          <List pos="absolute" right="3" bottom="14" color="#fff">
            <ListItem float="left" ml="10">
              <NextLink href="/main">
                <Link as="text" textDecoration="none">
                  디딤돌교회
                </Link>
              </NextLink>
            </ListItem>
            <ListItem float="left" ml="10">
              <NextLink href="/movies/sunday">
                <Link as="text" textDecoration="none">
                  설교영상
                </Link>
              </NextLink>
            </ListItem>
            <ListItem float="left" ml="10">
              <NextLink href="/community/news">
                <Link as="text" textDecoration="none">
                  커뮤니티
                </Link>
              </NextLink>
            </ListItem>
            <ListItem float="left" ml="10">
              <NextLink href="/map">
                <Link as="text" textDecoration="none">
                  오시는길
                </Link>
              </NextLink>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default Header;