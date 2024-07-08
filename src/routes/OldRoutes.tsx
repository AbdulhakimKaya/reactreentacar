import React from 'react';
import {Navigate, useLocation, useRoutes} from "react-router-dom";
import MainLayout from "../layouts/main-layout/MainLayout";
import HomePage from "../layouts/main-layout/home-page/HomePage";
import VehicleList from "../layouts/main-layout/vehicle-list/VehicleList";
import LoginRegister from "../layouts/main-layout/login-register/LoginRegister";
import VehicleDetail from "../layouts/main-layout/vehicle-detail/VehicleDetail";
import About from "../layouts/main-layout/about/About";
import Contact from "../layouts/main-layout/contact/Contact";
import AdminLayout from "../layouts/admin-layout/AdminLayout";
import ScrollToTop from "../helpers/ScrollToTop";
import AdminVehicles from "../layouts/admin-layout/admin-vehicles/AdminVehicles";
import Brands from "../layouts/admin-layout/admin-vehicle-features/brands/Brands";
import Colors from "../layouts/admin-layout/admin-vehicle-features/colors/Colors";
import Fuels from "../layouts/admin-layout/admin-vehicle-features/fuels/Fuels";
import Transmissions from "../layouts/admin-layout/admin-vehicle-features/transmissions/Transmissions";
import BrandDetail from "../layouts/admin-layout/admin-vehicle-features/brands/brand-detail/BrandDetail";
import TransmissionDetail
    from "../layouts/admin-layout/admin-vehicle-features/transmissions/transmission-detail/TransmissionDetail";
import FuelDetail from "../layouts/admin-layout/admin-vehicle-features/fuels/fuel-detail/FuelDetail";
import ColorDetail from "../layouts/admin-layout/admin-vehicle-features/colors/color-detail/ColorDetail";
import Models from "../layouts/admin-layout/admin-vehicle-features/models/Models";
import ModelDetail from "../layouts/admin-layout/admin-vehicle-features/models/model-detail/ModelDetail";
import AdminHomePage from "../layouts/admin-layout/admin-home-page/AdminHomePage";
import AdminVehicleDetail from "../layouts/admin-layout/admin-vehicles/admin-vehicle-detail/AdminVehicleDetail";
import AdminSliders from "../layouts/admin-layout/admin-sliders/AdminSliders";
import SliderDetail from "../layouts/admin-layout/admin-sliders/slider-detail/SliderDetail";
import Logout from "../layouts/main-layout/logout/Logout";

const OldRoutes = () => {
    const location = useLocation();

    const isAdminRoute = location.pathname.startsWith('/admin');
    const adminToken = sessionStorage.getItem('accessToken');

    // Session kontrolü
    if (isAdminRoute && !adminToken) {
        return <Navigate to="/giris-yap"/>;
    }


    // eslint-disable-next-line react-hooks/rules-of-hooks
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
                    path: "cikis",
                    element: <Logout/>
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
                    // element: <AdminHomePage/>
                },

                // Vehicle
                {
                    path: "araclar",
                    element: <AdminVehicles/>
                },
                {
                    path: "araclar/arac-ekle",
                    element: <AdminVehicleDetail/>
                },
                {
                    path: "araclar/arac-duzenle/:id",
                    element: <AdminVehicleDetail/>
                },

                // User Management
                {
                    path: "kullanicilar",
                    element: "kullanicilar"
                },
                {
                    path: "hesabim",
                    element: "hesabim"
                },

                // Content Management
                {
                    path: "slider",
                    element: <AdminSliders/>
                },
                {
                    path: "slider/slider-ekle",
                    element: <SliderDetail/>
                },
                {
                    path: "slider/slider-duzenle/:id",
                    element: <SliderDetail/>
                },

                // Vehicle Features
                // Brand
                {
                    path: "araba-ozellikleri/marka",
                    element: <Brands/>
                },
                {
                    path: "araba-ozellikleri/marka/marka-ekle",
                    element: <BrandDetail/>
                },
                {
                    path: "araba-ozellikleri/marka/marka-duzenle/:id",
                    element: <BrandDetail/>
                },

                // Model
                {
                    path: "araba-ozellikleri/model",
                    element: <Models/>
                },
                {
                    path: "araba-ozellikleri/model/model-ekle",
                    element: <ModelDetail/>
                },
                {
                    path: "araba-ozellikleri/model/model-duzenle/:id",
                    element: <ModelDetail/>
                },

                // Transmission
                {
                    path: "araba-ozellikleri/vites",
                    element: <Transmissions/>
                },
                {
                    path: "araba-ozellikleri/vites/vites-ekle",
                    element: <TransmissionDetail/>
                },
                {
                    path: "araba-ozellikleri/vites/vites-duzenle/:id",
                    element: <TransmissionDetail/>
                },

                // Fuel
                {
                    path: "araba-ozellikleri/yakit",
                    element: <Fuels/>
                },
                {
                    path: "araba-ozellikleri/yakit/yakit-ekle",
                    element: <FuelDetail/>
                },
                {
                    path: "araba-ozellikleri/yakit/yakit-duzenle/:id",
                    element: <FuelDetail/>
                },

                // Color
                {
                    path: "araba-ozellikleri/renk",
                    element: <Colors/>
                },
                {
                    path: "araba-ozellikleri/renk/renk-ekle",
                    element: <ColorDetail/>
                },
                {
                    path: "araba-ozellikleri/renk/renk-duzenle/:id",
                    element: <ColorDetail/>
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

export default OldRoutes;