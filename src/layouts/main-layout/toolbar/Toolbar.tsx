import React, {useEffect, useState} from 'react';
import logo from '../../../assets/images/RentACarLogo.jpg'
import useIsMobile from "../../../hooks/useIsMobile";
import {Link, useLocation} from "react-router-dom";
import {Button, ConfigProvider, Drawer, Flex, Menu, MenuProps} from "antd";
import classNames from "classnames";
import {IoMenuSharp} from "react-icons/io5";
import {ToolbarMenuItems} from "../../../mock/ToolbarMenuItems";



function Toolbar() {
    const classes = classNames("db-toolbar");
    const menuItems = ToolbarMenuItems

    const isSmallScreen = useIsMobile(768);
    const [drawerVisible, setDrawerVisible] = useState(false);
    const { pathname } = useLocation();
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

    useEffect(() => {
        const currentMenuItem = menuItems.find(item => item.url === pathname);
        if (currentMenuItem) {
            setSelectedKeys([currentMenuItem.key.toString()]);
        }
    }, [pathname]);

    const handleDrawerOpen = () => {
        setDrawerVisible(true);
    };

    const handleDrawerClose = () => {
        setDrawerVisible(false);
    };

    return (
        <div className={classes}>
            {!isSmallScreen ? (
                <div className="flex justify-between max-w-[1280px] mx-auto pt-5 pb-10">
                    <div className="flex items-center">
                        <Link to="/">
                            <img
                                src={logo}
                                className="w-[120px]"
                                alt="DerinBilgiSistemleriLogo"
                            />
                        </Link>
                    </div>
                    <ConfigProvider theme={{}}>
                        <div className="flex items-center">
                            <Menu
                                mode="horizontal"
                                className={"toolbar-theme"}
                                forceSubMenuRender={true}
                                selectedKeys={selectedKeys}
                                disabledOverflow={true}
                            >
                                {menuItems.map((item) =>
                                    (
                                        <Menu.Item
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
                    </ConfigProvider>
                </div>
            ) : (
                <ConfigProvider
                    theme={{}}
                >
                    <Flex justify={"start"} align={"center"}>
                        {/*<Link to="/">*/}
                        {/*    <img*/}
                        {/*        src={logo}*/}
                        {/*        className="toolbar-logo"*/}
                        {/*        alt="DerinBilgiSistemleriLogo"*/}
                        {/*    />*/}
                        {/*</Link>*/}
                    </Flex>
                    <Button
                        type="default"
                        icon={<IoMenuSharp/>}
                        onClick={handleDrawerOpen}
                        className="toggle-button"
                    />
                    <Drawer
                        placement="left"
                        closable={true}
                        onClose={handleDrawerClose}
                        open={drawerVisible}
                    >
                        <Menu
                            selectedKeys={selectedKeys}
                            mode="inline"
                            className={"toolbar-theme"}
                            forceSubMenuRender={true}
                            disabledOverflow={true}
                        >
                            {menuItems.map((item) =>
                                (
                                    <Menu.Item key={item.key}>
                                        <Link className="menu-link" to={item.url} onClick={() => setDrawerVisible(false)}>
                                            {item.label}
                                        </Link>
                                    </Menu.Item>
                                )
                            )}
                        </Menu>
                    </Drawer>
                </ConfigProvider>
            )}
        </div>
    );
}

export default Toolbar;