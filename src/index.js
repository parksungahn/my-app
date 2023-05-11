import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {BrowserRouter} from 'react-router-dom'

//--########################### redux 글로벌변수 사용
import { Provider} from "react-redux";
import {createStore} from "redux";
//--########################### redux 글로벌변수 사용


//--########################### redux 글로벌변수 사용
const weight = 100;
function reducer(state = weight, action)
{
    if(action.type === "increase")
    {
        state++;
    }else if(action.type === "decrease")
    {
        state--;
    }

    return state;
}
let store = createStore(reducer);
//--########################### redux 글로벌변수 사용


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
             <App />
        </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
