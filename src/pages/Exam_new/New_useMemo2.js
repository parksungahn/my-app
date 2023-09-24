import React, {useEffect, useState} from "react";

//--------------Number나, location 변경시..영향안받음..(일반변수)
//--별코딩(useMemo제대로 사용하) 참조 https://www.youtube.com/watch?v=e-CnI8Q5RY4기
const New_useMemo2 = () => {


    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    const location = isKorea ? '한국' : '외국';

    //--Test number값 변경시 location 변경되는지 확인용
    useEffect(() => {
        console.log('useEffect location 호출');
    },[location]);

    return(
        <div>
            <span>--------------Number나, location 변경시..영향안받음..(일반변수)--------------</span>

            <h3>하루에 몇끼 먹어요?</h3>
            <input
                type="number"
                value={number}
                onChange={(e) => {setNumber(parseInt(e.target.value))}}
                />
            <hr/>
            <h3>어느 나라에 있어요?</h3>
            <p>나라: {location}</p>
           <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
        </div>
    );
};


export default New_useMemo2;
