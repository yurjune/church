import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/button';

const WriteButton = () => {
  const router = useRouter();
  const onClickWrite = (e) => {
    e.preventDefault()
    router.push('/write');
  };

  return (
    <Button 
      variant="main"
      size="cs"
      onClick={onClickWrite}
    >
      글쓰기
    </Button>
  );
};

export default WriteButton;
