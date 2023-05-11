import React, {useEffect, useState} from 'react';


const Temporary = () => {


    const [count, setCount] = useState(0);

    useEffect( () => {
        console.log("call : " + count);
        }, [count]
    );

    const handleCountUpdate = () => {
        setCount(count+1);
    };

    useEffect(()=> {
        console.log("test");
    },[]);

    useEffect(()=>{
        console.log(" call2 : " + count);
    }, [count]);

    return(
        <div>

            <button onClick={handleCountUpdate}>Update</button>
        </div>
    );
};

export default Temporary;