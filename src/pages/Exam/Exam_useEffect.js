import React, {useState, useEffect} from "react";

//--별코딩 유투브참조
//--https://www.youtube.com/watch?v=kyodvzc5GHU
//--index.js 에서   <React.StrictMode> 삭제해야...한번더 실행되는 버그안생김.
const Exam_useEffect = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const handleCountUpdate = () => {
        setCount(count + 1);
    };

    const handleInputChange = (e) => {
        setName(e.target.value);
    };



    //--############################################################### useEffect
    //--최초실행(마운트) 한번만실행
    useEffect(() => {
        console.log("--최초 마운트 랜더링 --- : ");
    }, []);

    //--로딩이나 랜더링 될때 (컨트롤값변경시 useState변경시)마다 매번 실행됨.
    useEffect(() => {
        console.log(" 모든 랜더링시 ");
    });

    //--최초실행(마운트) + count값변경후 랜더링 될때 실행됨.
    useEffect(() => {
        console.log("count 랜더링 2 : " + count);
    }, [count]);

    //--최초실행(마운트) +  count값변경후 랜더링 될때 실행됨.
    useEffect(() => {
        console.log("name 랜더링 3 : " + count);
    }, [name]);


    useEffect( () => {
            console.log("name");
    },[])



    return (
        <div>
            <p>hello world</p>


            <button onClick={handleCountUpdate}>Update</button>
            <input type="text" value={name} onChange={handleInputChange}/>
            <p>count : {count}</p>

        </div>

    );
};

export default Exam_useEffect;
