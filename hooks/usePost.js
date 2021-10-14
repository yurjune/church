import { useRouter } from 'next/router';
import axios from 'axios';
import { categoryToUrl } from '../utils/categoryConverter';

axios.defaults.baseURL = 'http://localhost:3060';
axios.defaults.withCredentials = true;

const usePost = (data) => {
  const router = useRouter();
  const url = categoryToUrl(data.category);

  const deletePost = async () => {
    try {
      const isDelete = confirm('정말로 삭제하시겠습니까?');
      if (isDelete) {
        await axios.delete(`/post/${data.id}`);
        alert('게시글이 삭제되었습니다!');
        return router.push(url);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const movePost = (data, go) => async (e) => {
    const prev = go;
    const url = `/post/${prev}?category=${data.category}&id=${data.id}`;
    const result = await axios.get(url);
    const cardData = result.data;
    return router.push(`${cardData.id}`);
  };

  return {
    deletePost,
    movePost,
  }
};

export default usePost;