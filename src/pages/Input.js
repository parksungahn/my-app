import React, {useState} from "react";


const Input = () => {
    const [txtValue, setTextValue] = useState("");

    const onChangeCall = (e) => {
        setTextValue(e.target.value)
    };

    return (
        <div>
          <input type="text" value={txtValue} onChange={onChangeCall} />
           <p>{txtValue}</p>
        </div>
    );
}

export default Input;