import MainLayout from "../layouts/main-layout/MainLayout";
import {createBrowserRouter} from "react-router-dom";
import VehicleList from "../layouts/main-layout/vehicle-list/VehicleList";
import VehicleDetail from "../layouts/main-layout/vehicle-detail/VehicleDetail";
import HomePage from "../layouts/main-layout/home-page/HomePage";
import About from "../layouts/main-layout/about/About";
import AdminLayout from "../layouts/admin-layout/AdminLayout";
import Contact from "../layouts/main-layout/contact/Contact";
import LoginRegister from "../layouts/main-layout/login-register/LoginRegister";

const routes = createBrowserRouter([
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
                element: "admin main"
            },
            {
                path: "test",
                element: <VehicleDetail/>
            }
        ]
    }
])

export default routes