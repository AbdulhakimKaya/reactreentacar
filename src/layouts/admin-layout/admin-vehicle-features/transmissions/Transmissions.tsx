import React, {useEffect, useState} from 'react';
import Button from "../../../../components/button/Button";
import {Link} from "react-router-dom";
import {notification, Popconfirm} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {fetchDataDetail} from "../../../../hooks/getData";
import Transmission from "./type";
import {deleteData} from "../../../../hooks/deleteData";


const Transmissions = () => {
    const [transmissions, setTransmissions] = useState<Transmission[]>([]);
    const endpoint = 'http://localhost:5039/api/Transmissions/getall';

    const confirm = async (id: string) => {
        const endpointDelete = `http://localhost:5039/api/Transmissions/delete/${id}`;
        try {
            if (id) {
                const {isSuccess} = await deleteData(endpointDelete);
                if (isSuccess) {
                    setTransmissions(transmissions.filter(transmission => transmission.id !== id));
                }
            }
        } catch (errorInfo) {
            console.error('Deletion failed:', errorInfo);
        }
    };

    const cancel = () => {
        notification.info({
            message: 'İptal Edildi',
            description: 'Silme işlemi iptal edildi.',
        });
    };

    useEffect(() => {
        const fetchTransmissions = async () => {
            try {
                const data = await fetchDataDetail(endpoint);
                setTransmissions(data?.data); // Extract items array from data
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchTransmissions();
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
                        className="flex justify-between items-center max-w-[100%] border border-[#bdbdbdff] px-4 py-2 rounded-lg mb-2 mt-8"
                    >
                        <div className="text-base font-semibold" hidden={true}>
                            {item.id}
                        </div>
                        <div className="text-base font-semibold">
                            {item.name}
                        </div>
                        <div className="flex gap-4">
                            <Link to={`/admin/araba-ozellikleri/vites/vites-duzenle/${item.id}`}>
                                <Button size={"xSmall"} variant={"edit"} className="gap-1.5">
                                    <EditOutlined/>
                                    Düzenle
                                </Button>
                            </Link>
                            <Popconfirm
                                title="Aracın silinmesi"
                                description="Aracı silmek istediğinizden emin misiniz?"
                                onConfirm={() => confirm(item.id)}
                                onCancel={cancel}
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