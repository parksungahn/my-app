import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import counterSlice2 from "./counterSlice2";

//--app 에서 state.counter.value 로 값사용
const store = configureStore(
    {
        reducer:{
            counter1:counterSlice.reducer,
            counter2:counterSlice2.reducer
        }
    }
);

export default store;
