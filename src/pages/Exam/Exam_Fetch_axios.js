import React, {useState, useEffect} from "react";
import axios from 'axios';

//useState 는 값변경시 화명갱신됨.

const Exam_Fetch_axios = () => {


    const [todoList, setTodoList] = useState([]);


    //--https://jsonplaceholder.typicode.com/posts/
    //--https://jsonplaceholder.typicode.com/photos
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts/', {
    //         method: "GET"
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             console.log(res);
    //             // console.log(res.title);

    //             setTodoList(res);
    //     });
    // }, []);

    //--axios call
    useEffect(() => {
            const url = "https://jsonplaceholder.typicode.com/posts/";
            axios.get(url)
            .then(response => {
                setTodoList(response.data);
                console.log("성공");
            })
            .catch(error =>  {
                console.log("실패");
            });

            return (
                <div></div>
            );
    }, []);


    const renderList = todoList.map(
            item => {
                return(
                    <div key={item.id}>
                        <div>{item.title}</div>
                        <div><img width="100px" height="100px"  src={item.thumbnailUrl}/></div>
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
