import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import useInput from '../hooks/useInput';
import { categoryToContents } from '../utils/categoryConverter';

axios.defaults.baseURL = 'http://localhost:3060';
axios.defaults.withCredentials = true;

const useWrite = () => {
  const [title, onChangeTitle, setTitle] = useInput('');
  const [content, setContent] = useState('');
  const [imageFiles, setImageFiles] = useState([]);
  const [thumbnail, setThumbnail] = useState('');
  const router = useRouter();
  const categories = ['주일예배', '수요예배', '교회소식'];

  useEffect(() => {
    console.log(imageFiles);
  }, [imageFiles]);

  const onClickWrite = async () => {
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
      const post = result.data;
      return router.push(`${categoryToContents(post.category)}/${post.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickEdit = async () => {
    try {
      if (!title) {
        return alert("제목을 입력해 주세요!");
      }
      const selected = document.getElementById('select-category');
      const selectedCategory = selected.options[selected.selectedIndex].value;
      if (!selectedCategory) {
        return alert("카테고리를 선택해 주세요!");
      }
      const result = await axios.patch(`/post/${router.query.id}`, {
        userId: 1,
        title,
        category: selectedCategory,
        content,
        image: imageFiles,
        thumbnail,
      });
      const post = result.data;
      return router.push(`${categoryToContents(post.category)}/${post.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeThumbnail = async (e) => {
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

  return {
    title,
    onChangeTitle,
    setTitle,
    content,
    setContent,
    imageFiles,
    setImageFiles,
    thumbnail,
    setThumbnail,
    categories,
    onClickWrite,
    onClickEdit,
    onChangeThumbnail,
  };
};

export default useWrite;
