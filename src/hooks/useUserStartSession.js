import { useContext } from 'react';
import axios from 'axios';
import { AccessoriesContext } from '../context/AccessoriesContext';
import { sessionStatus } from '../config/enums';

const useUserStartSession = () => {
    const { setAlert, setIsBackdropLoaderOpen } =
        useContext(AccessoriesContext);
    const userStartSession = async ({ sessionData, setSessionStatus }) => {
        setIsBackdropLoaderOpen(true);
        await axios
            .post(`https://jsonplaceholder.typicode.com/posts`, {
                body: sessionData,
            }) // TODO CHANGE OBJECT
            .then((res) => {
                setAlert({
                    type: 'success',
                    msg: `Успешно започната сесија!`,
                });
                setSessionStatus(sessionStatus.active);
            })
            .catch((err) => {
                // ALERT FOR ERROR WITH ERROR MSG
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
        userStartSession,
    };
};

export default useUserStartSession;
