import React, {useState} from "react";

const Temporary = () => {

    const [inputs, setInputs] = useState({
        username: "hong"
        ,useremail: "kildong@gmail.com"
    })

    const [name, setName] = useState("");

    const onChange = (e) => {

        const id = e.target.id;
        const value = e.target.value;

        setInputs({...inputs, [id]:value});
    };

    return (
      <div>
          hello
          <p><input type="text" onChange={ ()=>{setName("hello")}  }id="username"/></p>
          <p><input type="text" onChange={onChange} id="useremail"/></p>

          <p><button onClick={()=>{setName("kim")}} >click</button></p>

          <p>{inputs.username}</p>
          <p>{inputs.useremail}</p>
          <p>{name}</p>
      </div>
    );
};

export default Temporary;
