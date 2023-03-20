import React from 'react';
import {Provider, useSelector, useDispatch} from 'react-redux';
import store from './store';
import counterSlice, {init, up, down} from './counterSlice';


//--설치
//-->npm install @reduxjs/toolkit react-redux
//-https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=ko  크롬유틸설치-개발자모드-리덕스유틸
const Exam_ReduxToolkit2 = () => {

    const Counter = () => {
        //--useSelector를 이용해 store 에 있는 initialState value값을 가져옴.
        const count = useSelector(state => {
            return state.counter1.count;
        });

        const name = useSelector(state => {
            return state.counter1.name;
        });

        console.log("count : " + count);
        console.log("name : " + name);


        //--state값을 변경하기위해 useDispatch 를 통해 값을변경.
        const dispatch = useDispatch();

        const initNumber = () => {
            dispatch(init({name:"", count:0}));
        };

        const addNumber = () => {
            // dispatch(counterSlice.actions.up(1);
            dispatch(up({name:"kim kil dong", count:1}));
        };

        const minusNumber = () => {
            dispatch(down({name:"kim kil dong", count:1}));
        };


        return (
            <div>
                <p>
                    <button onClick={addNumber}> Add +</button>
                </p>


                <p>
                    <button onClick={minusNumber}> down -</button>
                </p>
                <p>Count : {count}</p>
                <p>name : {name}</p>

            </div>
        );
    };

    return (
        // store 를 Provider를 통해서 app에 전달
        <Provider store={store}>
            <div>
                <Counter></Counter>
            </div>
        </Provider>
    );
};

export default Exam_ReduxToolkit2;
