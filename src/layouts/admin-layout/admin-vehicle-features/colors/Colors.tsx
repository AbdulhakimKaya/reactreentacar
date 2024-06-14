import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Button from "../../../../components/button/Button";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {notification, Popconfirm} from "antd";
import {fetchDataDetail} from "../../../../hooks/getData";
import Color from "./type";
import {deleteData} from "../../../../hooks/deleteData";


const Colors = () => {
    const [colors, setColors] = useState<Color[]>([]);
    const endpoint = 'http://localhost:5039/api/Colors/getall';

    const confirm = async (id: string) => {
        const endpointDelete = `http://localhost:5039/api/Colors/delete/${id}`;
        try {
            if (id) {
                const {isSuccess} = await deleteData(endpointDelete);
                if (isSuccess) {
                    setColors(colors.filter(color => color.id !== id));
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
        const fetchColors = async () => {
            try {
                const data = await fetchDataDetail(endpoint);
                setColors(data?.data); // Extract items array from data
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchColors();
    }, []);

    return (
        <div>
            <div className={`flex justify-end z-10`}>
                <Link to={"/admin/araba-ozellikleri/renk/renk-ekle"}>
                    <Button>Renk Ekle</Button>
                </Link>
            </div>
            {
                colors.map((item, index) => (
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
                            <Link to={`/admin/araba-ozellikleri/renk/renk-duzenle/${item.id}`}>
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

export default Colors;