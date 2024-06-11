import React, {useEffect, useState} from 'react';
import './Sidebar.scss';
import classNames from 'classnames';
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import {Button, Menu} from 'antd';
import {MenuItem, SidebarMenuItems} from '../../../mock/SidebarMenuItems';
import {Link, useLocation} from 'react-router-dom';

interface SidebarProps {
    collapsed: boolean;
    toggleCollapsed: () => void;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    const items: MenuItem[] = SidebarMenuItems;

    const {collapsed, toggleCollapsed} = props;
    const classes = classNames('db-sidebar');

    const {pathname} = useLocation();
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

    useEffect(() => {
        // Find the item with the longest URL prefix matching the current pathname
        const currentMenuItem = items.reduce<MenuItem | null>((longestMatch, item) => {
            return pathname.startsWith(item.url || '') && (item.url || '').length > (longestMatch?.url?.length || 0)
                ? item
                : longestMatch;
        }, null);

        if (currentMenuItem) {
            setSelectedKeys([currentMenuItem.key]);
        }
    }, [pathname, items]);

    const renderMenuItems = (menuItems: MenuItem[]) => {
        return menuItems.map((item) => {
            if (item.children) {
                return (
                    <Menu.SubMenu
                        key={item.key}
                        icon={item.icon}
                        title={item.label}
                    >
                        {renderMenuItems(item.children)}
                    </Menu.SubMenu>
                );
            } else {
                return (
                    <Menu.Item
                        key={item.key}
                        icon={item.icon}
                    >
                        <Link to={item.url!}>
                            {item.label}
                        </Link>
                    </Menu.Item>
                );
            }
        });
    };

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
                    {renderMenuItems(items)}
                </Menu>
            </div>
        </div>
    );
};

export default Sidebar;
