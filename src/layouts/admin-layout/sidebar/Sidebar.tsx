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

const Sidebar: React.FC<SidebarProps> = (props) => {
    const items = SidebarMenuItems

    const {collapsed, toggleCollapsed} = props
    const classes = classNames("db-sidebar")

    const {pathname} = useLocation();
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

    useEffect(() => {
        const currentMenuItem = items.find(item => item.url === pathname);
        if (currentMenuItem) {
            setSelectedKeys([currentMenuItem.key.toString()]);
        }
    }, [pathname]);

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