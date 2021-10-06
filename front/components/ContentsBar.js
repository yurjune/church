import React, { useEffect } from 'react';
import { Flex, Heading, Button, Box, HStack, GridItem, Divider } from "@chakra-ui/react";

const ContentsBar = ({ title, buttonList }) => {
  return (
    <>
      <GridItem colStart={2} colEnd={3} rowStart={2} rowEnd={3}>
        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
        >
          <Heading as="h2" size="lg">{title}</Heading>
          <HStack mt={{ base: "20px", sm: "0" }}>
            {buttonList.map(item => <Button key={item} variant="main">{item}</Button>)}
          </HStack>
        </Flex>
        <Divider mt="20px" mb="30px"></Divider>
      </GridItem>
    </>
  );
};

export default ContentsBar;