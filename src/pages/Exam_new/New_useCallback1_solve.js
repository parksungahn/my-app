import React, {useCallback, useEffect, useState} from "react";

//-------------함수만들어사용시, 중복렌더링 방지 O
//--별코딩(useCallback 짱 쉬운 강의) 참조 https://www.youtube.com/watch?v=XfUF9qLa3mU

const New_useCallback1_solve = () => {

    const [number, setNumber] = useState(0);

    //--의존성 배열에 number 를 해줘야., 값이 변경되면..함수를 다시 생성해야함.
    const someFunction = useCallback(() => {
        console.log(`someFunct: number : ${number}`);
        return;
    },[number]);

    useEffect(() => {
        console.log('someFunction이 변경되었습니다.');
    }, [someFunction]);

    return(
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <span>--------------number변경시 다른함수도 호출됨,  함수만들어사용시, 중복렌더링 방지. O --------------</span>
            <p/>
            <input
                type="number"
                value={number}
                onChange={(e) => {setNumber(parseInt(e.target.value))}}
                />
            <br/>
            <button onClick={someFunction}>Call someFunction</button>
        </div>
    );
};


export default New_useCallback1_solve;
