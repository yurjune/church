import React from 'react';
import { Box, Input, Button, Select, Flex } from "@chakra-ui/react";

import QuillEditor from './QuillEditor';
import AppLayout from '../components/AppLayout';
import useWrite from '../hooks/useWrite';

const EditPost = ({ data }) => {
  const {
    title,
    onChangeTitle,
    setTitle,
    setContent,
    setImageFiles,
    categories,
    onClickEdit,
    onChangeThumbnail,
  } = useWrite();

  return (
    <AppLayout>
      <Box mt="20px">
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
          <Input type="file" size="sm" mb="10px" onChange={onChangeThumbnail} />
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
        <QuillEditor
          data={data}
          isEdit={true}
          setTitle={setTitle}
          setContent={setContent}
          setImageFiles={setImageFiles}
        />
        <Button variant="modify" m="10px 0 50px 0" float="right" onClick={onClickEdit}>
          수정
        </Button>
      </Box>
    </AppLayout>
  );
};

export default EditPost;
