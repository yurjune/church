import React, { useRef } from 'react';
import Link from 'next/link';
import { Button, useDisclosure } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import { categoryToUrl } from '../utils/categoryConverter';

const NavItem = ({ title, menu }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btn = useRef();

  // const onRef = (e) => {
  //   // console.dir(btn.current);
  //   if (!(e.pageY >= btn.current.offsetTop + btn.current.clientHeight)) {
  //     return onClose();
  //   }
  // };

  return (
    <>
      <Menu
        isOpen={isOpen}
        gutter="0"
        autoSelect="false"
      >
        <MenuButton
          as={Button}
          variant="menu"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          ref={btn}
          // onMouseLeave={onRef}
        >
          {title}
        </MenuButton>
        <MenuList
          width="10px"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          transition={{}}
        >
          {menu.map(item => (
            <MenuItem key={item} _focus={{ bg: "second" }}>
              <Link href={categoryToUrl(item)}>{item}</Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default NavItem;
