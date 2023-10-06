import React, {useRef, useState} from "react";


const New_ref = ()=> {

    const inputNumber = useRef();
    const [number, setNumber] = useState();

    const setFocus = () => {
        inputNumber.current.focus();
    }


    return(
        <div>
            <input ref={inputNumber} type="number" onChange={
                (e) => setNumber(e.target.value)
            }/>
            <button onClick={setFocus} > focus </button>
        </div>
    );
};

export default New_ref;
