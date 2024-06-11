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
import UpdateVehicle from "../layouts/admin-layout/admin-vehicles/update-vehicle/UpdateVehicle";
import Brands from "../layouts/admin-layout/admin-vehicle-features/brands/Brands";
import AddBrand from "../layouts/admin-layout/admin-vehicle-features/brands/add-brand/AddBrand";
import Colors from "../layouts/admin-layout/admin-vehicle-features/colors/Colors";
import AddColor from "../layouts/admin-layout/admin-vehicle-features/colors/add-color/AddColor";
import Fuels from "../layouts/admin-layout/admin-vehicle-features/fuels/Fuels";
import AddFuel from "../layouts/admin-layout/admin-vehicle-features/fuels/add-fuel/AddFuel";
import Transmissions from "../layouts/admin-layout/admin-vehicle-features/transmissions/Transmissions";
import AddTransmission
    from "../layouts/admin-layout/admin-vehicle-features/transmissions/add-transmission/AddTransmission";

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

                // Vehicles
                {
                    path: "araclar",
                    element: <AdminVehicles/>
                },
                {
                    path: "araclar/arac-ekle",
                    element: <AddVehicle/>
                },
                {
                    path: "araclar/arac-duzenle",
                    element: <UpdateVehicle/>
                },

                // Filters
                {
                    path: "filtreler",
                    element: "filtreler"
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
                    path: "icerik-yonetimi/slaytlar",
                    element: "slaytlar"
                },
                {
                    path: "icerik-yonetimi/hakkimizda",
                    element: "hakkimizda"
                },
                {
                    path: "icerik-yonetimi/iletisim",
                    element: "iletisim"
                },

                // Vehicle Features
                {
                    path: "araba-ozellikleri/marka",
                    element: <Brands/>
                },
                {
                    path: "araba-ozellikleri/marka/marka-ekle",
                    element: <AddBrand/>
                },
                {
                    path: "araba-ozellikleri/marka/marka-duzenle/:id",
                    element: <AddBrand/>
                },
                {
                    path: "araba-ozellikleri/model",
                    element: "araba-ozellikleri model"
                },
                {
                    path: "araba-ozellikleri/model",
                    element: "araba-ozellikleri model/model-ekle"
                },
                {
                    path: "araba-ozellikleri/vites",
                    element: <Transmissions/>
                },
                {
                    path: "araba-ozellikleri/vites/vites-ekle",
                    element: <AddTransmission/>
                },
                {
                    path: "araba-ozellikleri/yakit",
                    element: <Fuels/>
                },
                {
                    path: "araba-ozellikleri/yakit/yakit-ekle",
                    element: <AddFuel/>
                },
                {
                    path: "araba-ozellikleri/renk",
                    element: <Colors/>
                },
                {
                    path: "araba-ozellikleri/renk/renk-ekle",
                    element: <AddColor/>
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