import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/tailwind.css';
import reportWebVitals from './reportWebVitals';
import '../src/assets/css/colors.scss'
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <App/>
);

reportWebVitals();
