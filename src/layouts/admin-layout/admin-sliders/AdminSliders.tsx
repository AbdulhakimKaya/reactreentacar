import React, {useEffect, useState} from 'react';
import SliderType from "../../main-layout/home-page/home-slider/type";
import {fetchDataDetail} from "../../../hooks/getData";
import {Link} from "react-router-dom";
import Button from "../../../components/button/Button";
import {DeleteOutlined} from "@ant-design/icons";
import {notification, Popconfirm} from "antd";
import {deleteData} from "../../../hooks/deleteData";

const AdminSliders = () => {
    const [sliders, setSliders] = useState<SliderType[]>([]);
    const endpoint = 'http://localhost:5039/api/Sliders/getall';

    const confirm = async (id: string) => {
        const endpointDelete = `http://localhost:5039/api/Sliders/delete/${id}`;
        try {
            if (id) {
                const {isSuccess} = await deleteData(endpointDelete);
                if (isSuccess) {
                    setSliders(sliders.filter(slider => slider.id !== id));
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
        const fetchSliders = async () => {
            try {
                const data = await fetchDataDetail(endpoint);
                setSliders(data?.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchSliders();
    }, []);

    return (
        <div>
            <div className="flex justify-end z-10">
                <Link to="/admin/slider/slider-ekle">
                    <Button>Slider Ekle</Button>
                </Link>
            </div>
            {sliders.map((item, index) => (
                <div
                    key={index}
                    className="flex justify-between items-center max-w-[100%] border border-[#bdbdbdff] px-4 py-2 rounded-lg mb-2 mt-8"
                >
                    <div className="text-base font-semibold" hidden={true}>
                        {item.id}
                    </div>
                    <div>
                        <img src={item.imageUrl} className="w-[180px] h-auto object-cover" alt=""/>
                    </div>
                    <div className="flex gap-4">
                        <Popconfirm
                            title="Aracın silinmesi"
                            description="Markayı silmek istediğinizden emin misiniz?"
                            onConfirm={() => confirm(item.id)}
                            onCancel={cancel}
                            okText="Evet"
                            cancelText="Vazgeç"
                            placement="topRight"
                        >
                            <Button size="xSmall" variant="delete" className="gap-1.5">
                                <DeleteOutlined/>
                                Sil
                            </Button>
                        </Popconfirm>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdminSliders;