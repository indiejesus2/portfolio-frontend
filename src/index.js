import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';


ReactDOM.render(
    <Router>
      document.title = "Daniel Ste. Marie"
      <App />
    </Router>,
  document.getElementById('root')
);
