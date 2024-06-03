import React from 'react';
import './AddVehicle.scss'
import classNames from "classnames";
import {Link} from "react-router-dom";
import {LeftCircleOutlined} from "@ant-design/icons";

const AddVehicle = () => {
    const classes = classNames("db-add-vehicle")

    return (
        <div className={classes}>
            <div>
                <Link to={"/admin/araclar"} className="db-add-vehicle-back-button">
                    <LeftCircleOutlined/>
                    Tüm Araçlar
                </Link>
            </div>
        </div>
    );
};

export default AddVehicle;