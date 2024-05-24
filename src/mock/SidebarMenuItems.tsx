import React from "react";
import {
    AppstoreOutlined,
    CarOutlined,
    ContactsOutlined,
    FileTextOutlined,
    FilterOutlined,
    PicCenterOutlined,
    RollbackOutlined,
    UserOutlined
} from "@ant-design/icons";


export const SidebarMenuItems = [
    {
        key: '0',
        icon: <AppstoreOutlined/>,
        label: 'Anasayfa',
        url: '/admin'
    },
    {
        key: '1',
        icon: <CarOutlined/>,
        label: 'Araçlar',
        url: '/admin/araclar'
    },
    {
        key: '2',
        icon: <FilterOutlined/>,
        label: 'Filtreler',
        url: '/admin/filtreler'
    },
    {
        key: '3',
        icon: <UserOutlined/>,
        label: 'Hesabım',
        url: '/admin/hesabim'
    },
    {
        key: '4',
        icon: <PicCenterOutlined/>,
        label: "Anasayfa Slayt'lar",
        url: '/admin/slaytlar'
    },
    {
        key: '5',
        icon: <FileTextOutlined/>,
        label: 'Hakkımızda Sayfası İçeriği',
        url: '/admin/hakkimizda'
    },
    {
        key: '6',
        icon: <ContactsOutlined/>,
        label: 'İletişim Sayfası İçeriği',
        url: '/admin/iletisim'
    },
    {
        key: '10',
        icon: <RollbackOutlined/>,
        label: "Siteye Geri Dön",
        url: '/'
    },
]