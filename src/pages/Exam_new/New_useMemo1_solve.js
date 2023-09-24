import React, {useMemo, useState} from "react";

//--------------쉬운계산기 호출시 쉬운계산기만 호출되게 수정
//--별코딩(useMemo제대로 사용하기) 참조 https://www.youtube.com/watch?v=e-CnI8Q5RY4

const hardCalculate = (number) => {
    console.log('어려운 계산기----------------');
    for (let i = 0; i <999999999; i++) {}
        return number + 10000;
};

const easyCalculate = (number) => {
    console.log('쉬운 계산기');
    return number+1;
}

const New_useMemo1_solve = () => {

    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    //const hardSum = hardCalculate(hardNumber);
    const hardSum = useMemo(() => {
        return hardCalculate(hardNumber);
    }, [hardNumber]);

    const easySum = easyCalculate(easyNumber)

    return(
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <span>--------------쉬운계산기 호출시 쉬운계산기만 호출되게 수정 (어려운계산기만 격리)--------------</span>
            <h3>어려운 계산기</h3>
            <input
                type="number"
                value={hardNumber}
                onChange={(e) => {setHardNumber(parseInt(e.target.value))}}
                />
            <span> + 10000 = {hardSum}</span>
            <hr/>
            <h3>쉬운 계산기</h3>
            <input
                type="number"
                value={easyNumber}
                onChange={(e) => {setEasyNumber(parseInt(e.target.value))}}
            />
            <span> + 10000 = {easySum}</span>
        </div>
    );
};


export default New_useMemo1_solve;
