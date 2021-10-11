import React from 'react';
import { useRouter } from 'next/router';
import { Flex, HStack, Button, Icon } from '@chakra-ui/react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HamburgerIcon } from "@chakra-ui/icons";
import { categoryToUrl } from '../utils/categoryConverter';
import usePost from '../hooks/usePost';

const PostCardButton = ({ data }) => {
  const router = useRouter();
  const url = categoryToUrl(data.category);
  const {
    deletePost,
    movePost,
  } = usePost(data);

  return (
    <Flex
      direction={{ base: "row", lg: "column"}}
      justify="space-between"
    >
      <HStack mb={{ base: "0", lg: "15px" }}>
        <Button size="sm" onClick={movePost(data, 'prev')}>
          <Icon as={IoIosArrowBack} boxSize={3} />
        </Button>
        <Button size="sm" onClick={() => router.push(url)}>
          <Icon as={HamburgerIcon} boxSize={3} />
        </Button>
        <Button size="sm" onClick={movePost(data, 'next')}>
          <Icon as={IoIosArrowForward} boxSize={3} />
        </Button>
      </HStack>
      <HStack>
        <Button
          size="sm"
          onClick={() => router.push(`/edit?id=${data.id}`)}
        >
          수정
        </Button>
        <Button size="sm" variant="delete" onClick={deletePost}>삭제</Button>
      </HStack>
    </Flex>
  )
}

export default PostCardButton;
