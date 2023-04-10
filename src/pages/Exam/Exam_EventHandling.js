import React from "react";


const Exam_EventHandling = () => {

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
            <p><input type="text" onKeyUp={onKeyUpCall}/></p>
            <button onClick={onSubmitCall}>Click</button>
        </div>
    );

};

export default Exam_EventHandling;
