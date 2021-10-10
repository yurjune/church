import axios from 'axios';
import useInput from './useInput';

axios.defaults.baseURL = 'http://localhost:3060';
axios.defaults.withCredentials = true;

const useForm = (url) => {
  const [value, onChangeValue] = useInput('');

  const onSubmit = async () => {
    const result = await axios.post(url, {
      value,
    });
    return result.data;
  };

  return {
    value,
    onChangeValue,
    onSubmit,
  }
};

export default useForm;
