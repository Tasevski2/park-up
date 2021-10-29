import { useState, useContext } from 'react';
import axios from 'axios';
import { AccessoriesContext } from '../context/AccessoriesContext';

const useCreateZone = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setAlert } = useContext(AccessoriesContext);

  const createZone = async ({
    zoneName,
    setModalInput,
    setModalOpen,
    addNewZoneToData,
  }) => {
    setIsLoading(true);
    await axios
      .post(`https://jsonplaceholder.typicode.com/posts`, { body: zoneName }) // TODO CHANGE OBJECT
      .then((res) => {
        setAlert({
          type: 'success',
          msg: `Зоната ${zoneName} е успешно креирана!`,
        });
        setModalOpen(false);
        setModalInput('');
        // addNewZoneToData(res.data); TODO UNCOMMENT WHEN YOU HAVE THE REAL DATA
        addNewZoneToData({
          id: 6,
          zoneName,
          responsiblePersons: [],
          parkingSpacesNumber: 0,
          takenParkingSpaces: 0,
        }); // ONLY FOR MOCK
      })
      .catch((err) => {
        // ALERT FOR ERROR WITH ERROR MSG
        setAlert({
          type: 'error',
          msg: 'Проблеми со серверот!', // TODO change msg to err.message
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    createZone,
    isLoading,
  };
};

export default useCreateZone;
