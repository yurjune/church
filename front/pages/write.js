import React from 'react';
import {
  FormControl, Input, Textarea, Button, Select, Flex
} from "@chakra-ui/react"
import axios from 'axios';
import { useRouter } from 'next/router'

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';

axios.defaults.baseURL = 'http://localhost:3060';
axios.defaults.withCredentials = true;

const Write = () => {
  const [title, onChangeTitle] = useInput('');
  const [text, onChangeText] = useInput('');

  const categories = ['주일예배', '수요예배', '추천도서'];
  const convertedCategory = {
    '주일예배': 'sunday',
    '수요예배': 'wednesday',
    '추천도서': 'books',
  };
  
  const router = useRouter();

  const onSubmit = async () => {
    try {
      if (!title) {
        return alert("제목을 입력해 주세요!");
      }
      if (!text) {
        return alert("본문을 입력해 주세요!");
      }
      const selected = document.getElementById('select-category');
      const selectedCategory = selected.options[selected.selectedIndex].value; // 상태로 안해도 되나?
      const result = await axios.post('/post', {
        title: title,
        category: selectedCategory,
        content: text,
        id: 1,
      });
      console.log(result);
      router.push(`contents/${convertedCategory[result.data.category]}/${result.data.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AppLayout>
        <FormControl>
          <Flex>
            <Select
              id="select-category"
              placeholder="카테고리"
              w="180px"
              size="sm"
              mb="10px"
              isRequired
            >
              {categories.map((item, index) => <option key={item + index} value={item}>{item}</option>)}
            </Select>
            <Input
              display="inline"
              type="file"
              multiple
              w="480px"
              size="sm"
              mb="10px"
              />
          </Flex>
          <Input
            type="text"
            value={title}
            onChange={onChangeTitle}
            placeholder="제목을 입력해 주세요"
            borderRadius="2px"
            size="sm"
            mb="10px"
            isRequired
          />
          <Textarea
            value={text}
            onChange={onChangeText}
            placeholder="본문을 입력해 주세요"
            h="500px"
            size="sm"
            mb="10px"
            />
          <Button mb="50px" float="right" onClick={onSubmit}>제출</Button>
        </FormControl>
      </AppLayout>
    </>
  );
};

export default Write;