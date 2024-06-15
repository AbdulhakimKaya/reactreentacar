import React from 'react';
import './AdminVehicles.scss'
import classNames from "classnames";
import {Popconfirm, Space, Table, type TableProps, Tag} from "antd";
import car from '../../../assets/images/xc90.avif'
import Button from "../../../components/button/Button";
import {Link} from "react-router-dom";
import {DeleteOutlined} from "@ant-design/icons";


interface DataType {
    key: string;
    image: string;
    brand: string;
    model: string;
    transmission: string;
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
        render: (image) => <img src={image} style={{width: 160}}/>,
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
        dataIndex: 'transmission',
        key: 'transmission',
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
        // ToDo: border-radius, padding ve color ayarlamaları yapılmalı
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
        width: 200,
        render: () => (
            <Space size="middle">
                <Link to={"/admin/araclar/arac-duzenle"}><Button size={"xSmall"}
                                                                 variant={"edit"}>Düzenle</Button></Link>
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
        transmission: "Otomatik",
        color: "Kristal Beyaz",
        year: "2024",
        fuel: "Elektrikli/Benzinli",
        plate: '21 ASD 2024',
        tags: ['Müsait Değil'],
    },
    {
        key: '1',
        image: car,
        brand: "Volvo",
        model: "XC90",
        transmission: "Otomatik",
        color: "Kristal Beyaz",
        year: "2024",
        fuel: "Elektrikli/Benzinli",
        plate: '21 ASD 2024',
        tags: ['Müsait Değil'],
    },
    {
        key: '1',
        image: car,
        brand: "Volvo",
        model: "XC90",
        transmission: "Otomatik",
        color: "Kristal Beyaz",
        year: "2024",
        fuel: "Elektrikli/Benzinli",
        plate: '21 ASD 2024',
        tags: ['Müsait Değil'],
    },
    {
        key: '1',
        image: car,
        brand: "Volvo",
        model: "XC90",
        transmission: "Otomatik",
        color: "Kristal Beyaz",
        year: "2024",
        fuel: "Elektrikli/Benzinli",
        plate: '21 ASD 2024',
        tags: ['Müsait Değil'],
    },
    {
        key: '1',
        image: car,
        brand: "Volvo",
        model: "XC90",
        transmission: "Otomatik",
        color: "Kristal Beyaz",
        year: "2024",
        fuel: "Elektrikli/Benzinli",
        plate: '21 ASD 2024',
        tags: ['Müsait Değil'],
    },
    {
        key: '1',
        image: car,
        brand: "Volvo",
        model: "XC90",
        transmission: "Otomatik",
        color: "Kristal Beyaz",
        year: "2024",
        fuel: "Elektrikli/Benzinli",
        plate: '21 ASD 2024',
        tags: ['Müsait Değil'],
    },
    {
        key: '1',
        image: car,
        brand: "Volvo",
        model: "XC90",
        transmission: "Otomatik",
        color: "Kristal Beyaz",
        year: "2024",
        fuel: "Elektrikli/Benzinli",
        plate: '21 ASD 2024',
        tags: ['Müsait Değil'],
    },
    {
        key: '1',
        image: car,
        brand: "Volvo",
        model: "XC90",
        transmission: "Otomatik",
        color: "Kristal Beyaz",
        year: "2024",
        fuel: "Elektrikli/Benzinli",
        plate: '21 ASD 2024',
        tags: ['Müsait Değil'],
    },
    {
        key: '1',
        image: car,
        brand: "Volvo",
        model: "XC90",
        transmission: "Otomatik",
        color: "Kristal Beyaz",
        year: "2024",
        fuel: "Elektrikli/Benzinli",
        plate: '21 ASD 2024',
        tags: ['Müsait Değil'],
    },
    {
        key: '1',
        image: car,
        brand: "Volvo",
        model: "XC90",
        transmission: "Otomatik",
        color: "Kristal Beyaz",
        year: "2024",
        fuel: "Elektrikli/Benzinli",
        plate: '21 ASD 2024',
        tags: ['Müsait Değil'],
    },
    {
        key: '1',
        image: car,
        brand: "Volvo",
        model: "XC90",
        transmission: "Otomatik",
        color: "Kristal Beyaz",
        year: "2024",
        fuel: "Elektrikli/Benzinli",
        plate: '21 ASD 2024',
        tags: ['Müsait Değil'],
    },
    {
        key: '1',
        image: car,
        brand: "Volvo",
        model: "XC90",
        transmission: "Otomatik",
        color: "Kristal Beyaz",
        year: "2024",
        fuel: "Elektrikli/Benzinli",
        plate: '21 ASD 2024',
        tags: ['Müsait Değil'],
    },
];

const AdminVehicles = () => {
    const classes = classNames("db-admin-vehicles")

    return (
        <div className={classes}>
            <div className="w-full">
                <div className={`flex justify-end z-10`}>
                    <Link to={"/admin/araclar/arac-ekle"}>
                        <Button>Yeni Araç Ekle</Button>
                    </Link>
                </div>
                <Table columns={columns} dataSource={data} scroll={{x: true}} pagination={false} size={"middle"}
                       sticky={{offsetHeader: -32}} className="mt-8"/>
            </div>
        </div>
    );
};

export default AdminVehicles;