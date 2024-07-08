import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchDataDetail} from "../../../../hooks/getData";
import VehicleType from "../type";
import {LoadingOutlined} from "@ant-design/icons";
import AdminVehicleForm from "../admin-vehicle-form/AdminVehicleForm";

const AdminVehicleDetail = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [vehicle, setVehicle] = useState<VehicleType | null>(null);
    const endpoint = `http://localhost:5039/api/Cars/${id}`;

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchDataDetail(endpoint);
                setVehicle(data?.data);
                setLoading(false);

                console.log(data?.data)
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        if (id) {
            getData();
        } else {
            setLoading(false);
        }
    }, [id, endpoint]);

    return (
        <>
            {loading ? (
                <div>
                    <LoadingOutlined/>
                </div>
            ) : (
                <AdminVehicleForm
                    id={id}
                    vehicleData={vehicle}
                />
            )}
        </>
    );
};

export default AdminVehicleDetail;