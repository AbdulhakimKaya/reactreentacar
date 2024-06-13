import React, {useEffect, useState} from 'react';
import FuelForm from "../fuel-form/FuelForm";
import {useParams} from "react-router-dom";
import {fetchDataDetail} from "../../../../../hooks/getData";
import isNumeric from "antd/es/_util/isNumeric";
import Fuel from "../type";

const FuelDetail = () => {
    const {id} = useParams(); // useParams ile URL'den gelen id'yi aldık
    const [isFetch, setIsFetch] = useState(true);
    const [loading, setLoading] = useState(true);
    const [fuel, setFuel] = useState<Fuel>();
    const endpoint = `http://localhost:5039/api/Fuels/${id}`
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchDataDetail(endpoint);
                setIsFetch(false);
                setFuel(data?.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        if (id === 'banner-ekle') {
            setLoading(false);
        }
        if (isFetch && isNumeric(id)) {
            getData();
        }
    }, [isFetch]);

    return (
        <>
            {(!id || (id && loading)) && (
                <FuelForm
                />
            )}{' '}
            {/* Boş form */}
            {id && !loading && (
                <FuelForm
                    id={id}
                    fuelData={fuel}
                />
            )}{' '}
            {/* Asıl form */}
        </>
    );
};

export default FuelDetail;