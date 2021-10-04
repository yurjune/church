import React, { useEffect, useState } from "react";
import { chakra } from "@chakra-ui/react";

const activeStyle = {
  bg: "first",
  color: "white",
};

export const PageButton = (props) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    props.currentPage === props.children ? setIsActive(true) : setIsActive(false);
    console.log(isActive);
  }, [props.currentPage]);

  return (
    <chakra.button
      mx={1}
      px={3}
      py={1}
      rounded="md"
      bg="second"
      color="gray.700"
      opacity={props.disabled && 0.6}
      _hover={!props.disabled && activeStyle}
      cursor={props.disabled && "not-allowed"}
      {...(isActive && activeStyle)}
      onClick={props.onClickButton(props.children)}
    >
      {props.children}
    </chakra.button>
  );
};

export const ArrowButton = (props) => {
  return (
    <chakra.button
      mx={1}
      px={3}
      py={1}
      rounded="md"
      bg="second"
      color="gray.700"
      opacity={props.disabled && 0.6}
      _hover={!props.disabled && activeStyle}
      cursor={props.disabled && "not-allowed"}
      onClick={props.onClickButton}
    >
      {props.children}
    </chakra.button>
  );
};

export const FirstButton = (props) => {
  return (
    <chakra.button
      mx={1}
      px={3}
      py={1}
      rounded="md"
      bg="second"
      color="gray.700"
      opacity={props.disabled && 0.6}
      _hover={!props.disabled && activeStyle}
      cursor={props.disabled && "not-allowed"}
      onClick={props.onClickButton}
    >
      처음
    </chakra.button>
  );
};

export const LastButton = (props) => {
  return (
    <chakra.button
      mx={1}
      px={3}
      py={1}
      rounded="md"
      bg="second"
      color="gray.700"
      opacity={props.disabled && 0.6}
      _hover={!props.disabled && activeStyle}
      cursor={props.disabled && "not-allowed"}
      onClick={props.onClickButton}
    >
      끝
    </chakra.button>
  );
};