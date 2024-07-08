import {LogoutOutlined, UserOutlined} from "@ant-design/icons";

interface MenuItem {
    key: string;
    label: string | JSX.Element;
    url: string;
}

const getToolbarMenuItems = (): MenuItem[] => {
    const items: MenuItem[] = [
        {
            key: 'anasayfa',
            label: "Anasayfa",
            url: '/',
        },
        {
            key: 'araclar',
            label: "Araçlar",
            url: '/araclar',
        },
        {
            key: 'hakkimizda',
            label: "Hakkımızda",
            url: '/hakkimizda',
        },
        {
            key: 'iletisim',
            label: "İletişim",
            url: '/iletisim',
        },
    ];

    const adminToken = sessionStorage.getItem('accessToken');
    if (adminToken) {
        items.push({
            key: 'admin',
            label: "Admin",
            url: '/admin/araclar',
        });

        items.push({
            key: 'cikis',
            label: <div><LogoutOutlined/> Çıkış Yap</div>,
            url: '/cikis',
        });
    } else {
        items.push({
            key: 'giris',
            label: <div><UserOutlined/> Üyelik</div>,
            url: '/giris-yap',
        });
    }

    return items;
};

export const ToolbarMenuItems = getToolbarMenuItems();
