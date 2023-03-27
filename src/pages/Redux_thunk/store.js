import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


//--app 에서 state.counter.value 로 값사용
const store = configureStore(
    {
        reducer:{
            counter1:counterSlice.reducer,
        }
    }
);

export default store;
