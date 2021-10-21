import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Scroll from './components/Scroll';
import Half2 from './components/Half2';
import Screen from './components/Screen';
import Content from './components/Content';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
