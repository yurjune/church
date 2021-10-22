import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Button,
  HStack,
} from "@chakra-ui/react";
import { layoutWidth } from "./AppLayout";

const newWidth = layoutWidth * 2 / 3;

function Heros(){
  return (
    <Flex px={4} py={10} mx="auto">
      <Box w="full" mx="auto" w={newWidth}>
        <chakra.p
          mb={2}
          fontSize="sm"
          // fontWeight="semibold"
          letterSpacing="wide"
          color="gray.400"
          textTransform="uppercase"
        >
          디딤돌교회 안내
        </chakra.p>
        <chakra.h1
          mb={3}
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          lineHeight="shorter"
          color="gray.900"
          lineHeight="150%"
        >
          너희가 서로 사랑하면 이로써 모든 사람이<br/> 너희가 내 제자인 줄 알리라 (요 13:15)
        </chakra.h1>
        <chakra.p
          mb={5}
          color="gray.500"
          fontSize={{ md: "lg" }}
          lineHeight="160%"
        >
          디딤돌교회는 예수님을 모르는 분들에게 복음을 전하려 세워진 교회입니다<br/>
          : 말씀중심, 이웃사랑(&복음), 만인제사장(만찬예배중심)<br/>
          이미 신앙생활을 잘하고 계시는 분들께서는 자신을 더 필요로 하는 교회에서 섬기실 것을 부탁드립니다
        </chakra.p>
        <HStack>
          <Button
            as="a"
            w={{ base: "full", sm: "auto" }}
            variant="solid"
            colorScheme="brand"
            size="lg"
            mb={{ base: 2, sm: 0 }}
            cursor="pointer"
          >
            Sign up for free
          </Button>
          <Button
            as="a"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
          >
            Read our blog
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Heros;
