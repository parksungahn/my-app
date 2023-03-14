import React, {useState, useEffect} from "react";
import Exam_useEffect2_Timer from "./Exam_useEffect2_Timer";

const Exam_useEffect2 = () => {

    const [showTimer, setShowTimer] = useState(false);

    return (
        <div>
            <button onClick={ () => setShowTimer(!showTimer)}>Toggle Timer</button>

            {showTimer && <Exam_useEffect2_Timer/>}

        </div>

    );
};

export default Exam_useEffect2;
