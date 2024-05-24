import React from 'react';
import './Sidebar.scss'
import classNames from "classnames";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from "@ant-design/icons";
import {Button, Menu, MenuProps} from "antd";
import {SidebarMenuItems} from "../../../mock/SidebarMenuItems";


type MenuItem = Required<MenuProps>['items'][number];



interface SidebarProps {
    collapsed: boolean,
    toggleCollapsed: () => void;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    const items: MenuItem[] = SidebarMenuItems

    const {collapsed, toggleCollapsed} = props
    const classes = classNames("db-sidebar")

    return (
        <div className={classes}>
            <div>
                <Button type="default" onClick={toggleCollapsed} className="mb-4 ml-1 toggle-button">
                    {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['1']}
                    mode="inline"
                    inlineCollapsed={collapsed}
                    items={items}
                />
            </div>
        </div>
    );
};

export default Sidebar;