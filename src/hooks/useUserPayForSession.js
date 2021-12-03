import { useState, useContext } from 'react';
import axios from 'axios';
import { AccessoriesContext } from '../context/AccessoriesContext';
import { useHistory } from 'react-router-dom';

const useUserPayForSession = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { setAlert } = useContext(AccessoriesContext);
    const history = useHistory();
    const userPayForSession = async ({ method, paymentCredentials }) => {
        setIsLoading(true);
        await axios
            .post(`https://jsonplaceholder.typicode.com/posts`, {
                body: {
                    method,
                    paymentCredentials,
                },
            }) // TODO CHANGE OBJECT
            .then((res) => {
                setAlert({
                    type: 'success',
                    msg: `Успешно плаќање!`,
                });
                history.push('/maps');
            })
            .catch((err) => {
                // ALERT FOR ERROR WITH ERROR MSG
                setAlert({
                    type: 'error',
                    msg: 'Проблеми со серверот!', // TODO change msg to err.message
                });
                setIsLoading(false);
            });
    };

    return {
        userPayForSession,
        isLoading,
    };
};

export default useUserPayForSession;
