import { useState, useContext } from 'react';
import axios from 'axios';
import { AccessoriesContext } from '../context/AccessoriesContext';

const useActivateSession = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setAlert } = useContext(AccessoriesContext);

  const activateSession = async ({
    id,
    parkingSpaceNumber,
    onActivateSession,
  }) => {
    setIsLoading(true);
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        id,
        parkingSpaceNumber,
      })
      .then((res) => {
        // res.data is the new updated active zone
        setAlert({
          type: 'success',
          msg: 'Сесијата е успешно активирана!',
        });
        onActivateSession({ id, parkingSpaceNumber });
      })
      .catch((err) => {
        setAlert({
          type: 'error',
          msg: 'Проблеми со серверот!',
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return {
    activateSession,
    isLoading,
  };
};

export default useActivateSession;
