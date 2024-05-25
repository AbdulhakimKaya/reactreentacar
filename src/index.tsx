import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/tailwind.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import '../src/assets/css/colors.scss'
import {ConfigProvider} from "antd";
import Routes from "./routes/Routes";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ConfigProvider
        theme={{
            token: {
                // Seed Token
                colorPrimary: '#c81d25',
                // colorFillAlter: '#ff5a5f',
                // colorTextBase: 'white',
                // borderRadius: 2,

                // Alias Token
                colorBgContainer: 'transparent',
            },
        }}
    >
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </ConfigProvider>
);

reportWebVitals();
