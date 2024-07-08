import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchDataDetail} from "../../../../hooks/getData";
import {LoadingOutlined} from "@ant-design/icons";
import SliderForm from "../slider-form/SliderForm";
import SliderType from "../../../main-layout/home-page/home-slider/type";

const SliderDetail = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [slider, setSlider] = useState<SliderType | null>(null);
    const endpoint = `http://localhost:5039/api/Sliders/${id}`;

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchDataDetail(endpoint);
                setSlider(data?.data);
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
                <SliderForm
                    id={id}
                    sliderData={slider}
                />
            )}
        </>
    );
};

export default SliderDetail;