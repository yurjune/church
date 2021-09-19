import React from 'react';
import { Box, Heading, Stack, Button, SimpleGrid } from "@chakra-ui/react";

const ContentsBar = ({ title, btn1, btn2, btn3 }) => {
  return (
    <>
      <Box h="80px" mb="30px">
        <Heading as="h1" size="xl" isTruncated>{title}</Heading>
          <Stack direction="row" float="right">
            <Button>{btn1}</Button>
            <Button>{btn2}</Button>
            <Button>{btn3}</Button>
          </Stack>
      </Box>
    </>
  );
};

export default ContentsBar;