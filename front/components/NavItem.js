import React, { useRef } from 'react';
import Link from 'next/link';
import { Flex, Box, Button, HStack, useDisclosure } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react"

const NavItem = ({ title, items }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btn = useRef();

  const onRef = (e) => {
    // console.dir(btn.current);
    if (!(e.pageY >= btn.current.offsetTop + btn.current.clientHeight)) {
      return onClose();
    }
  };

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
          {items.map(item => (
            <MenuItem key={item.name} _focus={{ bg: "second" }}>
              <Link href={item.href}>{item.name}</Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default NavItem;
