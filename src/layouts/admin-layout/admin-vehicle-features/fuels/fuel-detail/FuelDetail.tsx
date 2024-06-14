import React, {useEffect, useState} from 'react';
import FuelForm from "../fuel-form/FuelForm";
import {useParams} from "react-router-dom";
import {fetchDataDetail} from "../../../../../hooks/getData";
import Fuel from "../type";
import {LoadingOutlined} from "@ant-design/icons";

const FuelDetail = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [fuel, setFuel] = useState<Fuel | null>(null);
    const endpoint = `http://localhost:5039/api/Fuels/${id}`

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchDataDetail(endpoint);
                setFuel(data?.data);
                setLoading(false);
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
                <FuelForm
                    id={id}
                    fuelData={fuel}
                />
            )}
        </>
    );
};

export default FuelDetail;