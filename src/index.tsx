import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/tailwind.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from "react-router-dom";
import routes from "./routes/Routes";
import '../src/assets/css/colors.scss'
import {ConfigProvider} from "antd";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ConfigProvider>
        <RouterProvider router={routes}/>
    </ConfigProvider>
);

reportWebVitals();
