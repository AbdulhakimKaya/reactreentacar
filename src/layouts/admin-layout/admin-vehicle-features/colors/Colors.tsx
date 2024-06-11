import React from 'react';
import {Link} from "react-router-dom";
import Button from "../../../../components/button/Button";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Popconfirm} from "antd";

// id gibi bilgiler de eklenerek düzenle ve sil button'ları kullanılabilir
const colors = [
    {
        name: "Kristal Beyaz"
    },
    {
        name: "Beyaz"
    },
    {
        name: "Siyah"
    },
    {
        name: "Mavi"
    },
    {
        name: "Kırmızı"
    },
    {
        name: "Sarı"
    },
    {
        name: "Yeşil"
    },
]

const Colors = () => {
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
                        className="flex justify-between items-center max-w-[100%] border border-[#bdbdbdff] px-4 py-2 rounded-lg mb-2 mt-8">
                        <div className="text-base font-semibold">
                            {item.name}
                        </div>
                        <div className="flex gap-4">
                            <Link to={"/admin/araba-ozellikleri/renk/renk-ekle"}>
                                <Button size={"xSmall"} variant={"edit"} className="gap-1.5">
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