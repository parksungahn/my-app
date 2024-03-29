import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getApi, postApi} from '../api/http';

const asyncUpFetch = createAsyncThunk(
    'counterSlice/asyncUpFetch',
    async () => {
        const resp = await fetch('https://api.countapi.xyz/hit/opensaljkdfslkjfsadf.com/visits')
        const data = await resp.json();
        return data.value;
    }
)


const counterSlice = createSlice(
    {
        name: 'counterSlice',
        initialState: {
            value:0,
            status:'Welcome'
        },
        reducers: {
            up: (state, action) => {
                state.value = state.value + action.payload;
            }
        },
        extraReducers: (builder) => {
            builder.addCase(asyncUpFetch.pending, (state, action)=>{
                state.status = 'Loading';
            })
            builder.addCase(asyncUpFetch.fulfilled, (state, action)=>{
                state.value= action.payload;
                state.status = 'complete';
            })
            builder.addCase(asyncUpFetch.rejected, (state, action)=>{
                state.status = 'fail';
            })
        }
    }
);

export default counterSlice;
export const{up, set} = counterSlice.actions;
export {asyncUpFetch}
