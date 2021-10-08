import React from 'react';
import { useRouter } from 'next/router';
import { Flex, HStack, Button, Icon } from '@chakra-ui/react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HamburgerIcon } from "@chakra-ui/icons";

const MovieCardButton = ({ data, deletePost, movePost }) => {
  const router = useRouter();

  return (
    <Flex
      direction={{ base: "row", lg: "column"}}
      justify="space-between"
    >
      <HStack mb={{ base: "0", lg: "15px" }}>
        <Button size="sm" onClick={movePost(data, 'prev')}>
          <Icon as={IoIosArrowBack} boxSize={3} />
        </Button>
        <Button size="sm" onClick={() => router.push('/movies/sunday')}>
          <Icon as={HamburgerIcon} boxSize={3} />
        </Button>
        <Button size="sm" onClick={movePost(data, 'next')}>
          <Icon as={IoIosArrowForward} boxSize={3} />
        </Button>
      </HStack>
      <HStack>
        <Button size="sm" variant="modify">수정</Button>
        <Button size="sm" variant="delete" onClick={deletePost}>삭제</Button>
      </HStack>
    </Flex>
  )
}

export default MovieCardButton;
