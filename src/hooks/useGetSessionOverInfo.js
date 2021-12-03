import { useState } from 'react';
import axios from 'axios';

const useGetSessionOverInfo = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [totalTime, setTotalTime] = useState('');
    const [totalPrice, setTotalPrice] = useState(null);

    const convertMinutesAndSetTotalTime = (min) => {
        let days = Math.floor(min / 1440);
        let hours = Math.floor((min - days * 1440) / 60);
        let minutes = Math.floor(min - (days * 1440 + hours * 60));
        let daysString = days
            ? days > 1
                ? `${days} денови`
                : `${days} ден`
            : '';
        let hoursString = hours
            ? hours > 1
                ? `${hours} часови`
                : `${hours} час`
            : '';
        let minutesString = minutes
            ? minutes > 1
                ? `${minutes} минути`
                : `${minutes} минута`
            : '';

        setTotalTime(`${daysString} ${hoursString} ${minutesString}`.trim());
    };

    const getSessionInfoOver = async () => {
        setIsLoading(true);
        await axios
            .get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then((res) => {
                // setTimeAndSessionPrice({totalTime: res.data.totalTime, totalPrice: res.data.totalPrice});
                setTotalPrice(90);
                convertMinutesAndSetTotalTime(143);
            })
            .catch((err) => {
                // setAlert({
                //     type: 'error',
                //     msg: 'Проблеми со серверот!', // TODO change msg to err.message
                // });
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return {
        getSessionInfoOver,
        isLoading,
        totalTime,
        totalPrice,
    };
};

export default useGetSessionOverInfo;
