import React from 'react';
import './UpdateVehicle.scss'
import classNames from "classnames";
import {Link} from "react-router-dom";
import {CheckOutlined, CloseOutlined, LeftCircleOutlined} from "@ant-design/icons";
import {Col, Form, FormProps, Input, Row, Switch} from "antd";
import Button from "../../../../components/button/Button";


type FieldType = {
    brand?: string;
    model?: string;
    transmission?: string;
    color?: string;
    year?: string;
    fuel?: string;
    plate?: string;
    isAvailable?: boolean;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
};

const UpdateVehicle = () => {
    const classes = classNames("db-add-vehicle")

    return (
        <div className={classes}>
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
                    name="basic"
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout={"horizontal"}
                >
                    <Row gutter={48}>
                        <Col md={24} lg={12}>
                            <Form.Item<FieldType>
                                label="Marka"
                                name="brand"
                                labelCol={{md: 3, lg: 5, xl: 3}}
                                labelAlign={"left"}
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col md={24} lg={12}>
                            <Form.Item<FieldType>
                                label="Model"
                                name="model"
                                labelCol={{md: 3, lg: 5, xl: 3}}
                                labelAlign={"left"}
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={48}>
                        <Col md={24} lg={12}>
                            <Form.Item<FieldType>
                                label="Vites"
                                name="transmission"
                                labelCol={{md: 3, lg: 5, xl: 3}}
                                labelAlign={"left"}
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col md={24} lg={12}>
                            <Form.Item<FieldType>
                                label="Renk"
                                name="color"
                                labelCol={{md: 3, lg: 5, xl: 3}}
                                labelAlign={"left"}
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={48}>
                        <Col md={24} lg={12}>
                            <Form.Item<FieldType>
                                label="Yıl"
                                name="year"
                                labelCol={{md: 3, lg: 5, xl: 3}}
                                labelAlign={"left"}
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input/>
                            </Form.Item>

                        </Col>
                        <Col md={24} lg={12}>
                            <Form.Item<FieldType>
                                label="Yakıt"
                                name="fuel"
                                labelCol={{md: 3, lg: 5, xl: 3}}
                                labelAlign={"left"}
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={48}>
                        <Col md={24} lg={12}>
                            <Form.Item<FieldType>
                                label="Plaka"
                                name="plate"
                                labelCol={{md: 3, lg: 5, xl: 3}}
                                labelAlign={"left"}
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>

                        <Col md={24} lg={12}>
                            <Form.Item<FieldType>
                                label="Durum"
                                name="isAvailable"
                                labelCol={{md: 3, lg: 5, xl: 3}}
                                labelAlign={"left"}
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Switch
                                    checkedChildren={<CheckOutlined/>}
                                    unCheckedChildren={<CloseOutlined/>}
                                    defaultChecked
                                    onChange={onChange}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item>
                        <Button>
                            Güncelle
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default UpdateVehicle;