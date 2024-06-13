import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchDataDetail} from "../../../../../hooks/getData";
import isNumeric from "antd/es/_util/isNumeric";
import Transmission from "../type";
import TransmissionForm from "../transmission-form/TransmissionForm";

const TransmissionDetail = () => {
    const {id} = useParams(); // useParams ile URL'den gelen id'yi aldık
    const [isFetch, setIsFetch] = useState(true);
    const [loading, setLoading] = useState(true);
    const [transmission, setTransmission] = useState<Transmission>();
    const endpoint = `http://localhost:5039/api/Transmissions/${id}`
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchDataDetail(endpoint);
                setIsFetch(false);
                setTransmission(data?.data);
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
                <TransmissionForm
                />
            )}{' '}
            {/* Boş form */}
            {id && !loading && (
                <TransmissionForm
                    id={id}
                    transmissionData={transmission}
                />
            )}{' '}
            {/* Asıl form */}
        </>
    );
};

export default TransmissionDetail;