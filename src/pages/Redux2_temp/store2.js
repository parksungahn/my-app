import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

const store2 = configureStore(
    {
        reducer: {
            counter1:counterSlice.reducer,
        }
    }
);

export default store2;
