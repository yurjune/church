import React, { useRef } from 'react';
import { Box, Input, Button, Select, Flex } from "@chakra-ui/react";
import useWrite from '../hooks/useWrite';
import QuillEditor from './QuillEditor';

const EditPost = ({ data }) => {
  const thumbnailRef = useRef();
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
        <Input
          mb="10px"
          size="sm"
          type="file"
          onChange={onChangeThumbnail}
          ref={thumbnailRef}
        />
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
        thumbnailRef={thumbnailRef}
      />
      <Button
        m="10px 0 50px 0"
        variant="modify"
        size="cs"
        float="right"
        onClick={onClickEdit}
      >
        수정
      </Button>
    </Box>
  );
};

export default EditPost;
