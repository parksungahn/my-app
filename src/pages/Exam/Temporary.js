import React, {useEffect, useState} from 'react';
import axios from "axios";


const Temporary = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let unmounted = false;
        let source = axios.CancelToken.source();
        axios.get('https://jsonplaceholder.typicode.com/posts/', {
            cancelToken: source.token,
            timeout: 5000
        })
            .then(response => {
                if (!unmounted) {
                    // @ts-ignore
                    // console.log(response.data);
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
        items=>{
            return (
                <div key={items.id}>
                    <p>{items.title}</p>
                </div>
            );
        }
    );



    return (
        <div>hi sanpark

            <p>{renderList}</p>
        </div>
    );
};


export default Temporary;
