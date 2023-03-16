import React, {useState, useEffect} from "react";


//useState 는 값변경시 화명갱신됨.

const Exam_Fetch2 = () => {


    const [todoList, setTodoList] = useState(
        {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"
    });

    const onClickCall = () => {


    };

    // useEffect( () =>
    //     {
    //         fetch('https://jsonplaceholder.typicode.com/comments`)
    //             .then((response) => response.json())
    //             .then((date) => setTodoList(date)
    //             ));
    //     }, []
    // );

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1"', {
            method: "GET"
        })
            .then(res => res.json())
            .then(res => {
                console.log(1, res);

                setTodoList(res);
        });
    }, []);


    useEffect(() => {
        console.log(todoList.title);
    }, [todoList]);

    return (
        <div>
            <button onClick={onClickCall}>호출</button>

        </div>
    )
}

export default Exam_Fetch2;
