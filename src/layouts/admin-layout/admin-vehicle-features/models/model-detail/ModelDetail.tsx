import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchDataDetail} from "../../../../../hooks/getData";
import Model from "../type";
import {LoadingOutlined} from "@ant-design/icons";
import ModelForm from "../model-form/ModelForm";

const ModelDetail = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [model, setModel] = useState<Model | null>(null);
    const endpoint = `http://localhost:5039/api/Models/${id}`

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchDataDetail(endpoint);
                setModel(data?.data);
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
                <ModelForm
                    id={id}
                    modelData={model}
                />
            )}
        </>
    );
};

export default ModelDetail;