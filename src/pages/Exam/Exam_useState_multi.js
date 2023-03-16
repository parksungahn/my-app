import React, {useState} from "react";


//--멀티 텍스트입력창 값변경시 txtValue값변경

const Exam_useState_multi = () => {




    // const users = [
    //     {username:"hong1"
    //         ,useremail:"appzzang@gmail.com"}
    // ];
    //
    // const [inputs, setInputs] = useState(...users);

    //--optional 변수 추출, 화면에서 변수사용  or  inputs.username

    const [name, setName] = useState("");

    const [inputs, setInputs] = useState({
        username: ""
        , useremail: ""
        , tel: ""
    });

    const{username, useremail, tel} = inputs;

    const onChangeCall = (e) => {
        const value = e.target.value;
        const id  = e.target.id;

        // ...inputs  깊은복사로 새로운 오브젝트로 만듬, 스프레드 기법으로 풀어냄. New 와같은 복제
        setInputs(
            {
                ...inputs
                ,[id]: value
            }
        )
    };

    return (
            <div>
                <div>
                    <label>이름</label>
                    <input type="text" id="username" value={inputs.username} onChange={onChangeCall}/>
                </div>

                <div>
                    <label>이메일 </label>
                    <input type="text" id="useremail" value={useremail} onChange={onChangeCall}/>
                </div>


                <div>
                    <label>전화번호 </label>
                    <input type="text" id="tel" value={tel} onChange={onChangeCall}/>
                </div>


                <p><button onClick={()=>{setName("kim")}} >click</button></p>

                <p>이름2 : {username}</p>
                <p>이메일2 : {useremail}</p>
                <p>전화번호2 : {tel}</p>
                <p>name : {name}</p>

            </div>
        );
}

export default Exam_useState_multi;
