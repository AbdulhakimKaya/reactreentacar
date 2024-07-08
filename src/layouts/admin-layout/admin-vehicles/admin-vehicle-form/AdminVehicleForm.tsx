import React, {useEffect, useRef, useState} from 'react';
import {Col, Form, Image, Input, notification, Row, Select, Upload} from "antd";
import {Link, useNavigate} from "react-router-dom";
import {putData} from "../../../../hooks/putData";
import {postData} from "../../../../hooks/postData";
import Button from "../../../../components/button/Button";
import {LeftCircleOutlined, UploadOutlined} from "@ant-design/icons";
import VehicleType from "../type";
import Model from "../../admin-vehicle-features/models/type";
import {fetchDataDetail} from "../../../../hooks/getData";
import Color from "../../admin-vehicle-features/colors/type";
import {CarState} from "../../../../mock/CarState";


interface CarProps {
    id?: string;
    vehicleData?: VehicleType | null;
}

const AdminVehicleForm: React.FC<CarProps> = ({id, vehicleData}) => {
    const isFormValidating = useRef(false);
    const [form] = Form.useForm();
    const endpoint = `http://localhost:5039/api/Cars/`;
    const navigate = useNavigate();

    const carStates = CarState;

    // Model Endpoint
    const [models, setModels] = useState<Model[]>([]);
    const modelEndpoint = 'http://localhost:5039/api/Models/getall';

    // Color Endpoint
    const [colors, setColors] = useState<Color[]>([]);
    const colorEndpoint = 'http://localhost:5039/api/Colors/getall';

    useEffect(() => {
        const fetchModels = async () => {
            try {
                const data = await fetchDataDetail(modelEndpoint);
                setModels(data?.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        const fetchColors = async () => {
            try {
                const data = await fetchDataDetail(colorEndpoint);
                setColors(data?.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchModels();
        fetchColors();

        form.setFieldsValue({
            id: id ?? '',
            modelId: vehicleData ? vehicleData.modelId : '',
            colorId: vehicleData ? vehicleData.colorId : '',
            kilometer: vehicleData ? vehicleData.kilometer : '',
            modelYear: vehicleData ? vehicleData.modelYear : '',
            plate: vehicleData ? vehicleData.plate : '',
            dailyPrice: vehicleData ? vehicleData.dailyPrice : '',
            carState: vehicleData ? vehicleData.carState : '',
            minFIndexScore: vehicleData ? vehicleData.minFIndexScore : '',
        });
    }, [vehicleData, form]);

    const onFinish = async (values: any) => {
        try {
            isFormValidating.current = true;
            await form.validateFields();
            let data: any

            if (id) {
                data = await putData({
                    tempUrl: endpoint,
                    values: values,
                });
            } else {
                data = await postData({
                    tempUrl: endpoint,
                    values: values,
                });
            }

            if (data) {
                notification.success({
                    message: 'Success',
                    description: 'İşlem başarılı.',
                });
                navigate('/admin/araclar');
            }
        } catch (errorInfo) {
            console.error('Validation failed:', errorInfo);
        } finally {
            isFormValidating.current = false;
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <div>
                <Link to={"/admin/araclar"}
                      className="db-add-vehicle-back-button flex items-center gap-2 w-max text-base font-semibold pb-8"
                >
                    <LeftCircleOutlined/>
                    Tüm Araçlar
                </Link>
            </div>
            <div>
                <Form
                    name={"brandForm"}
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    {id ? (
                        <Form.Item
                            name="id"
                            label="Id"
                            labelCol={{md: 3, lg: 5}}
                            labelAlign={"left"}
                            validateStatus="validating"
                            hidden={true}
                        >
                            <Input disabled={true}/>
                        </Form.Item>
                    ) : null}

                    <Row gutter={48}>
                        <Col md={24} lg={12}>
                            <Form.Item
                                label="Model"
                                name="modelId"
                                rules={[{required: true, message: 'Lütfen marka seçiniz!'}]}
                                labelCol={{md: 3, lg: 5}}
                                labelAlign={"left"}
                            >
                                <Select>
                                    {models.map((model, index) => (
                                        <Select.Option key={model.id} value={model.id}>
                                            {model.brandName} - {model.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col md={24} lg={12}>
                            <Form.Item
                                label="Renk"
                                name="colorId"
                                rules={[{required: true, message: 'Lütfen marka seçiniz!'}]}
                                labelCol={{md: 3, lg: 5}}
                                labelAlign={"left"}
                            >
                                <Select>
                                    {colors.map((color, index) => (
                                        <Select.Option key={color.id} value={color.id}>
                                            {color.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={48}>
                        <Col md={24} lg={12}>
                            <Form.Item
                                label={"Kilometre"}
                                name={"kilometer"}
                                rules={[{required: true, message: 'Lütfen Kilometre alanını doldurunuz!'}]}
                                labelCol={{md: 3, lg: 5}}
                                labelAlign={"left"}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col md={24} lg={12}>
                            <Form.Item
                                label={"Model Yılı"}
                                name={"modelYear"}
                                rules={[{required: true, message: 'Lütfen Model yılı alanını doldurunuz!'}]}
                                labelCol={{md: 3, lg: 5}}
                                labelAlign={"left"}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={48}>
                        <Col md={24} lg={12}>
                            <Form.Item
                                label={"Plaka"}
                                name={"plate"}
                                rules={[{required: true, message: 'Lütfen Plaka alanını doldurunuz!'}]}
                                labelCol={{md: 3, lg: 5}}
                                labelAlign={"left"}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col md={24} lg={12}>
                            <Form.Item
                                label={"Günlük Fiyat"}
                                name={"dailyPrice"}
                                rules={[{required: true, message: 'Lütfen Günlük Fiyat alanını doldurunuz!'}]}
                                labelCol={{md: 3, lg: 5}}
                                labelAlign={"left"}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={48}>
                        <Col md={24} lg={12}>
                            <Form.Item
                                label="Aracın Durumu"
                                name="carState"
                                rules={[{required: true, message: 'Lütfen Aracın durumunu seçiniz!'}]}
                                labelCol={{md: 3, lg: 5}}
                                labelAlign={"left"}
                            >
                                <Select>
                                    {carStates.map((carState, index) => (
                                        <Select.Option key={carState.id} value={carState.id}>
                                            {carState.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col md={24} lg={12}>
                            <Form.Item
                                label={"Minimum Findex Puan"}
                                name={"minFIndexScore"}
                                rules={[{required: true, message: 'Lütfen Kilometre alanını doldurunuz!'}]}
                                labelCol={{md: 3, lg: 5}}
                                labelAlign={"left"}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={48}>
                        <Col md={24} lg={12}>
                            <Upload>
                                <Button className="flex gap-2">
                                    <div>
                                        <UploadOutlined/>
                                    </div>
                                    <div>
                                        Araç resimlerini yüklemek için tıkla
                                    </div>
                                </Button>
                            </Upload>
                        </Col>
                    </Row>

                    <Row gutter={48}>
                        <Col flex={"auto"} className="flex gap-2.5 py-4">
                            <Image.PreviewGroup>
                                {
                                    vehicleData?.imagesRoot && (
                                        vehicleData.imagesRoot.map((item, index) => (
                                            <div className="w-52">
                                                <Image src={`http://localhost:5039/images/${item}`} className="rounded-xl"
                                                       alt={item}/>
                                            </div>
                                        ))
                                    )
                                }
                            </Image.PreviewGroup>
                        </Col>
                    </Row>

                    <Form.Item>
                        <Button htmlType="submit">
                            Kaydet
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default AdminVehicleForm;