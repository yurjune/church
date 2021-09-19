import React from 'react';
import {
  FormControl, Input, Textarea, Button,
} from "@chakra-ui/react"
import axios from 'axios';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';

axios.defaults.baseURL = 'http://localhost:3060';
axios.defaults.withCredentials = true;

const Write = () => {
  let [title, onChangeTitle] = useInput('');
  let [text, onChangeText] = useInput('');

  const onSubmit = async () => {
    try {
      if (!title) {
        return alert("제목을 입력해 주세요!");
      }
      if (!text) {
        return alert("본문을 입력해 주세요!");
      }
      const result = await axios.post('/post', {
        title: title,
        content: text,
        id: 1,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AppLayout>
        <FormControl>
          <Input
            type="text"
            value={title}
            onChange={onChangeTitle}
            placeholder="제목을 입력해 주세요"
            borderRadius="2px"
            size="sm"
            mb="15px"
            isRequired
          />
        </FormControl>
        <Textarea
          h="500px"
          value={text}
          onChange={onChangeText}
          placeholder="본문을 입력해 주세요"
          size="sm"
          mb="10px"
        />
        <Button mb="50px" float="right" onClick={onSubmit}>제출</Button>
      </AppLayout>
    </>
  );
};

export default Write;