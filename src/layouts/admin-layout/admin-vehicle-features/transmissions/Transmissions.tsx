import React, {useEffect, useState} from 'react';
import Button from "../../../../components/button/Button";
import {Link} from "react-router-dom";
import {Popconfirm} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {fetchDataDetail} from "../../../../hooks/getData";
import Transmission from "./type";


const Transmissions = () => {
    const [transmissions, setTransmissions] = useState<Transmission[]>([]);
    const endpoint = 'http://localhost:5039/api/Transmissions/getall';

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const data = await fetchDataDetail(endpoint);
                setTransmissions(data?.data); // Extract items array from data
                console.log(data)
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchBrands();
    }, []);

    return (
        <div>
            <div className={`flex justify-end z-10`}>
                <Link to={"/admin/araba-ozellikleri/vites/vites-ekle"}>
                    <Button>Vites Tipi Ekle</Button>
                </Link>
            </div>
            {
                transmissions.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center max-w-[100%] border border-[#bdbdbdff] px-4 py-2 rounded-lg mb-2 mt-8">
                        <div className="text-base font-semibold">
                            {item.name}
                        </div>
                        <div className="flex gap-4">
                            <Link to={"/admin/araba-ozellikleri/vites/vites-ekle"}>
                                <Button size={"xSmall"} variant={"edit"} className="gap-1.5">
                                    <EditOutlined/>
                                    Düzenle
                                </Button>
                            </Link>
                            <Popconfirm
                                title="Aracın silinmesi"
                                description="Aracı silmek istediğinizden emin misiniz?"
                                // onConfirm={confirm}
                                // onCancel={cancel}
                                okText="Evet"
                                cancelText="Vazgeç"
                                placement="topRight"
                            >
                                <Button size={"xSmall"} variant={"delete"} className="gap-1.5">
                                    <DeleteOutlined/>
                                    Sil
                                </Button>
                            </Popconfirm>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Transmissions;