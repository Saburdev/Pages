import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './pages/index.css'

const root = document.getElementById('root')
 
const app =(
    <BrowserRouter> 
        <App />
    </BrowserRouter>
);

ReactDOM.render(app,root);
