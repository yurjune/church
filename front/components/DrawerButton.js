import React, { useState } from 'react';
import { Box, Button, useDisclosure, IconButton, Input } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import DrawerAccordian from './DrawerAccordian';

const DrawerButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box display={{ base: "block", md: "none" }}>
      <IconButton
        bg="none"
        color="white"
        _focus="none"
        icon={<FiMenu />}
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            py="9px"
            bg="second"
            fontWeight="normal"
          >
            Didimdol Church
          </DrawerHeader>
          <DrawerBody
            pt="0"
          >
            <DrawerAccordian></DrawerAccordian>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default DrawerButton;
