import React from 'react';
import ReactDOM from 'react-dom';
import App from './Frontend/src/App';
import reportWebVitals from './Frontend/src/reportWebVitals';
import {HashRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
