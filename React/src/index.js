import React from 'react';
import ReactDOM  from 'react-dom';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


const baseUrl = (document.getElementsByTagName('base')[0] || {}).href;
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement);
