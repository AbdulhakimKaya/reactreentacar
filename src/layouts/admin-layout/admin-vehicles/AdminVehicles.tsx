import React from 'react';
import './AdminVehicles.scss'
import classNames from "classnames";
import {Popconfirm, Space, Table, type TableProps, Tag} from "antd";
import car from '../../../assets/images/xc90.avif'
import Button from "../../../components/button/Button";
import {Link, useNavigate} from "react-router-dom";


interface DataType {
    key: string;
    image: string;
    brand: string;
    model: string;
    gear: string;
    color: string;
    year: string;
    fuel: string;
    plate: string;
    tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Resim',
        dataIndex: 'image',
        key: 'image',
        render: (image) => <img src={image} style={{width: 240}}/>,
    },
    {
        title: 'Marka',
        dataIndex: 'brand',
        key: 'brand',
    },
    {
        title: 'Model',
        dataIndex: 'model',
        key: 'model',
    },
    {
        title: 'Vites',
        dataIndex: 'gear',
        key: 'gear',
    },
    {
        title: 'Renk',
        dataIndex: 'color',
        key: 'color',
    },
    {
        title: 'Yıl',
        dataIndex: 'year',
        key: 'year',
    },
    {
        title: 'Yakıt',
        dataIndex: 'fuel',
        key: 'fuel',
    },
    {
        title: 'Plaka',
        dataIndex: 'plate',
        key: 'plate',
    },
    {
        title: 'Durum',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, {tags}) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'red' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: '',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Düzenle </a>
                <Popconfirm
                    title="Aracın silinmesi"
                    description="Aracı silmek istediğinizden emin misiniz?"
                    // onConfirm={confirm}
                    // onCancel={cancel}
                    okText="Evet"
                    cancelText="Vazgeç"
                    placement="topRight"
                >
                    <a>Sil</a>
                </Popconfirm>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        image: car,
        brand: "Volvo",
        model: "XC90",
        gear: "Otomatik",
        color: "Kristal Beyaz",
        year: "2024",
        fuel: "Elektrikli/Benzinli",
        plate: '21 ASD 2024',
        tags: ['Müsait Değil'],
    },
];

const AdminVehicles = () => {
    const classes = classNames("db-admin-vehicles")
    const navigate = useNavigate()

    return (
        <div className={classes}>
            <div className="flex justify-end pb-5">
                <Link to={"/admin/araclar/arac-ekle"}>
                    <Button>Yeni Araç Ekle</Button>
                </Link>
            </div>
            <div className="w-full">
                <Table columns={columns} dataSource={data} scroll={{x: true}} pagination={false} size={"middle"}
                       sticky={{offsetHeader: -32}}/>
            </div>
        </div>
    );
};

export default AdminVehicles;