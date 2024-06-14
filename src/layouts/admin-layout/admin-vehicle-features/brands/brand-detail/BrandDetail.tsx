import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {fetchDataDetail} from "../../../../../hooks/getData";
import BrandForm from "../brand-form/BrandForm";
import Brand from "../type";
import {LoadingOutlined} from "@ant-design/icons";

const BrandDetail: React.FC = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [brand, setBrand] = useState<Brand | null>(null);
    const endpoint = `http://localhost:5039/api/Brands/${id}`;

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchDataDetail(endpoint);
                setBrand(data?.data);
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
                <BrandForm
                    id={id}
                    brandData={brand}
                />
            )}
        </>
    );
};

export default BrandDetail;
