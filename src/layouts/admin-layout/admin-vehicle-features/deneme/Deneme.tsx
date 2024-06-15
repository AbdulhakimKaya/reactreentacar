import React, {useEffect, useState} from 'react';
import {fetchDataDetail} from "../../../../hooks/getData";
import DenemeType from "./type";

const Deneme = () => {
    // const columns: TableProps<Model>['columns'] = [
    //     {
    //         title: 'Marka',
    //         dataIndex: 'brandName',
    //         key: 'brandName',
    //     },
    //     {
    //         title: 'Model',
    //         dataIndex: 'name',
    //         key: 'name',
    //     },
    //     {
    //         title: 'Vites Tipi',
    //         dataIndex: 'transmissionName',
    //         key: 'transmissionName',
    //     },
    //     {
    //         title: 'Yakıt Tipi',
    //         dataIndex: 'fuelName',
    //         key: 'fuelName',
    //     },
    //     {
    //         title: '',
    //         key: 'action',
    //         width: 200,
    //         render: () => (
    //             <Row gutter={8}>
    //                 <Col>
    //                     <Link to={"/admin/araclar/arac-duzenle"}>
    //                         <Button size={"xSmall"} variant={"edit"}>Düzenle</Button>
    //                     </Link>
    //                 </Col>
    //                 <Col>
    //                     <Popconfirm
    //                         title="Aracın silinmesi"
    //                         description="Aracı silmek istediğinizden emin misiniz?"
    //                         // onConfirm={() => confirm("id")}
    //                         // onCancel={cancel}
    //                         okText="Evet"
    //                         cancelText="Vazgeç"
    //                         placement="topRight"
    //                     >
    //                         <Button size={"xSmall"} variant={"delete"} className="gap-1.5">
    //                             <DeleteOutlined/>
    //                             Sil
    //                         </Button>
    //                     </Popconfirm>
    //                 </Col>
    //             </Row>
    //         ),
    //     },
    // ];

    const [models, setModels] = useState<DenemeType[]>([]);
    const endpoint = 'http://localhost:5039/api/Cars/getall';

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
            {/*<Table columns={columns} dataSource={models} scroll={{x: true}} pagination={false} size={"middle"}*/}
            {/*       sticky={{offsetHeader: -32}} className="mt-8"/>*/}

            {
                models.map((item, index) => (
                    <div>
                        <div>{item.brandName}</div>
                        {
                            item.imagesRoot.map((i, ind) => (
                                <div>
                                    <img src={i} alt=""/>
                                    <div>{i}</div>
                                </div>
                            ))
                        }
                        <div>{item.colorName}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default Deneme;