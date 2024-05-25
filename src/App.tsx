import React from 'react';
import './assets/css/tailwind.css';
import Routes from "./routes/Routes";
import {BrowserRouter} from "react-router-dom";
import {ConfigProvider} from "antd";

function App() {
    const themeTokens = {
        colorPrimary: '#c81d25',
        colorLink: '#c81d25',
        colorPrimaryBg: '#FFF1F0',
        borderRadius: 8,
    };

    return (
        <div>
            <ConfigProvider
                theme={{
                    token: themeTokens,
                    components: {
                        Menu: {
                            itemHoverColor: "#c81d25",
                            itemHoverBg: themeTokens.colorPrimaryBg,
                            itemMarginInline: 8,
                            itemMarginBlock: 8,
                        },
                        Table: {
                            // headerBg: themeTokens.colorPrimaryBg,
                            // borderColor: themeTokens.colorPrimary,
                        },
                    },
                }}
            >
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </ConfigProvider>
        </div>
    );
}

export default App;
