import React, {useMemo, useState} from "react";
import {queries} from "@testing-library/react";


const hardCalculate = (number) => {
    console.log("어려운 계산기");
    for(let i=0; i<999999; i++)
    {

    }

    return 10000 + number;
}

const easyCalculate = (number) => {
    console.log("쉬운 계산기");

    return number + 1;
}

const New_Test = () => {

    const [hardNumber, setHardNumber] = useState(0);
    const [easyNumber, setEasyNumber] = useState(0);

    // const hardSum = hardCalculate(hardNumber);
    // const easySum = easyCalculate(easyNumber);

    // const hardSum = useMemo(()=>{
    //         return hardCalculate(hardNumber);
    //
    // },[hardNumber]);

    const hardSum = useMemo(()=> {
        return hardCalculate(hardNumber);
    }, [hardNumber]);

    const easySum = useMemo(()=>
    {
        return easyCalculate(easyNumber);
    },[easyNumber]);

    return(
        <div>
            <input type="number" onChange={(e) => {setHardNumber(parseInt(e.target.value))}}/>
            <span>{hardSum}</span>

            <br/>

            <input type="number" onChange={(e)=>{setEasyNumber(parseInt(e.target.value))}}/>
            <span>{easySum}</span>
        </div>
    );
};

export default New_Test;
