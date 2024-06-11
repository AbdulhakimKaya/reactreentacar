import React from 'react';
import {Link} from "react-router-dom";
import {LeftCircleOutlined} from "@ant-design/icons";
import AdminVehicleFeatures from "../../AdminVehicleFeatures";

const AddTransmission = () => {
    return (
        <div>
            <div>
                <Link to={"/admin/araba-ozellikleri/vites"}
                      className="back-button flex items-center gap-2 w-max text-base font-semibold pb-8"
                >
                    <LeftCircleOutlined/>
                    Tüm Vites Tipleri
                </Link>
            </div>
            <AdminVehicleFeatures formName="transmissionForm" name="transmission" label="Vites Tipi"/>
        </div>
    );
};

export default AddTransmission;