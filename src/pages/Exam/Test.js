import React, {useState} from "react";


const Test = () => {


    const [number, setNumber] = useState(0);

    const [txtOut, setTxtOut] = useState("test");

    const inCrease = () =>
    {

        const arrayA = [1,2,3];
        const arrayB = [4,5,6];

        const arrayC = [...arrayA, ...arrayB];


        const objA = { a:1, b:2};

        const objB = {...objA};

        const objC = {
            aa:"hello"
            ,bb:"world"
        }

        console.log(objC);
        setTxtOut(objC.aa);


    }


    return (
        <div>

            <input type="button" value="button+" onClick={inCrease} />
            <p>number => {number}</p>
            <p>txtOut => {txtOut}</p>
        </div>
    );
};

export default Test;
