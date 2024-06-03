import React, {useState} from 'react';
import './AdminLayout.scss'
import Sidebar from "./sidebar/Sidebar";
import classNames from "classnames";
import {Col, Row} from "antd";
import {Outlet} from "react-router-dom";
import useIsMobile from "../../hooks/useIsMobile";
import {Container} from "reactstrap";

const AdminLayout = () => {
    const classes = classNames("db-admin-layout")
    const isSmallScreen = useIsMobile(768)

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={classes}>
            <Row className={classes} wrap={false}>
                {/* responsive tasarım için isSmallScreen ise 0 yapıp Sidebar'a Drawer eklenecek */}
                <Col style={{width: isSmallScreen ? 320 : collapsed ? 120 : 320}}>
                    <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed}/>
                </Col>
                <Col flex={'auto'}>
                    <Container tag="main">
                        <div className="content-main">
                            <div
                                className="rounded-xl p-8 bg-white max-h-[calc(100vh-90px)] opacity-100 overflow-auto">
                                <Outlet/>
                            </div>
                        </div>
                    </Container>
                </Col>
            </Row>
        </div>
    );
};

export default AdminLayout;