import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
const useFindUser = ({ setAlert }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const findUser = async () => {
    let token = localStorage.getItem('token');
    try {
      if (!token) throw Error();
      token = JSON.parse(token);
    } catch (err) {
      if (
        location.state === undefined &&
        location.pathname !== '/' &&
        location.pathname !== '/login-guest' &&
        location.pathname !== '/register'
      ) {
        setAlert({
          type: 'error',
          msg: 'Не Сте Логирани!', // TODO change msg to err.message
        });
      }
      setIsLoading(false);
      return;
    }
    axios.defaults.headers.common['Authorization-token'] = token;
    await axios
      .get(`https://jsonplaceholdr.typicode.com/posts`)
      .then((res) => {
        setUser(res.data); // TODO CHECK THE OBJECT
        console.log(res);
      })
      .catch((err) => {
        if (
          location.state === undefined &&
          location.pathname !== '/' &&
          location.pathname !== '/login-guest' &&
          location.pathname !== '/register'
        ) {
          setAlert({
            type: 'error',
            msg: 'Не Сте Логирани!', // TODO change msg to err.message
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    findUser();
  }, []);

  return {
    user,
    setUser,
    isLoading,
  };
};

export default useFindUser;
