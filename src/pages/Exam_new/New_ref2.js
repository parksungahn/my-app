import {useRef} from "react";
import New_ref2_my_input from "./New_ref2_my_input";


const New_ref2 = () => {

    const inputRef = useRef();

    const focus = () => {
        inputRef.current.focus();
    };

    return(
        <div>
            <New_ref2_my_input ref={inputRef}/>
            <button onClick={focus}>집중</button>
        </div>
    );
};

export default New_ref2;
