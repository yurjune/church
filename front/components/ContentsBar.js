import React, { useEffect } from 'react';
import { Flex, Heading, Button, Box, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

const ContentsBar = ({ title, buttonList }) => {
  // const [isDeskTop, isTablet, isMobile] = useMediaQuery([
  //   "(min-width: 1024px)",
  //   "(min-width: 768px) and (max-width: 1023px)",
  //   "(max-width: 767px)",
  // ]);

  // useEffect(() => {
  //   console.log(isDeskTop, isTablet, isMobile);
  // }, [isDeskTop, isTablet, isMobile]);

  return (
    <>
      <Flex>
        <Flex h="80px" mt="20px" mb="20px" direction={{ base: "column", md: "row" }}>
          <Text fontSize="30px">{title}</Text>
          <Box ml="auto">
            {buttonList.map(item => <Button key={item} ml="10px">{item}</Button>)}
          </Box>
        </Flex>
      </Flex>
      {/* { isTablet &&
      <Flex>
        <Flex h="80px" mt="20px">
          <Text fontSize="30px">{title}</Text>
          <Box ml="auto">
            {buttonList.map(item => <Button key={item} mr="10px">{item}</Button>)}
          </Box>
        </Flex>
      </Flex>
      }
      { isMobile &&
      <Flex>
        <Flex h="80px" mt="20px" direction="column">
          <Text fontSize="30px">{title}</Text>
          <Box mt="20px">
            {buttonList.map(item => <Button key={item} mr="10px">{item}</Button>)}
          </Box>
        </Flex>
      </Flex>
      } */}
    </>
  );
};

export default ContentsBar;