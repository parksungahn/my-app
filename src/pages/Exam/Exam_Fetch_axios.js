import React, {useState, useEffect} from "react";
import axios from 'axios';

//AbortController 사용

const Exam_Fetch_axios = () => {
    //--https://jsonplaceholder.typicode.com/posts/
    //--https://jsonplaceholder.typicode.com/photos

    const [todoList, setTodoList] = useState([]);


    useEffect(() => {
        const controller = new AbortController();
        axios.get('https://jsonplaceholder.typicode.com/posts/', {
            signal: controller.signal
        }).then(function (response) {
            setTodoList(response.data);
            console.log("성공");
        })
            .catch(error => {
                console.log("실패");
            });


        //--이창을 떠날때..Cleanup
        return () => {
            controller.abort();
        };
    }, []);


    const renderList = todoList.map(
        item => {
            return (
                <div key={item.id}>
                    <div>{item.id}   {item.title}</div>
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

export default Exam_Fetch_axios;
