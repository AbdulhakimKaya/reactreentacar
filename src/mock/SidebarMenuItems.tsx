import React from "react";
import {
    AppstoreOutlined,
    CarOutlined,
    ContactsOutlined,
    FileTextOutlined,
    FilterOutlined,
    PicCenterOutlined,
    RollbackOutlined,
    TeamOutlined,
    UserOutlined
} from "@ant-design/icons";


export const SidebarMenuItems = [
    {
        key: 'admin-anasayfa',
        icon: <AppstoreOutlined/>,
        label: 'Anasayfa',
        url: '/admin'
    },
    {
        key: 'admin-araclar',
        icon: <CarOutlined/>,
        label: 'Araçlar',
        url: '/admin/araclar'
    },
    {
        key: 'admin-filtreler',
        icon: <FilterOutlined/>,
        label: 'Filtreler',
        url: '/admin/filtreler'
    },
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
    {
        key: 'admin-slaytlar',
        icon: <PicCenterOutlined/>,
        label: "Anasayfa Slayt'lar",
        url: '/admin/slaytlar'
    },
    {
        key: 'admin-hakkimizda',
        icon: <FileTextOutlined/>,
        label: 'Hakkımızda Sayfası İçeriği',
        url: '/admin/hakkimizda'
    },
    {
        key: 'admin-iletisim',
        icon: <ContactsOutlined/>,
        label: 'İletişim Sayfası İçeriği',
        url: '/admin/iletisim'
    },
    {
        key: 'geri-don',
        icon: <RollbackOutlined/>,
        label: "Siteye Geri Dön",
        url: '/'
    },
]