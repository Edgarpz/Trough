// src/main.js

import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';
import './css/awesome.css';

const container = document.getElementById('react-app');

//  绑定
ReactDOM.render(<Root />, container);
