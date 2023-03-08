import React, {useState, useRef} from "react";


//--useRef 는 화명갱신없이..nextid.current 아이디 증가값 사용시 사용 (브라우저 refresh 까지 유지됨.)
//--useRef 인터벌시작, 정지에 사용 startCounter

const Exam_useRef = () => {


    const nextid = useRef(0);
    const [count, setCount] = useState(0);


    //--값변경은되나, 화면갱신은 안함. useState 는 값변경시 화명갱신됨.
    const increaseCount = () => {
        nextid.current += 1;
    };


    const startCounter = () => {
        stopCounter();

        //--1초에 한번씩
        nextid.current = setInterval(
            () => setCount(
                (count => count + 1)
                , 1000)
        );

        console.log("시작... : {nextid.current}");
    };

    const stopCounter = () => {

        clearInterval(nextid.current);
        console.log("정지... : ${nextid.current}");
    };


    return <div>

        <p>hello</p>
        <p>
            <button onClick={increaseCount}>increase 후 리프레시 안함.</button>
        </p>

        <p>
            <button onClick={startCounter}>startCounter</button>
        </p>
        <p>
            <button onClick={stopCounter}>stopCounter.</button>
        </p>

        <p>count :{count} </p>
        <p>nextid :{nextid.current} </p>

    </div>
};

export default Exam_useRef;
