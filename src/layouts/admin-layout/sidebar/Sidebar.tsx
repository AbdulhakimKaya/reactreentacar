import React, {useEffect, useState} from 'react';
import './Sidebar.scss'
import classNames from "classnames";
import {MenuFoldOutlined, MenuUnfoldOutlined,} from "@ant-design/icons";
import {Button, Menu} from "antd";
import {SidebarMenuItems} from "../../../mock/SidebarMenuItems";
import {Link, useLocation} from "react-router-dom";


interface SidebarProps {
    collapsed: boolean,
    toggleCollapsed: () => void;
}

interface MenuItem {
    key: string;
    icon: React.ReactNode;
    label: string;
    url: string;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    const items: MenuItem[] = SidebarMenuItems

    const {collapsed, toggleCollapsed} = props
    const classes = classNames("db-sidebar")

    const {pathname} = useLocation();
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

    useEffect(() => {
        // Find the item with the longest URL prefix matching the current pathname
        const currentMenuItem = items.reduce<MenuItem | null>((longestMatch, item) => {
            return pathname.startsWith(item.url) && item.url.length > (longestMatch?.url.length || 0)
                ? item
                : longestMatch;
        }, null);

        if (currentMenuItem) {
            setSelectedKeys([currentMenuItem.key.toString()]);
        }
    }, [pathname, items]);

    return (
        <div className={classes}>
            <div>
                <Button type="default" onClick={toggleCollapsed} className="mb-4 toggle-button">
                    {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                </Button>
                <Menu
                    mode="inline"
                    inlineCollapsed={collapsed}
                    forceSubMenuRender={true}
                    selectedKeys={selectedKeys}
                    disabledOverflow={true}
                    defaultValue={"1"}
                    className="rounded-xl min-h-[calc(100vh-90px)]"
                >
                    {items.map((item) =>
                        (
                            <Menu.Item
                                icon={item.icon}
                                key={item.key}
                            >
                                <Link className="menu-link" to={item.url}>
                                    {item.label}
                                </Link>
                            </Menu.Item>
                        )
                    )}
                </Menu>
            </div>
        </div>
    );
};

export default Sidebar;