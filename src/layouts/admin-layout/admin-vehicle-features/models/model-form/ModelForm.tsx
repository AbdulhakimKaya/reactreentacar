import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {LeftCircleOutlined} from "@ant-design/icons";
import {Col, Form, Input, notification, Row, Select} from "antd";
import Button from "../../../../../components/button/Button";
import {putData} from "../../../../../hooks/putData";
import {postData} from "../../../../../hooks/postData";
import Brand from "../../brands/type";
import {fetchDataDetail} from "../../../../../hooks/getData";
import Model from "../type";
import Fuel from "../../fuels/type";
import Transmission from "../../transmissions/type";

interface ModelProps {
    id?: string,
    modelData?: Model | null
}

const ModelForm: React.FC<ModelProps> = ({id, modelData}) => {
    const isFormValidating = useRef(false);
    const [form] = Form.useForm();
    const endpoint = `http://localhost:5039/api/Models/`
    const navigate = useNavigate();

    const [brands, setBrands] = useState<Brand[]>([]);
    const brandEndpoint = 'http://localhost:5039/api/Brands/getall';

    const [fuels, setFuels] = useState<Fuel[]>([]);
    const fuelEndpoint = 'http://localhost:5039/api/Fuels/getall';

    const [transmissions, setTransmissions] = useState<Transmission[]>([]);
    const transmissionEndpoint = 'http://localhost:5039/api/Transmissions/getall';


    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const data = await fetchDataDetail(brandEndpoint);
                setBrands(data?.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        const fetchFuels = async () => {
            try {
                const data = await fetchDataDetail(fuelEndpoint);
                setFuels(data?.data); // Extract items array from data
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        const fetchTransmissions = async () => {
            try {
                const data = await fetchDataDetail(transmissionEndpoint);
                setTransmissions(data?.data); // Extract items array from data
                console.log(data)
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchBrands();
        fetchFuels();
        fetchTransmissions();

        form.setFieldsValue({
            id: id ?? '',
            name: modelData ? modelData.name : '',
            brandId: modelData ? modelData.brandId : '',
            fuelId: modelData ? modelData.fuelId : '',
            transmissionId: modelData ? modelData.transmissionId : '',
        });

    }, [modelData, form]);
    console.log(modelData)

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
                navigate('/admin/araba-ozellikleri/model');
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
                <Link to={"/admin/araba-ozellikleri/model"}
                      className="back-button flex items-center gap-2 w-max text-base font-semibold pb-8"
                >
                    <LeftCircleOutlined/>
                    Tüm Modeller
                </Link>
            </div>
            <div>
                <Form
                    name={"modelForm"}
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    {id ? (
                        <Form.Item
                            name="id"
                            label="Id"
                            labelAlign="left"
                            validateStatus="validating"
                            hidden={true}
                        >
                            <Input className="input-uzunluk id-ayar" disabled={true}/>
                        </Form.Item>
                    ) : null}

                    <Row gutter={48}>
                        <Col md={24} lg={12}>
                            <Form.Item
                                label={"Model İsmi"}
                                name={"name"}
                                rules={[{required: true, message: 'Lütfen model ismi yazın!'}]}
                                labelCol={{md: 3, lg: 5, xl: 3}}
                                labelAlign={"left"}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col md={24} lg={12}>
                            <Form.Item
                                label="Marka"
                                name="brandId"
                                rules={[{required: true, message: 'Lütfen marka seçiniz!'}]}
                                labelCol={{md: 3, lg: 5, xl: 3}}
                                labelAlign={"left"}
                            >
                                <Select>
                                    {brands.map((brand, index) => (
                                        <Select.Option key={brand.id} value={brand.id}>
                                            {brand.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={48}>
                        <Col md={24} lg={12}>
                            <Form.Item
                                label="Yakıt Tipi"
                                name="fuelId"
                                rules={[{required: true, message: 'Lütfen yakıt tipi seçiniz!'}]}
                                labelCol={{md: 3, lg: 5, xl: 3}}
                                labelAlign={"left"}
                            >
                                <Select>
                                    {fuels.map((fuel, index) => (
                                        <Select.Option key={fuel.id} value={fuel.id}>
                                            {fuel.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col md={24} lg={12}>
                            <Form.Item
                                label="Vites Tipi"
                                name="transmissionId"
                                rules={[{required: true, message: 'Lütfen vites tipi seçiniz!'}]}
                                labelCol={{md: 3, lg: 5, xl: 3}}
                                labelAlign={"left"}
                            >
                                <Select>
                                    {transmissions.map((transmission, index) => (
                                        <Select.Option key={transmission.id} value={transmission.id}>
                                            {transmission.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
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

export default ModelForm;