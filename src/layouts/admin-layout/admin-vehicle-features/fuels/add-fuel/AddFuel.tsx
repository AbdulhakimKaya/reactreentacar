import React from 'react';
import {Link} from "react-router-dom";
import {LeftCircleOutlined} from "@ant-design/icons";
import AdminVehicleFeatures from "../../AdminVehicleFeatures";

const AddFuel = () => {
    return (
        <div>
            <div>
                <Link to={"/admin/araba-ozellikleri/yakit"}
                      className="back-button flex items-center gap-2 w-max text-base font-semibold pb-8"
                >
                    <LeftCircleOutlined/>
                    Tüm Yakıt Tipleri
                </Link>
            </div>
            <AdminVehicleFeatures formName="fuelForm" name="fuel" label="Yakıt Tipi"/>
        </div>
    );
};

export default AddFuel;