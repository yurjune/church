import React from 'react';
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

  return (
    <>
      <Menu
        // isOpen={isOpen}
        // role="group"
      >
        <MenuButton
          as={Button}
          variant="menu"
          // _groupHover={onOpen}
          // onMouseEnter={onOpen}
          // onMouseLeave={onClose}
        >
          {title}
        </MenuButton>
        <MenuList>
          {items.map(item => <MenuItem><Link href={item.href}>{item.name}</Link></MenuItem>)}
        </MenuList>
      </Menu>
    </>
  );
};

export default NavItem;
