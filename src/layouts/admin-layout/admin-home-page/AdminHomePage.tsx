import React from 'react';
import './AdminHomePage.scss'
import classNames from "classnames";

const AdminHomePage = () => {
    const classes = classNames("db-admin-home-page")
    return (
        <div className={classes}>
            admin home page
        </div>
    );
};

export default AdminHomePage;