import { useState } from 'react';

const useForm = (editData) => {
  const [data, setData] = useState({ ...editData });

  const onFormChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return {
    data,
    onFormChange,
  };
};

export default useForm;
