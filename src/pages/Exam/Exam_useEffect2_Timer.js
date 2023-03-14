import React, {useEffect} from 'react';


const Exam_useEffect2_Timer = (props) => {






    //---타이머 콤포넌트 실행시 최초한번 실행되고
    useEffect( ()=> {
        const timer = setInterval(() => {
            console.log("타이머가 돌아가는중...");
         }, 1000);

        //---타이머 콤포넌트가 화면에서 사라질때 실행됨.
        return () => {
            clearInterval(timer);
            console.log("타이머가 종료되었습니다.");
        }
        }, [] );






    return (
        <div>
            <span>타이머를 시작합니다. 콘솔을 보세요!.</span>
        </div>
    );
};

export default Exam_useEffect2_Timer;
