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
  }, [props.currentPage]);

  return (
    <chakra.button
      mx={1}
      px={2}
      py={1}
      rounded="md"
      bg="second"
      color="gray.700"
      _hover={activeStyle}
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
      px={2}
      py={1}
      rounded="md"
      bg="second"
      color="gray.700"
      _hover={activeStyle}
      onClick={props.onClickButton}
    >
      {props.children}
    </chakra.button>
  );
};
