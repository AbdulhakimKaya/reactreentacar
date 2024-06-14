import React from 'react';
import './AdminHomePage.scss'
import classNames from "classnames";

const AdminHomePage = () => {
    const classes = classNames("db-admin-home-page")
    return (
        <div className={classes}>
            hoşgeldiniz kullanıcı ismi <br/>
            araç sayısı <br/>
            müsait araç sayısı <br/>
            müsait olmayan <br/>
            rezerve olan <br/>
        </div>
    );
};

export default AdminHomePage;