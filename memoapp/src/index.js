import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './style.css';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

if (module.hot) {
    module.hot.accept();
}