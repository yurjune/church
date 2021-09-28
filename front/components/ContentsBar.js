import React, { useEffect } from 'react';
import { Flex, Heading, Button, Box, HStack, GridItem, Divider } from "@chakra-ui/react";

const ContentsBar = ({ title, buttonList }) => {
  return (
    <>
      <GridItem colStart={2} colEnd={3} rowStart={2} rowEnd={3}>
        <Flex
          mt="40px"
          mb="20px"
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
        >
          <Heading fontSize="35px">{title}</Heading>
          <HStack ml={{ base: "0", sm: "auto"}}>
            {buttonList.map(item => <Button key={item}>{item}</Button>)}
          </HStack>
        </Flex>
        <Divider mt="20px" mb="30px"></Divider>
      </GridItem>
    </>
  );
};

export default ContentsBar;