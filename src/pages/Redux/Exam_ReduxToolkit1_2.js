import React from 'react';
import {Provider, useSelector, useDispatch} from 'react-redux';
import store from './store';
import counterSlice, {init, up,down} from './counterSlice';
import counterSlice2, {init2, up2,down2} from './counterSlice2';


//--설치
//-->npm install @reduxjs/toolkit react-redux
//-https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=ko  크롬유틸설치-개발자모드-리덕스유틸
const Exam_ReduxToolkit = () => {

    const Counter = () => {
        //--useSelector를 이용해 store 에 있는 initialState value값을 가져옴.
        const count = useSelector(state=>{
            return state.counter1.value;
        });

        const count2 = useSelector(state=>{
            return state.counter2.value;
        });

        //--state값을 변경하기위해 useDispatch 를 통해 값을변경.
        const dispatch = useDispatch();

        const initNumber = () => {
            dispatch(init(""));
        };
        const addNumber = () => {
            // dispatch(counterSlice.actions.up(1);
            dispatch(up(1));
        };

        const minusNumber = () => {
            dispatch(down(1));
        };

        const addNumber2 = () => {
            // dispatch(counterSlice.actions.up(1);
            dispatch(counterSlice2.actions.up2(1));
        };


        return (
            <div>
                <p>Exam_ReduxToolkit1_2</p>

                <p><button onClick={addNumber}> Add + </button>
                </p>


                <p><button onClick={minusNumber}> down - </button>
                </p>
                <p>Count : {count}</p>



                <p><button onClick={()=>{
                    dispatch(counterSlice2.actions.up2(2));
                }
                }> Add * </button>
                </p>

                <p>Count2 : {count2}</p>

                </div>
        );
    };

    return(
        // store 를 Provider를 통해서 app에 전달
        <Provider store={store}>
        <div>
            <Counter></Counter>
        </div>
        </Provider>
    );
};

export default Exam_ReduxToolkit;
