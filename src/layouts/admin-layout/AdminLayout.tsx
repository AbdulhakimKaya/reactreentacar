import React, {useState} from 'react';
import './AdminLayout.scss'
import Sidebar from "./sidebar/Sidebar";
import classNames from "classnames";
import {Col, Row} from "antd";
import {Outlet} from "react-router-dom";
import {Container} from "reactstrap";

const AdminLayout = () => {
    const classes = classNames("db-admin-layout")

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={`${classes} p-5 min-h-[calc(100vh - 20px);]:`}>
            <Row className={classes} wrap={false}>
                {/* responsive tasarım için isSmallScreen ise 0 yapıp Sidebar'a Drawer eklenecek */}
                <Col style={{minWidth: collapsed ? 120 : 320}}>
                    <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed}/>
                </Col>
                <Col flex={'auto'}>
                    <Container tag="main">
                        <div className="content-main pt-12 overflow-auto rounded-lg bg-[#f7f7fa]">
                            <div
                                className="rounded-xl p-8 bg-white h-[calc(100vh-90px)] overflow-auto">
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