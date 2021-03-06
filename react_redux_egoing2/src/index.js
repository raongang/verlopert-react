import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// application의 최상위에 APP Component의 상위컴포넌트를 가져온다 - Provider.
import {Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  ,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

