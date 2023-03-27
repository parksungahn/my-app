import React from 'react';
// import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from "react-redux";
import store from './store';
import {up} from './counterSlice';
import {asyncUpFetch} from "./counterSlice";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state=>{
        return state.counter1.value;
    });

    const status = useSelector(state=>{
        return state.counter1.status;
    });

    const call_async = () =>
    {
        dispatch(asyncUpFetch());
    }

    return (
        <div>
            <button onClick={()=>{
            dispatch(up(2))
            }}> + </button>

            <p>
                <button onClick={call_async}> + async fetch</button>
            </p>

            <p> count : {count}</p>
            <p> status : {status}</p>
        </div>
    );
}

export default function Redux_thunk_Exam1() {
    return (
        <Provider store={store}>
        <div>
            <Counter></Counter>
        </div>
        </Provider>
    );
};
