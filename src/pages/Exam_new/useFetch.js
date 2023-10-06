import {useEffect, useState} from "react";


const useFetch = (baseURL, initType) => {
    const [data, setData] = useState(null);

    const fetchURL = (type) => {
        fetch(baseURL + "/" + type)
            .then((res) => res.json())
            .then((res) => setData(res));
    };

    useEffect(() => {
        fetchURL(initType);
    }, []);

    return {
        data,
    };
}

export default useFetch;
