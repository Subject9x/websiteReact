import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';

import Main from "./Main"
import HomePage from './components/home/HomePage';

ReactDOM.render(
    <HomePage/>,
    document.getElementById('root')
);