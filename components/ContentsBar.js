import React from 'react';
import { Flex, Heading, Button, Box, HStack, Divider } from "@chakra-ui/react";

const ContentsBar = ({ category, buttonList }) => {
  return (
    <Box>
      <Flex
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
      >
        <Heading as="h2" size="lg">{category}</Heading>
        <HStack mt={{ base: "20px", sm: "0" }}>
          {buttonList.map(item => (
            <Button key={item} variant="main" size="cs">{item}</Button>
          ))}
        </HStack>
      </Flex>
      <Divider mt="20px" />
    </Box>
  );
};

export default ContentsBar;