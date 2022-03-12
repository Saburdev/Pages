import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import  "./index.css"

const root = document.getElementById('root')
 
const app = (
    <Router> 
        <App />
    </Router>
);

ReactDOM.render(app, root);
