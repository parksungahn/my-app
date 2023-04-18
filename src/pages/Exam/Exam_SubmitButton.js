import React, {useState} from "react";

const Exam_SubmitButton = () => {

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');
    const onSubmit = (event) => {
        event.preventDefault(); //--컨트롤값 삭제방지
        console.log(username, password);
        // alert('submitted');
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input placeholder="Username" value={username}
                       onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <input placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                /> <br/>
                <button type="submit">Login</button>
          </form>
        </div>
    );
};

export default Exam_SubmitButton;