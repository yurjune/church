import React from 'react';
import {
  Flex, Heading, Input, Button, FormControl,
  useColorMode, useColorModeValue,
} from '@chakra-ui/react'

import useInput from '../hooks/useInput';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3060';
axios.defaults.withCredentials = true;

const LogIn = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onClickLogIn = async () => {
    try {
      // axios.post('/')
    } catch (error) {
      return console.error(error);
    }
  };

  return (
    <>
      <Flex h="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" bg={formBackground} p={12} rounded={6}>
          <Heading mb={6} textAlign="center">Log In</Heading>
          <Input placeholder="id" variant="filled" mb={3} type="text" value={id} onChange={onChangeId} />
          <Input placeholder="password" variant="filled" mb={6} type="password" value={password} onChange={onChangePassword} />
          <Button mb={6} onClick={onClickLogIn}>Log In</Button>
          <Button onClick={toggleColorMode}>toggleColorMode</Button>
        </Flex>
      </Flex>
    </>
  );
};

export default LogIn;
