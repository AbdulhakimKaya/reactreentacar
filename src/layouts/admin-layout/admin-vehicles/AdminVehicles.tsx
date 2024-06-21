import React, {useEffect, useState} from 'react';
import './AdminVehicles.scss'
import classNames from "classnames";
import {Col, Popconfirm, Row, Table, type TableProps, Tag} from "antd";
import Button from "../../../components/button/Button";
import {Link} from "react-router-dom";
import {DeleteOutlined} from "@ant-design/icons";
import {fetchDataDetail} from "../../../hooks/getData";
import Vehicle from "./type";


const AdminVehicles = () => {
    const columns: TableProps<Vehicle>['columns'] = [
        {
            title: 'Resim',
            dataIndex: 'imagesRoot',
            key: 'imagesRoot',
            width: 240,
            render: (imagesRoot: string[]) => (
                <div>
                    {imagesRoot.length > 0 && (
                        <img
                            src={`http://localhost:5039/images/${imagesRoot[0]}`}
                            alt="Car Image"
                            style={{width: 180, height: "auto", objectFit: "contain"}}
                        />
                    )}
                </div>
            )
        },
        {
            title: 'Marka',
            dataIndex: 'brandName',
            key: 'brandName',
            width: 100,
        },
        {
            title: 'Model',
            dataIndex: 'modelName',
            key: 'modelName',
            width: 100,
        },
        {
            title: 'Model Yılı',
            dataIndex: 'modelYear',
            key: 'modelYear',
            width: 100,
        },
        {
            title: 'Vites Tipi',
            dataIndex: 'transmissionName',
            key: 'transmissionName',
            width: 120,
        },
        {
            title: 'Yakıt Tipi',
            dataIndex: 'fuelName',
            key: 'fuelName',
            width: 120,
        },
        {
            title: 'Renk',
            dataIndex: 'colorName',
            key: 'colorName',
            width: 120,
        },
        {
            title: 'Plaka',
            dataIndex: 'plate',
            key: 'plate',
            width: 120,
        },
        {
            title: 'Günlük Fiyat',
            dataIndex: 'dailyPrice',
            key: 'dailyPrice',
            width: 120,
        },
        {
            title: 'Durum',
            dataIndex: 'carState',
            key: 'carState',
            width: 100,
            render: (carState: number) => (
                <>
                    {carState === 1 ? (
                        <Tag color="green">Müsait</Tag>
                    ) : (
                        <Tag color="red">Müsait Değil</Tag>
                    )}
                </>
            )
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

    const classes = classNames("db-admin-vehicles")
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const endpoint = 'http://localhost:5039/api/Cars/getall';

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const data = await fetchDataDetail(endpoint);
                setVehicles(data?.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchCars();
    }, []);

    return (
        <div className={classes}>
            <div className="w-full">
                <div className={`flex justify-end z-10`}>
                    <Link to={"/admin/araclar/arac-ekle"}>
                        <Button>Yeni Araç Ekle</Button>
                    </Link>
                </div>
                <Table columns={columns} dataSource={vehicles} scroll={{x: true}} pagination={false} size={"middle"}
                       sticky={{offsetHeader: -32}} className="mt-8"/>
            </div>
        </div>
    );
};

export default AdminVehicles;