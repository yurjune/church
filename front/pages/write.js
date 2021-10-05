import React, { useState, useRef, useEffect } from 'react';
import {
  FormControl, Input, Textarea, Button, Select, Flex, Box, Image,
} from "@chakra-ui/react"
import axios from 'axios';
import { useRouter } from 'next/router';

import Editor from '../components/Editor';
import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';

axios.defaults.baseURL = 'http://localhost:3060';
axios.defaults.withCredentials = true;

const Write = () => {
  const [title, onChangeTitle] = useInput('');
  const [content, setContent] = useState('');
  const [imageFiles, setImageFiles] = useState([]);
  const fileRef = useRef();
  const router = useRouter();

  const categories = ['주일예배', '수요예배', ];
  const convertedCategory = {
    '주일예배': 'sunday',
    '수요예배': 'wednesday',
  };

  useEffect(() => {
    console.log(imageFiles);
  }, [imageFiles]);

  const onSubmit = async () => {
    try {
      if (!title) {
        return alert("제목을 입력해 주세요!");
      }
      const selected = document.getElementById('select-category');
      const selectedCategory = selected.options[selected.selectedIndex].value;
      if (!selectedCategory) {
        return alert("카테고리를 선택해 주세요!");
      }
      const result = await axios.post('/post', {
        id: 1,
        title,
        category: selectedCategory,
        content,
        image: imageFiles,
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
        <FormControl mt="40px">
          <Flex>
            <Select
              w="240px"
              mr="10px"
              mb="10px"
              id="select-category"
              placeholder="카테고리"
              size="sm"
              isRequired
            >
              {categories.map((item, index) => <option key={item + index} value={item}>{item}</option>)}
            </Select>
            <Input ref={fileRef} type="file" size="sm" mb="10px" />
          </Flex>
          <Input
            mb="10px"
            size="sm"
            type="text"
            value={title}
            onChange={onChangeTitle}
            placeholder="제목을 입력해 주세요"
            isRequired
          />
          <Editor
            setContent={setContent}
            setImageFiles={setImageFiles}
          />
          <Button mb="50px" float="right" onClick={onSubmit}>제출</Button>
        </FormControl>
      </AppLayout>
    </>
  );
};

export default Write;