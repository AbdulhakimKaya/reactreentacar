import React from 'react';
import {Outlet} from "react-router-dom";
import Toolbar from "./toolbar/Toolbar";
import Footer from "./footer/Footer";


function MainLayout() {

    return (
        <div className="mx-auto">
            <main>
                <div>
                    <Toolbar/>
                </div>
                <main className="flex-1 max-w-[1280px] mx-auto">
                    <Outlet/>
                </main>
                <div>
                    <Footer/>
                </div>
            </main>
        </div>
    );
}

export default MainLayout;