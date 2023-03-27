// import React, {useState} from 'react';
// // import {createStore} from 'redux';
// import {Provider, useSelector, useDispatch} from "react-redux";
// import store from './store';
// import {up} from './counterSlice';
// import {asyncUpFetch} from "./counterSlice";
// import { fetchMGMT_VIEW_SINGLE_COUPONS_DATA , getManagementViewSingleCoupons} from "counterSlice";
//
//
// const Counter = () => {
//     const dispatch = useDispatch();
//     const count = useSelector(state=>{
//         return state.counter1.value;
//     });
//
//     const status = useSelector(state=>{
//         return state.counter1.status;
//     });
//
//     const [todoList, setTodoList] = useState([]);
//
//     const call_async = () =>
//     {
//         dispatch(asyncUpFetch());
//     }
//
//     const list = useSelector(getManagementViewSingleCoupons);
//     const handleSearchClick = (list) => {
//         dispatch(fetchMGMT_VIEW_SINGLE_COUPONS_DATA(list));
//     };
//
//
//     return (
//         <div>
//             <p>hi2</p>
//             <button onClick={()=>{
//             dispatch(up(2))
//             }}> + </button>
//
//             <p>
//                 <button onClick={call_async}> + async fetch</button>
//             </p>
//
//             <p> count : {count}</p>
//             <p> status : {status}</p>
//         </div>
//     );
// }
//
// export default function Redux_thunk_Exam2() {
//     return (
//         <Provider store={store}>
//         <div>
//             <Counter></Counter>
//         </div>
//         </Provider>
//     );
// };
