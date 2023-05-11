import { Provider} from "react-redux";
import { useSelector, useDispatch} from "react-redux";
import React from "react";

const Exam_redux_legacy = () => {

    //--########################### index.js 파일내용, 메인페이지에 글로벌 변수 저장.
    // import { Provider} from "react-redux";
    // import {createStore} from "redux";
    // const weight = 100;
    // function reducer(state = weight, action)
    // {
    //     return state;
    // }
    // let store = createStore(reducer);


    // function reducer(state = weight, action)
    // {
    //     if(action.type === "increase")
    //     {
    //         state++;
    //     }else if(action.type === "decrease")
    //     {
    //         state--;
    //     }
    //
    //     return state;
    // }
    // let store = createStore(reducer);

    // <BrowserRouter>
    //     <Provider store={store}>
    //         <App />
    //     </Provider>
    // </BrowserRouter>
    //--########################### index.js 파일내용, 메인페이지에 글로벌 변수 저장.

    //--########################### redux 글로벌변수 사용 index.js 변수 가져오기
    const weight_global = useSelector( (state) => state);
    //--########################### redux 글로벌변수 사용 index.js 변수 가져오기



    //--########################### redux  index.js 함수 호출 (글로벌함수 호출)
    const dispatch = useDispatch();

    const increase = () =>
    {
        //--index.js 의 글로벌 함수 호출
        dispatch(
            {type : 'increase'}
        )
    }

    const decrease = () =>
    {
        //--index.js 의 글로벌 함수 호출
        dispatch(
            {type : 'decrease'}
        )
    }
    //--########################### redux  index.js 함수 호출 (글로벌함수 호출)


    return (
        <div>
            hi sanpark.
            <button onClick = {increase}>increase</button>
            <button onClick = {decrease}>decrease</button>
            {weight_global}
        </div>
    );
};

export default Exam_redux_legacy;