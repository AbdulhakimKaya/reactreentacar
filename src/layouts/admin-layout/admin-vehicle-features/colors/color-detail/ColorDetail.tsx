import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {fetchDataDetail} from "../../../../../hooks/getData";
import {LoadingOutlined} from "@ant-design/icons";
import ColorForm from "../color-form/ColorForm";
import Color from "../type";

const BrandDetail: React.FC = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState<Color | null>(null);
    const endpoint = `http://localhost:5039/api/Colors/${id}`;

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchDataDetail(endpoint);
                setColor(data?.data);
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
                <ColorForm
                    id={id}
                    colorData={color}
                />
            )}
        </>
    );
};

export default BrandDetail;
