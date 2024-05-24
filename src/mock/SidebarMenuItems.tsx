import {Link} from "react-router-dom";
import React from "react";
import {
    AppstoreOutlined,
    CarOutlined,
    FilterOutlined,
    MailOutlined,
    RollbackOutlined, UserOutlined
} from "@ant-design/icons";


export const SidebarMenuItems = [
    {
        key: '1',
        icon: <CarOutlined/>,
        label: 'Araçlar'
    },
    {
        key: '2',
        icon: <FilterOutlined/>,
        label: 'Filtreler'
    },
    {
        key: '3',
        icon: <UserOutlined/>,
        label: 'Hesabım'
    },
    {
        key: 'sub1',
        label: 'Navigation One',
        icon: <MailOutlined/>,
        children: [
            {
                key: '5',
                label: 'Option 5'
            },
            {
                key: '6',
                label: 'Option 6'
            },
            {
                key: '7',
                label: 'Option 7'
            },
            {
                key: '8',
                label: 'Option 8'
            },
        ],
    },
    {
        key: 'sub2',
        label: 'Navigation Two',
        icon: <AppstoreOutlined/>,
        children: [
            {
                key: '9',
                label: 'Option 9'
            },
            {
                key: '10',
                label: 'Option 10'
            },
            {
                key: 'sub3',
                label: 'Submenu',
                children: [
                    {
                        key: '11',
                        label: 'Option 11'
                    },
                    {
                        key: '12',
                        label: 'Option 12'
                    },
                ],
            },
        ],
    },
    {
        key: '13',
        icon: <RollbackOutlined/>,
        label: <Link to={"/"}>Siteye Geri Dön</Link>
    },
]