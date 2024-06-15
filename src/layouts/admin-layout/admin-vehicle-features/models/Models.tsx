import React, {useEffect, useState} from 'react';
import {deleteData} from "../../../../hooks/deleteData";
import {Col, notification, Popconfirm, Row, Table, type TableProps} from "antd";
import {fetchDataDetail} from "../../../../hooks/getData";
import {Link} from "react-router-dom";
import Button from "../../../../components/button/Button";
import Model from "./type";
import {DeleteOutlined} from "@ant-design/icons";


const Models = () => {
    const columns: TableProps<Model>['columns'] = [
        {
            title: 'Marka',
            dataIndex: 'brandName',
            key: 'brandName',
        },
        {
            title: 'Model',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Vites Tipi',
            dataIndex: 'transmissionName',
            key: 'transmissionName',
        },
        {
            title: 'Yakıt Tipi',
            dataIndex: 'fuelName',
            key: 'fuelName',
        },
        {
            title: '',
            key: 'action',
            width: 200,
            render: () => (
                <Row gutter={8}>
                    <Col>
                        <Link to={"/admin/araclar/arac-duzenle"}>
                            <Button size={"xSmall"} variant={"edit"}>Düzenle</Button>
                        </Link>
                    </Col>
                    <Col>
                        <Popconfirm
                            title="Aracın silinmesi"
                            description="Aracı silmek istediğinizden emin misiniz?"
                            // onConfirm={() => confirm("id")}
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
                    </Col>
                </Row>
            ),
        },
    ];

    const [models, setModels] = useState<Model[]>([]);
    const endpoint = 'http://localhost:5039/api/Models/getall';

    const confirm = async (id: string) => {
        const endpointDelete = `http://localhost:5039/api/Brands/delete/${id}`;
        try {
            if (id) {
                const {isSuccess} = await deleteData(endpointDelete);
                if (isSuccess) {
                    setModels(models.filter(model => model.id !== id));
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
            <div className="flex justify-end z-10">
                <Link to="/admin/araba-ozellikleri/marka/marka-ekle">
                    <Button>Model Ekle</Button>
                </Link>
            </div>
            <Table columns={columns} dataSource={models} scroll={{x: true}} pagination={false} size={"middle"}
                   sticky={{offsetHeader: -32}} className="mt-8"/>
        </div>
    );
};

export default Models;