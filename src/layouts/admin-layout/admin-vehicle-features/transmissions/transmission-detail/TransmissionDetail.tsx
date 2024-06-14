import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchDataDetail} from "../../../../../hooks/getData";
import Transmission from "../type";
import TransmissionForm from "../transmission-form/TransmissionForm";
import {LoadingOutlined} from "@ant-design/icons";

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
                setTransmission(data?.data);
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
                <TransmissionForm
                    id={id}
                    transmissionData={transmission}
                />
            )}
        </>
    );
};

export default TransmissionDetail;