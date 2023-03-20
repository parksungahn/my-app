import React, {useEffect, useState} from "react";
import { getApi, postApi} from '../api/http';
//CancelToken 사용

const Exam_Fetch_axios_api = () => {


    // const [todoList, setTodoList] = useState([]);

    const [data, setData] = useState ([]);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        let unmounted = false;
             getApi(`https://jsonplaceholder.typicode.com/photos/`)
            .then(response => {
                if (!unmounted) {
                    // @ts-ignore
                    setData(response.data);
                    setLoading(false);
                }
            });
    }, []);


    const renderList = data.map(
        item => {
            return (
                <div key={item.id}>
                    <div><img width="50px" height="50px" src={item.thumbnailUrl}/> {item.title}</div>
                </div>
            );
        }
    );


    return (
        <div>
            <div>{renderList}</div>
        </div>
    );
};

export default Exam_Fetch_axios_api;
