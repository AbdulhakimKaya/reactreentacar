import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import isNumeric from 'antd/es/_util/isNumeric';
import {fetchDataDetail} from "../../../../../hooks/getData";
import BrandForm from "../brand-form/BrandForm";
import Brand from "../type";

const BrandDetail: React.FC = () => {
    const {id} = useParams(); // useParams ile URL'den gelen id'yi aldık
    const [isFetch, setIsFetch] = useState(true);
    const [loading, setLoading] = useState(true);
    const [brand, setBrand] = useState<Brand>();
    const endpoint = `http://localhost:5039/api/Brands/${id}`
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchDataDetail(endpoint);
                setIsFetch(false);
                setBrand(data?.data);
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
                <BrandForm
                />
            )}{' '}
            {/* Boş form */}
            {id && !loading && (
                <BrandForm
                    id={id}
                    brandData={brand}
                />
            )}{' '}
            {/* Asıl form */}
        </>
    );
};

export default BrandDetail;
