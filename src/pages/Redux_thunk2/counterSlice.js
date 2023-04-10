// import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// import { getApi, postApi} from '../api/http';
//
// const storeInitailState = {
//     isFetching: false,
//     managementViewSingleCoupons: {status: '', list: []},
// };
//
//
// const asyncUpFetch = createAsyncThunk(
//     'counterSlice/asyncUpFetch',
//     async () => {
//         // const resp = await fetch('https://api.countapi.xyz/hit/opensaljkdfslkjfsadf.com/visits')
//         // const data = await resp.json();
//         // return data.value;
//
//         const resp = await getApi(`https://jsonplaceholder.typicode.com/posts/`);
//         console.log(resp.data);
//         return resp.data.list;
//     }
// )
//
// export const fetchMGMT_VIEW_SINGLE_COUPONS_DATA = createAsyncThunk('management/fetchMGMT_VIEW_SINGLE_COUPONS_DATA', async (params) => {
//     // let qs = new URLSearchParams(params).toString();
//     // const response = await getApi(`/management/v1/getViewSingleCoupons?${qs}`);
//     // return response.data.list;
//     const resp = await getApi(`https://jsonplaceholder.typicode.com/posts/`);
//     console.log(resp.data);
//     return resp.data.list;
// });
//
//
// const counterSlice = createSlice(
//     {
//         name: 'counterSlice',
//         initialState: {
//             value:0,
//             status:'Welcome'
//         },
//         reducers: {
//             up: (state, action) => {
//                 state.value = state.value + action.payload;
//             }
//             ,setManagementViewSingleCoupons: (state, action) => {
//                 state.managementViewSingleCoupons.list = action.payload;
//             }
//         },
//         extraReducers: (builder) => {
//             builder.addCase(asyncUpFetch.pending, (state, action)=>{
//                 state.status = 'Loading';
//             })
//             .addCase(asyncUpFetch.fulfilled, (state, action)=>{
//                 state.value= action.payload;
//                 state.status = 'complete';
//             })
//             .addCase(asyncUpFetch.rejected, (state, action)=>{
//                 state.status = 'fail';
//             })
//             .addCase(fetchMGMT_VIEW_SINGLE_COUPONS_DATA.pending, (state) => {
//                 state.isFetching = true;
//                 state.managementViewSingleCoupons.list = [];
//                 state.managementViewSingleCoupons.status ='pending';
//             })
//             .addCase(fetchMGMT_VIEW_SINGLE_COUPONS_DATA.fulfilled, (state, action) => {
//                 state.isFetching = false;
//                 state.managementViewSingleCoupons.list = action.payload;
//                 state.managementViewSingleCoupons.status ='fulfilled';
//             })
//             .addCase(fetchMGMT_VIEW_SINGLE_COUPONS_DATA.rejected, (state) => {
//                 state.isFetching = false;
//                 state.managementViewSingleCoupons.list = [];
//                 state.managementViewSingleCoupons.status ='rejected';
//             })
//         }
//     }
// );
//
//
// export const getManagementViewSingleCoupons = (state) => state.managementViewSingleCoupons.list;
//
// export const{up, set} = counterSlice.actions;
// export {asyncUpFetch}
// export const {
//     setManagementViewSingleCoupons
// } = counterSlice.actions;
// export default counterSlice;
// // export default counterSlice.reducer;
