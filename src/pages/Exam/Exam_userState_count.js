import React, {useState} from "react";


//useState 는 값변경시 화명갱신됨.

const Exam_userState_count = () => {
    const [num, setNumber] = useState(0);
    const increase = () => {
        setNumber(num+1);
    };

    const decrease = () => {

        setNumber(num-1);

        if(num<1)
        {
            setNumber(0);
        }
    };
    
    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    )
}

export default Exam_userState_count;
