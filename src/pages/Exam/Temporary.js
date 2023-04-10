import React, {useState} from "react";

//--이벤트 핸들링, 클릭, onChange, Enter 키 핸들링
const Temporary = () => {

    const onSubmitCall =
        (arg) => {
            alert(arg);
        };


    const onKeyUpCall = (event) => {
        if(event.key === "Enter")
        {
            const txt = event.target.value;
            console.log("key Enter : ", txt);

            onSubmitCall(txt);
        }
        else
        {
            console.log("key up", event.key);
        }
    };



    return (
        <div>
            <p><input onKeyUp={onKeyUpCall}/></p>
            <button onClick={onSubmitCall}>Click</button>
        </div>
    );
};

export default Temporary;
