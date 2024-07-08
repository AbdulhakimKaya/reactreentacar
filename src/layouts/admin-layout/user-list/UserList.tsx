import React, {useEffect, useState} from 'react';
import {deleteData} from "../../../hooks/deleteData";
import {notification, Table, type TableProps} from "antd";
import {fetchDataDetail} from "../../../hooks/getData";
import UserType from "./type";

const UserList = () => {
    const columns: TableProps<UserType>['columns'] = [
        {
            title: 'İsim',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Soyisim',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        // {
        //     title: '',
        //     key: 'action',
        //     width: 200,
        //     render: (record) => (
        //         <Row gutter={8}>
        //             <Col>
        //                 <Popconfirm
        //                     title="Aracın silinmesi"
        //                     description="Aracı silmek istediğinizden emin misiniz?"
        //                     onConfirm={() => confirm(record.id)}
        //                     onCancel={cancel}
        //                     okText="Evet"
        //                     cancelText="Vazgeç"
        //                     placement="topRight"
        //                 >
        //                     <Button size={"xSmall"} variant={"delete"} className="gap-1.5">
        //                         <DeleteOutlined/>
        //                         Sil
        //                     </Button>
        //                 </Popconfirm>
        //             </Col>
        //         </Row>
        //     ),
        // },
    ];

    const [users, setUsers] = useState<UserType[]>([]);
    const endpoint = 'http://localhost:5039/api/Auth/getall';

    const confirm = async (id: string) => {
        const endpointDelete = `http://localhost:5039/api/Auth/delete/${id}`;
        try {
            if (id) {
                const {isSuccess} = await deleteData(endpointDelete);
                if (isSuccess) {
                    setUsers(users.filter(slider => slider.id !== id));
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
        const fetchUsers = async () => {
            try {
                const data = await fetchDataDetail(endpoint);
                setUsers(data?.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <Table columns={columns} dataSource={users} scroll={{x: true}} pagination={false} size={"middle"}
                   sticky={{offsetHeader: -32}} className="mt-8"/>
        </div>
    );
};

export default UserList;