import React from "react";
import { chakra, Flex, useColorModeValue, Icon } from "@chakra-ui/react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter } from 'next/router'

const Ma = () => {
  const router = useRouter();
  const onClickButton = (children) => (e) => {
    console.log(router);
    router.push(`${router.pathname}?page=${children}`);
  };

  const PagButton = (props) => {
    const activeStyle = {
      bg: useColorModeValue("first", "brand.500"),
      color: useColorModeValue("white", "gray.200"),
    };
    return (
      <chakra.button
        mx={1}
        px={3}
        py={1}
        rounded="md"
        bg={useColorModeValue("#81c147", "gray.800")}
        color={useColorModeValue("gray.700", "gray.200")}
        opacity={props.disabled && 0.6}
        _hover={!props.disabled && activeStyle}
        cursor={props.disabled && "not-allowed"}
        {...(props.active && activeStyle)}
        onClick={onClickButton(props.children)}
      >
        {props.children}
      </chakra.button>
    );
  };
  return (
    <Flex
      p={30}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex>
        <PagButton>
          <Icon
            as={IoIosArrowBack}
            color={useColorModeValue("gray.700", "gray.200")}
            boxSize={3}
          />
        </PagButton>
        <PagButton>1</PagButton>
        <PagButton active>2</PagButton>
        <PagButton>3</PagButton>
        <PagButton>4</PagButton>
        <PagButton>5</PagButton>
        <PagButton>
          <Icon
            as={IoIosArrowForward}
            color={useColorModeValue("gray.700", "gray.200")}
            boxSize={3}
          />
        </PagButton>
      </Flex>
    </Flex>
  );
};

export default Ma;
