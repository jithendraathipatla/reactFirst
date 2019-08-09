import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Navbar';
import * as serviceWorker from './serviceWorker';
import MyComponent from './Ajax';

ReactDOM.render(<Navbar />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root2'));
ReactDOM.render(<App />, document.getElementById('root1'));
ReactDOM.render(<MyComponent />, document.getElementById('root4'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
