import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Button from "../../../../components/button/Button";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Popconfirm} from "antd";
import {fetchDataDetail} from "../../../../hooks/getData";

// Define an interface for the brand object
interface Brand {
    id: string;
    name: string;
}

const Brands: React.FC = () => {
    const [brands, setBrands] = useState<Brand[]>([]);
    const endpoint = 'http://localhost:5039/api/Brands?PageIndex=0&PageSize=15';

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const data = await fetchDataDetail(endpoint);
                setBrands(data?.data.items); // Extract items array from data
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchBrands();
    }, []);

    return (
        <div>
            <div className="flex justify-end z-10">
                <Link to="/admin/araba-ozellikleri/marka/marka-ekle">
                    <Button>Marka Ekle</Button>
                </Link>
            </div>
            {brands.map((item, index) => (
                <div
                    key={index}
                    className="flex justify-between items-center max-w-[100%] border border-[#bdbdbdff] px-4 py-2 rounded-lg mb-2 mt-8"
                >
                    <div className="text-base font-semibold">
                        {item.name}
                    </div>
                    <div className="flex gap-4">
                        <Link to={`/admin/araba-ozellikleri/marka/marka-duzenle/${item.id}`}>
                            <Button size="xSmall" variant="edit" className="gap-1.5">
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

export default Brands;
