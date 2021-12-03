import { useState, useContext } from 'react';
import axios from 'axios';
import { AccessoriesContext } from '../context/AccessoriesContext';

const useGetUserPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { setAlert } = useContext(AccessoriesContext);

    const getUserPassword = async ({ id, setPassword }) => {
        await axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                setPassword('Smeni go'); // TODO CHANGE IT TO RES.PASSWORD OR SOMETHING
            })
            .catch((err) => {
                setAlert({
                    type: 'error',
                    msg: 'Проблеми со серверот!', // TODO change msg to err.message
                });
            })
            .finally(() => {
              setIsLoading(false);
            })
    };

    return {
      getUserPassword,
      isLoading
    }
};


export default useGetUserPassword;