import React from 'react';
import { Box, Flex, Text, Divider, Button, Icon, HStack } from '@chakra-ui/react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HamburgerIcon } from "@chakra-ui/icons";

const MovieCard = ({ data }) => {
  return (
    <>
      <Flex fontSize="17px" direction="column">
        <Box>
          <Text fontSize="30px">{data.category}</Text>
          <Divider mt="10px" mb="20px"></Divider>
          <Text ml="2px" mb="15px">제목: {data.title}</Text>
          <Text ml="2px" mb="15px">일시: {data.createdAt.substring(0, 10)}</Text>
          <Text ml="2px" mb="15px">작성자: {data.createdAt.substring(0, 10)}</Text>
          <Divider mt="10px" mb="20px"></Divider>
        </Box>
        <HStack>
          <Button size="sm">
            <Icon
              as={IoIosArrowBack}
              boxSize={3}
            />
          </Button>
          <Button size="sm">
            <Icon
              as={HamburgerIcon}
              boxSize={3}
            />
          </Button>
          <Button size="sm">
            <Icon
              as={IoIosArrowForward}
              boxSize={3}
            />
          </Button>
        </HStack>
      </Flex>
    </>
  );
};

export default MovieCard;
