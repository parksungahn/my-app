import React, {useState, useEffect} from "react";


//useState 는 값변경시 화명갱신됨.

const Exam_Fetch = () => {

    const [username, setUsername] = useState("");

    async function showAvatar() {
        // github 사용자 정보 읽기
        let githubResponse = await fetch(`https://api.github.com/users/${username}`);
        let githubUser = await githubResponse.json();
        // console.log(githubUser);
        // 아바타 보여주기
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        // --- 3초 대기
        await new Promise((resolve, reject) => setTimeout(resolve, 3000));
        img.remove();

        return githubUser;
    }

    useEffect(() => {
        showAvatar();
    },[username]);

    const onClickCall = () => {

        setUsername("parksungahn");

    };

    const onClickCall2 = () => {
        setUsername("hankjoo");
    };

    return (
        <div>
            <button onClick={onClickCall}>호출</button>
            <button onClick={onClickCall2}>호출</button>

            <p>{username}</p>
        </div>
    )
}

export default Exam_Fetch;
