import React from "react";
import {
  chakra,
  Box,
  Flex,
  Button,
  HStack,
} from "@chakra-ui/react";
import { layoutWidth } from "./AppLayout";
import { categoryToUrl } from "../utils/categoryConverter";

const newWidth = layoutWidth * 2 / 3;

function Introduction({ pictures }){
  const background = pictures.find(item => item.fields.title === "소개배경")
    .fields.picture.fields.file.url;

  return (
    <Flex
      w="100%"
      py={{ base: "40px", md: "70px" }}
      px="16px"
      mx="auto"
      fontFamily="Gowun Dodum"
      bgImage={`url("http:${background}")`}
      backgroundPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Box w={newWidth} mx="auto" textAlign="center">
        <chakra.h1
          mb={8}
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          lineHeight="shorter"
          color="gray.900"
          lineHeight="150%"
        >
          "너희가 서로 사랑하면 이로써 모든 사람이 너희가 내 제자인 줄 알리라"<br/> (요 13:15)
        </chakra.h1>
        <chakra.p
          mb={5}
          // color="gray.500"
          fontSize={{ md: "lg" }}
          lineHeight="160%"
        >
          <strong>성경중심: 하나님 말씀이 가치관과 삶의 중심이 되는 교회<br/></strong>
          Church where God's Word becomes the center of values and life<br/><br/>

          <strong>이웃사랑: 나의 이웃과 성도 간에 사랑이 넘치는 교회<br/></strong>
          Church full of love between my neighbor and the saints<br/><br/>

          <strong>만인제사장: 모든 성도가 하나님을 섬기고 경배드리는 교회<br/></strong>
          Church where all saints serve and worship God<br/><br/>
        </chakra.p>
        <HStack
          justify="center"
        >
          <Button
            as="a"
            href="#worship-time"
            colorScheme="brand"
            size="lg"
            cursor="pointer"
          >
            예배안내
          </Button>
          <Button
            as="a"
            href={categoryToUrl('오시는길')}
            size="lg"
            cursor="pointer"
          >
            오시는길
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Introduction;
