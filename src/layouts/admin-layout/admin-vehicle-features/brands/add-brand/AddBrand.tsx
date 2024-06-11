import React from 'react';
import '../../AdminVehicleFeatures.scss'
import AdminVehicleFeatures from "../../AdminVehicleFeatures";
import {Link} from "react-router-dom";
import {LeftCircleOutlined} from "@ant-design/icons";

const AddBrand = () => {
    return (
        <div>
            <div>
                <Link to={"/admin/araba-ozellikleri/marka"}
                      className="back-button flex items-center gap-2 w-max text-base font-semibold pb-8"
                >
                    <LeftCircleOutlined/>
                    Tüm Markalar
                </Link>
            </div>
            <AdminVehicleFeatures formName="brandForm" name="brand" label="Marka"/>
        </div>
    );
};

export default AddBrand;