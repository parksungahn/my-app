import {createSlice} from '@reduxjs/toolkit';

const storeInit = {
    name: "",
    count: 0,
};

const counterSlice = createSlice(
    {
        name: 'countSlice',
        initialState: storeInit,
        reducers: {
            changeName: (state, action) => {
                state.name = action.payload.name;
            },
            changeCount: (state, action) => {
                state.count = action.payload.count;
            }
        }
    }
);


export default counterSlice;

export const {changeName} = counterSlice.actions;
