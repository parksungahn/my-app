import React, {useEffect, useState} from "react";


//useState 는 값변경시 화명갱신됨.

const Exam_useEffect = () => {
    const [num, setNumber] = useState(0);
    const [num2, setNumber2] = useState(0);


    //--폼로딩시 한번
    useEffect(() => {
        setNumber2(num2+1);
        alert(num2);
    },[]);


    //--num 값이 변경될때만 호출
    useEffect(() => {
        setNumber2(num2+1);
    },[num]);

    const increase = () => {
        setNumber(num+1);
    };

    return (
        <div>
            <button onClick={increase}>+1</button>
            <p>num : {num}</p>
            <p>num2 : {num2}</p>
        </div>
    )
}

export default Exam_useEffect;
