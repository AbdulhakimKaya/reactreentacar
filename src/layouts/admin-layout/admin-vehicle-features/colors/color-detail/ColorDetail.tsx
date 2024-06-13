import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchDataDetail} from "../../../../../hooks/getData";
import isNumeric from "antd/es/_util/isNumeric";
import Color from "../type";
import ColorForm from "../color-form/ColorForm";

const ColorDetail = () => {
    const {id} = useParams(); // useParams ile URL'den gelen id'yi aldık
    const [isFetch, setIsFetch] = useState(true);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState<Color>();
    const endpoint = `http://localhost:5039/api/Colors/${id}`
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchDataDetail(endpoint);
                setIsFetch(false);
                setColor(data?.data);
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
                <ColorForm
                />
            )}{' '}
            {/* Boş form */}
            {id && !loading && (
                <ColorForm
                    id={id}
                    colorData={color}
                />
            )}{' '}
            {/* Asıl form */}
        </>
    );
};

export default ColorDetail;