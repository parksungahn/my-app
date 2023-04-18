import React, {useEffect, useState, useCallback} from 'react';

//--useCallback 함수
//--일반함수 사용시, 다른컨트롤로 값변경시 리프레시되서 호출되는 문제를 방지용
//--number 값이 수정없이, 토글버튼만 클릭해도..number값이 변경되는 오류 방지
const Exam_useCallback = () => {

    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(true);


    // const someFunction = () => {
    //
    //     console.log(`someFunc: number: ${number}`);
    //     return;
    // };

    const someFunction = useCallback(() => {
        console.log(`someFunc: number2: ${number}`);
        return;
    }, [number]);




    useEffect( () => {
        console.log(`someFunction이 변경되었습니다: number: ${number}`);
    }, [someFunction])



    return (
          <div>
              <input type="number" value={number}
                     onChange={(e)=> setNumber(e.target.value)}
                     />
              <br/>

              <button onClick={ () => setToggle(!toggle)}>{toggle.toString()}</button>
              <button onClick={someFunction}>Call someFunc</button>
          </div>
    );
};

export default Exam_useCallback;