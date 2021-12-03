import { useContext } from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';
import { AccessoriesContext } from '../context/AccessoriesContext';
import { UserContext } from '../context/UserContext';

const useLogin = () => {
  const { setAlert, setIsBackdropLoaderOpen } = useContext(AccessoriesContext);
  const { setUser } = useContext(UserContext);
  const loginUser = async ({ email, password }) => {
    setIsBackdropLoaderOpen(true);
    await axios
      .post(`https://jsonplaceholder.typicode.com/posts`, { email, password })
      .then((res) => {
        // TODO DECODE JWT AND SET USER
        // const token = res.data.token;
        // const user = jwt(token);
        // axios.defaults.headers.common['Authorization-token']=token;
        // localStorage.setItem('token', JSON.stringify(token));
        // setUser(user);

        setUser({
          firstName: 'Виктор',
          lastName: 'Тасевски', //   TOOD DELETE THIS THIS IS FOR MOCKING
          role: 'ROLE_ADMIN',
          id: 2
        });
      })
      .catch((err) => {
        setAlert({
          type: 'error',
          msg: 'Проблеми со серверот!', // TODO change msg to err.message
        });
      })
      .finally(() => {
        setIsBackdropLoaderOpen(false);
      });
  };
  return {
    loginUser,
  };
};

export default useLogin;
