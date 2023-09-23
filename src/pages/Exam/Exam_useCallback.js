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

    //-------------------------------------------------------------------- 한셋트로...설정
    //--버튼클릭시, 여기 호출되고, Rendering 안일어남.
    //--number 값이 변경될때..출력
    const someFunction = useCallback(() => {
        console.log(`someFunc: number2: ${number}`);
        return;
    }, [number]);


    //--loading 시 한번탐, number 값변경시마다 호출되고, Rendering 일어남
    useEffect( () => {
        console.log(`someFunction이 변경되었습니다: number: ${number}`);
    }, [someFunction])
    //-------------------------------------------------------------------- 한셋트로...설정



    console.log(`Rendering...`);

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
