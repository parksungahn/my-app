import {createSlice} from '@reduxjs/toolkit';

const storeInitailState = {
    name: "hong kil dong",
    count: 1,
};

//--파라미터사용값 action.payload
const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: storeInitailState,
    reducers: {
         init: (state, action) => {
             state.value.name = "";
             state.value.count = 0;
         }
        , up: (state, action) => {
            // console.log("페이로드 :" + action.payload.name);
            // console.log("페이로드2 :" + action.payload.count);

            state.name = action.payload.name;
            state.count = state.count + action.payload.count;

            // state.value = {name: "", count: 0};
        }
        , down: (state, action) => {
            state.name = action.payload.name;
            state.count = state.count - action.payload.count;
        }
    }
});

export default counterSlice;
export const {init, up,down} = counterSlice.actions;  //--Exam_ReducerToolkin 에서 호출 : dispatch(up(1));
