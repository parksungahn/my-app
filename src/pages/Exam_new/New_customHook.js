import React from "react";
import useInput from "./useInput";


const onSubmit = (message) => {
    alert(message);
}

const New_customHook = () => {
    const [inputValue, handleChange, handleSubmit] = useInput('hi', onSubmit);


    return (
        <div>
            <input value={inputValue} onChange={handleChange}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default New_customHook;
