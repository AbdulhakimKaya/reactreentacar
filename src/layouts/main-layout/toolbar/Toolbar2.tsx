import React, {useEffect, useState} from 'react';
import logo from '../../../assets/images/RentACarLogo.jpg'
import useIsMobile from "../../../hooks/useIsMobile";
import {Link, useLocation} from "react-router-dom";
import {Button, ConfigProvider, Drawer, Flex, Menu} from "antd";
import classNames from "classnames";
import {IoMenuSharp} from "react-icons/io5";

function Toolbar2() {
    const isSmallScreen = useIsMobile(768);
    const [drawerVisible, setDrawerVisible] = useState(false);
    const {pathname} = useLocation();
    const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);

    const items = [
        {
            label: "Anasayfa",
            key: 0,
            url: '/',
        },
        {
            label: "Araçlar",
            key: 5,
            url: '/araclar',
        },
        {
            label: <div>Bizi Tanıyın</div>,
            key: 1,
            children: [
                {
                    label: "Rent a Car",
                    key: 11,
                    url: '/hakkimizda',
                },
                {
                    label: "Haberler",
                    key: 12,
                    url: '/haberler',
                },
            ],
        },
        {
            label: "Hakkımızda",
            key: 6,
            url: '/hakkimizda',
        },
        {
            label: <div>İletişim</div>,
            key: 4,
            url: '/iletisim',
        },
    ];

    const [current, setCurrent] = useState("0");

    useEffect(() => {
        const firstPathSegment = pathname.split('/')[1];
        const a = '/' + firstPathSegment;
        const activeMenuItem = items.reduce((acc: any, curr) => {
            if (curr.url === a) {
                return curr;
            } else if (curr.children) {
                const childItem = curr.children.find((child) => child.url === a);
                if (childItem) return childItem;
            }
            return acc;
        }, null);

        const activeMenuItemKey = activeMenuItem ? activeMenuItem.key : null;
        setSelectedKeys([activeMenuItemKey]);
    }, [pathname]);
    console.log(selectedKeys)

    const handleDrawerOpen = () => {
        setDrawerVisible(true); // Drawer'ı aç
    };

    const handleDrawerClose = () => {
        setDrawerVisible(false);
    };

    return (
        <div>
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
                    <ConfigProvider theme={{
                        // components: {
                        //     Menu: {
                        //         itemBg: "transparent", // ana başlığın bg
                        //         itemColor: "rgba(202, 202, 202, 1)", // bütün başlıkların color
                        //         horizontalItemSelectedBg: "rgba(41, 41, 41, 1)", // seçilen ana başlığın bg
                        //         horizontalItemSelectedColor: "#ffffff", // seçilen ana başlığın color
                        //         horizontalItemBorderRadius: 8, // seçilen ana başlık radius
                        //         subMenuItemBorderRadius: 8,
                        //         popupBg: "rgba(41, 41, 41, 1)", // dropdown bg
                        //         itemSelectedBg: "#000000", // dropdown içinde seçilen başlığın bg
                        //         itemSelectedColor: "#ffffff", // dropdown içinde seçilen başlığın color
                        //         itemHoverBg: "rgba(0, 0, 0, 1)", // dropdown içindeki başlık hover olduğunda bg
                        //         itemHoverColor: "#ffffff", // dropdown içindeki başlık hover olduğunda color
                        //         itemActiveBg: "#000000", // dropdown içinde seçilen başlık bg
                        //         itemPaddingInline: 24, // ana başlıklar arası padding
                        //         itemMarginInline: 16, // dropdown içindeki başlıkların x ekseni margin
                        //         itemMarginBlock: 8, // dropdown içindeki başlıkların y ekseni margin
                        //         fontSize: 16,
                        //         fontFamily: "Poppins, sans-serif",
                        //     },
                        // },
                    }}>
                        <div className="flex items-center">
                            <Menu
                                mode="horizontal"
                                className={"toolbar-theme"}
                                forceSubMenuRender={true}
                                selectedKeys={selectedKeys}
                                disabledOverflow={true}
                            >
                                {items.map((item) =>
                                    item.children ? (
                                        <Menu.SubMenu
                                            key={item.key}
                                            title={item.label}
                                            className={` ${selectedKeys.includes(item.key.toString()) ? 'active' : ''}`}
                                        >
                                            {item.children.map((subItem) => (
                                                <Menu.Item
                                                    key={subItem.key}
                                                >
                                                    <Link className="menu-link" to={subItem.url!}>
                                                        {subItem.label}
                                                    </Link>
                                                </Menu.Item>
                                            ))}
                                        </Menu.SubMenu>
                                    ) : (
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
                    theme={{
                        // components: {
                        //     Menu: {
                        //         itemBg: "transparent",
                        //         itemColor: "rgba(202, 202, 202, 1)",
                        //         itemSelectedBg: "#000000",
                        //         itemActiveBg: "#000000",
                        //         itemSelectedColor: "#ffffff",
                        //         itemHoverColor: "#ffffff",
                        //         itemHoverBg: "#000000",
                        //         fontSize: 18,
                        //     },
                        //     Drawer: {
                        //         colorBgElevated: "rgba(41, 41, 41, 1)",
                        //         colorIcon: "#ffffff",
                        //         colorIconHover: "#ffffff",
                        //     },
                        //     Button: {
                        //         defaultBg: "transparent",
                        //         defaultBorderColor: "transparent",
                        //         defaultColor: "#ffffff",
                        //         defaultHoverBg: "transparent",
                        //         defaultHoverBorderColor: "transparent",
                        //         defaultHoverColor: "#ffffff",
                        //         defaultActiveBg: "transparent",
                        //         defaultActiveBorderColor: "transparent",
                        //         defaultActiveColor: "#ffffff",
                        //         onlyIconSize: 24,
                        //     },
                        // },
                    }}
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
                            // onClick={onClick}
                            selectedKeys={[current]}
                            mode="inline"
                            className={"toolbar-theme"}
                            forceSubMenuRender={true}
                            disabledOverflow={true}
                        >
                            {items.map((item) =>
                                item.children ? (
                                    <Menu.SubMenu
                                        key={item.key}
                                        title={item.label}
                                        className="memu-item has-submenu"
                                    >
                                        {item.children.map((subItem) => (
                                            <Menu.Item key={subItem.key}>
                                                <Link className="menu-link" to={subItem.url!}>
                                                    {subItem.label}
                                                </Link>
                                            </Menu.Item>
                                        ))}
                                    </Menu.SubMenu>
                                ) : (
                                    <Menu.Item key={item.key}>
                                        <Link className="menu-link" to={item.url}>
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

export default Toolbar2;