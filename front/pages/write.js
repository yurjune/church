import React, { useState, useRef, useEffect } from 'react';
import {
  FormControl, Input, Button, Select, Flex
} from "@chakra-ui/react";
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
  const [thumbnail, setThumbnail] = useState('');
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
        thumbnail,
      });
      console.log(result);
      router.push(`contents/${convertedCategory[result.data.category]}/${result.data.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeImage = async (e) => {
    try {
      console.log('e.target.files:', e.target.files);
      const formData = new FormData();
      [].forEach.call(e.target.files, (f) => {
        formData.append('image', f);
      });
      const result = await axios.post('/post/thumbnail', formData);
      setThumbnail(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AppLayout>
        <FormControl mt="20px">
          <Flex>
            <Select
              w="240px"
              m="0 10px 10px 0"
              id="select-category"
              placeholder="카테고리"
              size="sm"
              isRequired
            >
              {categories.map((item, index) => <option key={item + index} value={item}>{item}</option>)}
            </Select>
            <Input ref={fileRef} type="file" size="sm" mb="10px" onChange={onChangeImage} />
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
          <Button variant="main" m="10px 0 50px 0" float="right" onClick={onSubmit}>제출</Button>
        </FormControl>
      </AppLayout>
    </>
  );
};

export default Write;