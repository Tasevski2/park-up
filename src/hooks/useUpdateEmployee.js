import { useContext } from 'react';
import axios from 'axios';
import { AccessoriesContext } from '../context/AccessoriesContext';
import { useHistory } from 'react-router-dom';

const useUpdateEmployee = () => {
  const { setAlert, setIsBackdropLoaderOpen } = useContext(AccessoriesContext);
  const history = useHistory();
  const updateEmployee = async ({ employee }) => {
    setIsBackdropLoaderOpen(true);
    await axios
      .put(`https://jsonplaceholder.typicode.com/posts/1`, { body: employee }) // TODO CHANGE OBJECT
      .then((res) => {
        setAlert({
          type: 'success',
          msg: `Вработениот ${employee.firstName} ${employee.lastName} е успешно изменет!`,
        });
        history.push('/employees');
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
        setIsBackdropLoaderOpen(false);
      });
  };

  return {
    updateEmployee,
  };
};

export default useUpdateEmployee;
