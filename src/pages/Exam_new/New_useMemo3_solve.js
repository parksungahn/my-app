import React, {useEffect, useMemo, useState} from "react";

//--------------Number나, location 변경시..오브젝트변수는 동일하게 인식해서 렌더링안됨. O
//--별코딩(useMemo제대로 사용하) 참조 https://www.youtube.com/watch?v=e-CnI8Q5RY4기
const New_useMemo3_solve = () => {

    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    // const location = {
    //     country: isKorea ? '한국' : '외국',
    // };

    //---------------------------------------------- location 정보 변경될때만호출
    const location = useMemo(() => {
        return {country: isKorea ? '한국' : '외국',};
    }, [isKorea]);

    //--오브젝트변수로...동일값으로 인식됨 , location 을 위에서  useMemo 로 생성해서..가능
    //--Test number값 변경시 location 변경되는지 확인용
    useEffect(() => {
        console.log('useEffect location 호출');
    },[location]);
    //---------------------------------------------- location 정보 변경될때만호출

    return(
        <div>
            <span>--------------Number나, location 변경시..오브젝트변수는 동일하게 인식해서 렌더링안됨. O --------------</span>

            <h3>하루에 몇끼 먹어요?</h3>
            <input
                type="number"
                value={number}
                onChange={(e) => {setNumber(parseInt(e.target.value))}}
                />
            <hr/>
            <h3>어느 나라에 있어요?</h3>
            <p>나라: {location.country}</p>
           <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
        </div>
    );
};


export default New_useMemo3_solve;
