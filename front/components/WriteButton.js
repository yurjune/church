import React from 'react';
import { useRouter } from 'next/router';
import { Button, HStack } from '@chakra-ui/react';

const WriteButton = () => {
  const router = useRouter();
  const onClickWrite = (e) => {
    e.preventDefault()
    router.push('/write');
  };

  return (
    <HStack>
      <Button 
        variant="main"
        size="cs"
        onClick={onClickWrite}
      >
        글쓰기
      </Button>
    </HStack>
  );
};

export default WriteButton;
