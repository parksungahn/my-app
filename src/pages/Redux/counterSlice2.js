import {createSlice} from '@reduxjs/toolkit';

//--파라미터사용값 action.payload
const counterSlice2 = createSlice({
    name: 'countSlice2',
    initialState: {value: 0},
    reducers: {
        up2: (state, action) => {
            state.value = state.value + action.payload;
        }
        , down2: (state, action) => {
            state.value = state.value + action.payload;
        }
        , init2: (state, action) => {
            state.value = 0;
        }
    }
});

export default counterSlice2;
export const {init2, up2,down2} = counterSlice2.actions;  //--Exam_ReducerToolkin 에서 호출 : dispatch(up(1));
