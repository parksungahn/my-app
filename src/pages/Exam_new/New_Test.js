import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {queries} from "@testing-library/react";

const New_Test = () =>{

    const inputNumber = useRef();

    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(true);

    const someFunction = useCallback(() => {
        console.log(`someFunction ${number}`);
        return;
    }, [number]);

    useEffect(() => {
        // inputNumber.current.focus();
        console.log('someFunction 생성됨.')
    }, [someFunction]);




    return(
        <div>
            <p>
                <input ref={inputNumber} type="number" onChange={
                    (e) => setNumber(e.target.value)
                 }/>
                <button onClick={()=>setToggle(!toggle)}>toggle : {toggle.toString()}</button>
            </p>
            <button onClick={someFunction}>someFunction</button>
        </div>
    );
};

export default New_Test;
