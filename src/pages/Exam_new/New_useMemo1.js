import React, {useState} from "react";

//--------------쉬운계산기, 어려운계산기 호출할때마다.. 둘다 호출됨.
//--별코딩(useMemo제대로 사용하) 참조 https://www.youtube.com/watch?v=e-CnI8Q5RY4기

const hardCalculate = (number) => {
    console.log('어려운 계산기----------------');
    for (let i = 0; i <999999999; i++) {}
        return number + 10000;
};

const easyCalculate = (number) => {
    console.log('쉬운 계산기');
    return number+1;
}

const New_useMemo1 = () => {

    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);


    const hardSum = hardCalculate(hardNumber);
    const easySum = easyCalculate(easyNumber)

    return(
        <div>
            <span>--------------쉬운계산기, 어려운계산기 호출할때마다.. 둘다 호출됨.--------------</span>

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


export default New_useMemo1;
