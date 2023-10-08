import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {queries} from "@testing-library/react";


const New_Test = () =>{







    //----Object.assign 으로 객체복사  ... 스프레드 사용
    let user = {name: 'Mike'};
    let info = {age: 30};
    let fe = ['Js', 'React'];
    let lang = ['Korean', 'English'];

    // user = Object.assign({}, user, info, {
    //     skills: [],
    // });
    //
    // fe.forEach((item)=> {
    //     user.skills.push(item);
    // })
    // lang.forEach((item)=>{
    //     user.skills.poush(item);
    // })

    //--아래방법으로 한번에 해결, 스프레드 ... 사용
     user = {
         ...user,
         ...info,
         skills: [...fe, ...lang],
     };

    console.log(user);







    return(
        <div></div>
    );
};


export default New_Test;
