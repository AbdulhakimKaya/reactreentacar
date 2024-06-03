import React from 'react';
import {useRoutes} from "react-router-dom";
import MainLayout from "../layouts/main-layout/MainLayout";
import HomePage from "../layouts/main-layout/home-page/HomePage";
import VehicleList from "../layouts/main-layout/vehicle-list/VehicleList";
import LoginRegister from "../layouts/main-layout/login-register/LoginRegister";
import VehicleDetail from "../layouts/main-layout/vehicle-detail/VehicleDetail";
import About from "../layouts/main-layout/about/About";
import Contact from "../layouts/main-layout/contact/Contact";
import AdminLayout from "../layouts/admin-layout/AdminLayout";
import ScrollToTop from "../helpers/ScrollToTop";
import AdminHomePage from "../layouts/admin-layout/admin-home-page/AdminHomePage";
import AdminVehicles from "../layouts/admin-layout/admin-vehicles/AdminVehicles";
import AddVehicle from "../layouts/admin-layout/admin-vehicles/add-vehicle/AddVehicle";

const Routes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <MainLayout/>,
            children: [
                {
                    index: true,
                    element: <HomePage/>
                },
                {
                    path: "araclar",
                    element: <VehicleList/>
                },
                {
                    path: "giris-yap",
                    element: <LoginRegister/>
                },
                {
                    path: "arac-detay/:id",
                    element: <VehicleDetail/>
                },
                {
                    path: "hakkimizda",
                    element: <About/>
                },
                {
                    path: "iletisim",
                    element: <Contact/>
                },
            ]
        },
        {
            path: "/admin/",
            element: <AdminLayout/>,
            children: [
                {
                    index: true,
                    element: <AdminHomePage/>
                },
                {
                    path: "araclar",
                    element: <AdminVehicles/>
                },
                {
                    path: "araclar/arac-ekle",
                    element: <AddVehicle/>
                },
                {
                    path: "filtreler",
                    element: "filtreler"
                },
                {
                    path: "kullanicilar",
                    element: "kullanicilar"
                },
                {
                    path: "hesabim",
                    element: "hesabim"
                },
                {
                    path: "slaytlar",
                    element: "slaytlar"
                },
                {
                    path: "hakkimizda",
                    element: "hakkimizda"
                },
                {
                    path: "iletisim",
                    element: "iletisim"
                },
            ]
        }
    ])

    return (
        <>
            <ScrollToTop/>
            {routes}
        </>
    );
};

export default Routes;