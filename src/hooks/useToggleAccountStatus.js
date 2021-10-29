import { useState, useContext } from 'react';
import axios from 'axios';
import { AccessoriesContext } from '../context/AccessoriesContext';

const useToggleAccountStatus = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setAlert } = useContext(AccessoriesContext);

  const toggleAccountStatus = async ({ id, changeAccoutStatusOnEmployee }) => {
    setIsLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        changeAccoutStatusOnEmployee({ id });
        setAlert({
          type: 'success',
          msg: 'Успешно е променет статусот на акаунтот!', // TODO change msg to err.message
        });
      })
      .catch((err) => {
        setAlert({
          type: 'error',
          msg: 'Проблеми со серверот!', // TODO change msg to err.message
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return {
    toggleAccountStatus,
    isLoading,
  };
};

export default useToggleAccountStatus;
