import React from "react";
import {
    AppstoreAddOutlined,
    BgColorsOutlined,
    CarOutlined,
    GlobalOutlined,
    LogoutOutlined,
    PicCenterOutlined,
    RollbackOutlined,
    TeamOutlined
} from "@ant-design/icons";
import {BsFillFuelPumpFill} from "react-icons/bs";
import {TbManualGearbox} from "react-icons/tb";


export interface MenuItem {
    key: string;
    label: string;
    url?: string;
    icon?: JSX.Element;
    onClick?: () => void;
    children?: MenuItem[];
}

export const SidebarMenuItems: MenuItem[] = [
    // Admin Home Page
    // {
    //     key: 'admin-anasayfa',
    //     icon: <HomeOutlined/>,
    //     label: 'Anasayfa',
    //     url: '/admin'
    // },

    // Vehicles
    {
        key: 'admin-araclar',
        icon: <CarOutlined/>,
        label: 'Araçlar',
        url: '/admin/araclar'
    },

    // Vehicle Features
    {
        key: 'model',
        label: 'Model',
        icon: <AppstoreAddOutlined/>,
        url: '/admin/araba-ozellikleri/model'
    },
    {
        key: 'marka',
        label: 'Marka',
        icon: <GlobalOutlined/>,
        url: '/admin/araba-ozellikleri/marka'
    },
    {
        key: 'vites',
        label: 'Vites Tipi',
        icon: <div><TbManualGearbox/></div>,
        url: '/admin/araba-ozellikleri/vites'
    },
    {
        key: 'yakit',
        label: 'Yakıt Tipi',
        icon: <div><BsFillFuelPumpFill/></div>,
        url: '/admin/araba-ozellikleri/yakit'
    },
    {
        key: 'renk',
        label: 'Renk',
        icon: <BgColorsOutlined/>,
        url: '/admin/araba-ozellikleri/renk'
    },

    // Content Management
    {
        key: 'admin-slaytlar',
        icon: <PicCenterOutlined/>,
        label: "Anasayfa Slayt'lar",
        url: '/admin/slider'
    },

    // Account Management
    {
        key: 'admin-kullanicilar',
        icon: <TeamOutlined/>,
        label: 'Kullanıcılar',
        url: '/admin/kullanicilar'
    },
    // {
    //     key: 'admin-hesabim',
    //     icon: <UserOutlined/>,
    //     label: 'Hesabım',
    //     url: '/admin/hesabim'
    // },

    // Back to Website
    {
        key: 'siteye-geri-don',
        icon: <RollbackOutlined/>,
        label: "Siteye Geri Dön",
        url: '/'
    },

    // Logout
    {
        key: 'cikis-yap',
        icon: <LogoutOutlined/>,
        label: "Çıkış Yap",
        onClick: () => {
            sessionStorage.clear();
        }
    },
]