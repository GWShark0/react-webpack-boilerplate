import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

require('../style/main.scss');

const mountNode = document.getElementById('root');
ReactDOM.render(<App />, mountNode);
