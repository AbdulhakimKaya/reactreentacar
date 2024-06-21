import React, {useEffect, useState} from 'react';
import {fetchDataDetail} from "../../../../hooks/getData";
import DenemeType from "./type";

const Deneme = () => {
    const [models, setModels] = useState<DenemeType[]>([]);
    const endpoint = 'http://localhost:5039/api/Cars/getall';

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const data = await fetchDataDetail(endpoint);
                setModels(data?.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchBrands();
    }, []);

    return (
        <div>
            {
                models.map((item, index) => (
                    <div key={index}>
                        <div>{item.brandName}</div>
                        {
                            item.imagesRoot.map((i, ind) => (
                                <div key={ind}>
                                    <img
                                        src={`http://localhost:5039/images/${i}`}
                                        alt="Car Image"
                                    />
                                </div>
                            ))
                        }
                        <div>{item.colorName}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default Deneme;
