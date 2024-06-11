import React from 'react';
import {Link} from "react-router-dom";
import {LeftCircleOutlined} from "@ant-design/icons";
import AdminVehicleFeatures from "../../AdminVehicleFeatures";

const AddColor = () => {
    return (
        <div>
            <div>
                <Link to={"/admin/araba-ozellikleri/renk"}
                      className="back-button flex items-center gap-2 w-max text-base font-semibold pb-8"
                >
                    <LeftCircleOutlined/>
                    Tüm Renkler
                </Link>
            </div>
            <AdminVehicleFeatures formName="colorForm" name="color" label="Renk"/>
        </div>
    );
};

export default AddColor;