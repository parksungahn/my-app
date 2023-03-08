import React, {useState} from "react";

//--텍스트입력창 값변경시 txtValue값변경
const Exam_userState_input = () => {
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

export default Exam_userState_input;
