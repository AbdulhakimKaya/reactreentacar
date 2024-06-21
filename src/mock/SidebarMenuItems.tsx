import React from "react";
import {
    AppstoreAddOutlined,
    BgColorsOutlined,
    CarOutlined,
    GlobalOutlined,
    HomeOutlined,
    LogoutOutlined,
    PicCenterOutlined,
    RollbackOutlined,
    TeamOutlined,
    UserOutlined
} from "@ant-design/icons";
import {BsFillFuelPumpFill} from "react-icons/bs";
import {TbManualGearbox} from "react-icons/tb";


export interface MenuItem {
    key: string;
    label: string;
    url?: string;
    icon?: JSX.Element;
    children?: MenuItem[];
}

export const SidebarMenuItems: MenuItem[] = [
    {
        key: 'admin-anasayfa',
        icon: <HomeOutlined/>,
        label: 'Anasayfa',
        url: '/admin'
    },
    {
        key: 'admin-araclar',
        icon: <CarOutlined/>,
        label: 'Araçlar',
        url: '/admin/araclar'
    },
    // {
    //     key: 'admin-filtreler',
    //     icon: <FilterOutlined/>,
    //     label: 'Filtreler',
    //     url: '/admin/filtreler'
    // },
    {
        key: 'admin-kullanicilar',
        icon: <TeamOutlined/>,
        label: 'Kullanıcılar',
        url: '/admin/kullanicilar'
    },
    {
        key: 'admin-hesabim',
        icon: <UserOutlined/>,
        label: 'Hesabım',
        url: '/admin/hesabim'
    },
    // {
    //     key: 'icerik-yonetimi',
    //     icon: <AppstoreAddOutlined/>,
    //     label: "İçerik Yönetimi",
    //     children: [
    {
        key: 'admin-slaytlar',
        icon: <PicCenterOutlined/>,
        label: "Anasayfa Slayt'lar",
        url: '/admin/icerik-yonetimi/slaytlar'
    },
    // {
    //     key: 'admin-hakkimizda',
    //     icon: <FileTextOutlined/>,
    //     label: 'Hakkımızda Sayfası',
    //     url: '/admin/icerik-yonetimi/hakkimizda'
    // },
    // {
    //     key: 'admin-iletisim',
    //     icon: <ContactsOutlined/>,
    //     label: 'İletişim Sayfası',
    //     url: '/admin/icerik-yonetimi/iletisim'
    // },
    // ]
    // },
    // {
    // key: 'araba-ozellikleri',
    // label: 'Araba Özellikleri',
    // icon: <ToolOutlined/>,
    // children: [
    {
        key: 'marka',
        label: 'Marka',
        icon: <GlobalOutlined/>,
        url: '/admin/araba-ozellikleri/marka'
    },
    {
        key: 'model',
        label: 'Model',
        icon: <AppstoreAddOutlined/>,
        url: '/admin/araba-ozellikleri/model'
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
    //     ],
    // },
    {
        key: 'cikis-yap',
        icon: <LogoutOutlined/>,
        label: "Çıkış Yap",
        url: '/'
    },
    {
        key: 'geri-don',
        icon: <RollbackOutlined/>,
        label: "Siteye Geri Dön",
        url: '/'
    },
]