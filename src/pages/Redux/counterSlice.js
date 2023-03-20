import {createSlice} from '@reduxjs/toolkit';

//--파라미터사용값 action.payload
const counterSlice = createSlice({
    name: 'countSlice',
    initialState: {value: 0},
    reducers: {
        up: (state, action) => {
            state.value = state.value + action.payload;
        }
        , down: (state, action) => {
            state.value = state.value + action.payload;
        }
        , init: (state, action) => {
            state.value = 0;
        }
    }
});

export default counterSlice;
export const {init, up,down} = counterSlice.actions;  //--Exam_ReducerToolkin 에서 호출 : dispatch(up(1));
