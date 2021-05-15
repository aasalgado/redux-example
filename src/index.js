import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux"

// Action 
const petIncrement = () => {
  return {
    type: "PET_INCREASED"
  }
}

const petDecrement = () => {
  return {
    type: "PET_DECREASED"
  }
}

// Reducer
const petCounter = (state = 0, action) => {
  switch (action.type) {
    case "PET_INCREASED":
      return state + 1;
    case "PET_DECREASED":
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(petCounter);

store.subscribe(() => console.log(store.getState()))

// Dispatch
store.dispatch(petIncrement());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
