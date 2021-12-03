import { useContext } from 'react';
import axios from 'axios';
import { AccessoriesContext } from '../context/AccessoriesContext';

const useSaveUserPlate = () => {
    const { setAlert } = useContext(AccessoriesContext);
    const saveUserPlate = async ({
        savePlate,
        plate,
        setIsLoadingSavePlate,
    }) => {
        setIsLoadingSavePlate(true);
        await axios
            .post(`https://jsonplaceholder.typicode.com/posts`, {
                body: plate,
            }) // TODO CHANGE OBJECT
            .then((res) => {
                setAlert({
                    type: 'success',
                    msg: `Таблицата е успешно додадена!`,
                });
                savePlate(plate); // or res.plate
            })
            .catch((err) => {
                // ALERT FOR ERROR WITH ERROR MSG
                setAlert({
                    type: 'error',
                    msg: 'Проблеми со серверот!', // TODO change msg to err.message
                });
            })
            .finally(() => {
                setIsLoadingSavePlate(false);
            });
    };

    return {
        saveUserPlate,
    };
};

export default useSaveUserPlate;
