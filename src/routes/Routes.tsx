import React from 'react';
import {Navigate, Route, Routes as RouterRoutes, useLocation} from 'react-router-dom';
import MainLayout from '../layouts/main-layout/MainLayout';
import AdminLayout from '../layouts/admin-layout/AdminLayout';
import HomePage from '../layouts/main-layout/home-page/HomePage';
import VehicleList from '../layouts/main-layout/vehicle-list/VehicleList';
import LoginRegister from '../layouts/main-layout/login-register/LoginRegister';
import VehicleDetail from '../layouts/main-layout/vehicle-detail/VehicleDetail';
import About from '../layouts/main-layout/about/About';
import Contact from '../layouts/main-layout/contact/Contact';
import AdminHomePage from '../layouts/admin-layout/admin-home-page/AdminHomePage';
import AdminVehicles from '../layouts/admin-layout/admin-vehicles/AdminVehicles';
import AdminVehicleDetail from '../layouts/admin-layout/admin-vehicles/admin-vehicle-detail/AdminVehicleDetail';
import AdminSliders from '../layouts/admin-layout/admin-sliders/AdminSliders';
import SliderDetail from '../layouts/admin-layout/admin-sliders/slider-detail/SliderDetail';
import Brands from '../layouts/admin-layout/admin-vehicle-features/brands/Brands';
import BrandDetail from '../layouts/admin-layout/admin-vehicle-features/brands/brand-detail/BrandDetail';
import Models from '../layouts/admin-layout/admin-vehicle-features/models/Models';
import ModelDetail from '../layouts/admin-layout/admin-vehicle-features/models/model-detail/ModelDetail';
import Transmissions from '../layouts/admin-layout/admin-vehicle-features/transmissions/Transmissions';
import TransmissionDetail
    from '../layouts/admin-layout/admin-vehicle-features/transmissions/transmission-detail/TransmissionDetail';
import Fuels from '../layouts/admin-layout/admin-vehicle-features/fuels/Fuels';
import FuelDetail from '../layouts/admin-layout/admin-vehicle-features/fuels/fuel-detail/FuelDetail';
import Colors from '../layouts/admin-layout/admin-vehicle-features/colors/Colors';
import ColorDetail from '../layouts/admin-layout/admin-vehicle-features/colors/color-detail/ColorDetail';
import Logout from '../layouts/main-layout/logout/Logout';
import UserList from "../layouts/admin-layout/user-list/UserList";
import Account from "../layouts/admin-layout/account/Account";
import ScrollToTop from "../helpers/ScrollToTop";

const Routes = () => {
    const location = useLocation();

    const isAdminRoute = location.pathname.startsWith('/admin');
    const adminToken = sessionStorage.getItem('accessToken');

    // Session kontrolü
    if (isAdminRoute && !adminToken) {
        return <Navigate to="/giris-yap"/>;
    }

    return (
        <>
            <ScrollToTop/>
            <RouterRoutes>
                <Route
                    path="/"
                    element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="araclar" element={<VehicleList/>}/>
                    <Route path="giris-yap" element={<LoginRegister/>}/>
                    <Route path="cikis" element={<Logout/>}/>
                    <Route path="arac-detay/:id" element={<VehicleDetail/>}/>
                    <Route path="hakkimizda" element={<About/>}/>
                    <Route path="iletisim" element={<Contact/>}/>
                </Route>
                <Route
                    path="/admin"
                    element={<AdminLayout/>}>
                    <Route index element={<AdminHomePage/>}/>
                    <Route path="araclar" element={<AdminVehicles/>}/>
                    <Route path="araclar/arac-ekle" element={<AdminVehicleDetail/>}/>
                    <Route path="araclar/arac-duzenle/:id" element={<AdminVehicleDetail/>}/>
                    <Route path="kullanicilar" element={<UserList/>}/>
                    <Route path="hesabim" element={<Account/>}/>
                    <Route path="slider" element={<AdminSliders/>}/>
                    <Route path="slider/slider-ekle" element={<SliderDetail/>}/>
                    <Route path="slider/slider-duzenle/:id" element={<SliderDetail/>}/>
                    <Route path="araba-ozellikleri/marka" element={<Brands/>}/>
                    <Route path="araba-ozellikleri/marka/marka-ekle" element={<BrandDetail/>}/>
                    <Route path="araba-ozellikleri/marka/marka-duzenle/:id" element={<BrandDetail/>}/>
                    <Route path="araba-ozellikleri/model" element={<Models/>}/>
                    <Route path="araba-ozellikleri/model/model-ekle" element={<ModelDetail/>}/>
                    <Route path="araba-ozellikleri/model/model-duzenle/:id" element={<ModelDetail/>}/>
                    <Route path="araba-ozellikleri/vites" element={<Transmissions/>}/>
                    <Route path="araba-ozellikleri/vites/vites-ekle" element={<TransmissionDetail/>}/>
                    <Route path="araba-ozellikleri/vites/vites-duzenle/:id" element={<TransmissionDetail/>}/>
                    <Route path="araba-ozellikleri/yakit" element={<Fuels/>}/>
                    <Route path="araba-ozellikleri/yakit/yakit-ekle" element={<FuelDetail/>}/>
                    <Route path="araba-ozellikleri/yakit/yakit-duzenle/:id" element={<FuelDetail/>}/>
                    <Route path="araba-ozellikleri/renk" element={<Colors/>}/>
                    <Route path="araba-ozellikleri/renk/renk-ekle" element={<ColorDetail/>}/>
                    <Route path="araba-ozellikleri/renk/renk-duzenle/:id" element={<ColorDetail/>}/>
                </Route>
            </RouterRoutes>
        </>
    );
};

export default Routes;
