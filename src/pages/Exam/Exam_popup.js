import React , {useState} from 'react';


const Exam_popup = () => {

    let [modal, setModal] = useState(false);


    return (
        <div>
            <h1>hello popup</h1>
            <button onClick={
                ()=>{
                        setModal(!modal)
                    }
            }>팝업창</button>

            {/*//--보여주는 부분*/}
            {
               modal == true ? <Modal/> : null
            }
        </div>
    );
};





const Modal = () => {

    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    );
}

export default Exam_popup;
