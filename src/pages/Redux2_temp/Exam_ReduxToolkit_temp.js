import React from 'react';
import {Provider, useSelector, useDispatch} from "react-redux";
import store2 from './store2';
import counterSlice from './counterSlice';

const Exam_ReduxToolkit_temp = () => {

    const Counter = () => {

        const dispatch = useDispatch();

        const name = useSelector(
            state => {
                return state.counter1.name;
            }
        );

        const count = useSelector(
            state => {
                return state.counter1.count;
            }
        )

        const onChangeName = () => {

            dispatch(counterSlice.actions.changeName({name: "hong"}));

        };

        const onChangeName2 = () => {

            dispatch(counterSlice.actions.changeCount({name:"hong", count:9}));

        };

        const onChangeCount = () => {

            dispatch(counterSlice.actions.changeCount({count:7}));
        };

        return (
            <div>
                <p>name : {name}</p>
                <p>count : {count}</p>
                <p><button onClick={onChangeName}>Change Name</button> </p>
                <p><button onClick={onChangeName2}>Change Count</button></p>
            </div>
        );
    };


    return (
        <Provider store={store2}>
            <div>
                <Counter></Counter>
            </div>
        </Provider>
    );
};

export default Exam_ReduxToolkit_temp;
