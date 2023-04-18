import React, {useState, useEffect} from "react";

//--웹서비스 호출 useEffect를 이용한 fetch사용

const Exam_Fetch2 = () => {


    const [todoList, setTodoList] = useState([]);


    //--https://jsonplaceholder.typicode.com/posts/
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: "GET"
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                // console.log(res.title);

                setTodoList(res);
        });
    }, []);

    const renderList = todoList.map(
            item => {
                return(
                    <div key={item.id}>
                        <div>{item.title}</div>
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

export default Exam_Fetch2;
