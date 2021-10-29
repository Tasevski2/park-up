import { useState, useContext } from 'react';
import axios from 'axios';
import { AccessoriesContext } from '../context/AccessoriesContext';

const useDeleteSession = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setAlert } = useContext(AccessoriesContext);

  const deleteSession = async ({ id, onDeleteSession }) => {
    setIsLoading(true);
    console.log(`DELETE SESSION STARTED ${id}`);
    await axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`) // TODO CHANGE OBJECT
      .then((res) => {
        setAlert({
          type: 'success',
          msg: `Сесијата е успешно избришана!`, //
        });
        console.log(`DELETE SESSION ENDED ${id}`);

        onDeleteSession({ id });
      })
      .catch((err) => {
        // ALERT FOR ERROR WITH ERROR MSG
        setAlert({
          type: 'error',
          msg: 'Проблеми со серверот!', // TODO change msg to err.message
        });
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    deleteSession,
    isLoading,
  };
};

export default useDeleteSession;
