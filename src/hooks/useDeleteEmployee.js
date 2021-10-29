import { useContext } from 'react';
import axios from 'axios';
import { AccessoriesContext } from '../context/AccessoriesContext';
import { useHistory } from 'react-router-dom';

const useDeleteEmployee = () => {
  const { setAlert, setIsBackdropLoaderOpen } = useContext(AccessoriesContext);
  const history = useHistory();
  const deleteEmployee = async ({ id }) => {
    setIsBackdropLoaderOpen(true);
    await axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`) // TODO CHANGE OBJECT
      .then((res) => {
        setAlert({
          type: 'success',
          msg: `Вработениот е успешно избришан!`, // TODO Change MSG - add the first and last name of the deleted emoloyee
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
    deleteEmployee,
  };
};

export default useDeleteEmployee;
