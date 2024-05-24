import React, {useState} from 'react';
import './AdminLayout.scss'
import Sidebar from "./sidebar/Sidebar";
import classNames from "classnames";
import {Col, Row} from "antd";
import {Outlet} from "react-router-dom";
import useIsMobile from "../../hooks/useIsMobile";
import {Container} from "reactstrap";
import Content from "./content/Content";

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
                <Col style={{width: isSmallScreen ? 0 : collapsed ? 120 : 280}}>
                    <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed}/>
                </Col>
                <Col flex={'auto'}>
                    <Container tag="main">
                    <div className="content-main">
                        <Content/>
                    </div>
                    </Container>
                </Col>
            </Row>
        </div>
    );
};

export default AdminLayout;