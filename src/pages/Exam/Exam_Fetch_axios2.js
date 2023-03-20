import React, {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";

//useState 는 값변경시 화명갱신됨.

const Exam_Fetch_axios2 = () => {


    // const [todoList, setTodoList] = useState([]);

    const [data, setData] = useState ([]);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        let unmounted = false;
        let source = axios.CancelToken.source();
        axios.get('https://jsonplaceholder.typicode.com/photos/', {
            cancelToken: source.token,
            timeout: 5000
        })
            .then(response => {
                if (!unmounted) {
                    // @ts-ignore
                    setData(response.data);
                    setLoading(false);
                }
            }).catch(function (e) {
            if (!unmounted) {
                setError(true);
                setErrorMessage(e.message);
                setLoading(false);
                if (axios.isCancel(e)) {
                    console.log(`request cancelled:${e.message}`);
                } else {
                    console.log("another error happened:" + e.message);
                }
            }
        });

        //--이창을 떠날때..Cleanup
        return function () {
            unmounted = true;
            source.cancel("Cancelling in cleanup");
        };
    }, []);


    const renderList = data.map(
        item => {
            return (
                <div key={item.id}>
                    <div>{item.id}  <img width="50px" height="50px" src={item.thumbnailUrl}/> {item.title}</div>
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

export default Exam_Fetch_axios2;
