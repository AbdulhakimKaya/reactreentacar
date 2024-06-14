import React, {useEffect, useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {LeftCircleOutlined} from "@ant-design/icons";
import {Form, Input, notification} from "antd";
import Button from "../../../../../components/button/Button";
import {postData} from "../../../../../hooks/postData";
import Brand from "../type";
import {putData} from "../../../../../hooks/putData";

interface ColorProps {
    id?: string;
    colorData?: Brand | null;
}

const ColorForm: React.FC<ColorProps> = ({id, colorData}) => {
    const isFormValidating = useRef(false);
    const [form] = Form.useForm();
    const endpoint = `http://localhost:5039/api/Colors/`;
    const navigate = useNavigate();

    useEffect(() => {
        form.setFieldsValue({
            id: id ?? '',
            name: colorData ? colorData.name : '',
        });
    }, [colorData, form]);

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
                navigate('/admin/araba-ozellikleri/renk');
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
                <Link
                    to={"/admin/araba-ozellikleri/renk"}
                    className="back-button flex items-center gap-2 w-max text-base font-semibold pb-8"
                >
                    <LeftCircleOutlined/>
                    Tüm Markalar
                </Link>
            </div>
            <div>
                <Form
                    name={"colorForm"}
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
                            <Input disabled={true}/>
                        </Form.Item>
                    ) : null}
                    <Form.Item
                        label={"Renk"}
                        name={"name"}
                        rules={[{required: true, message: 'Lütfen Renk alanını doldurunuz!'}]}
                        labelAlign={"left"}
                        wrapperCol={{span: 8}}
                    >
                        <Input/>
                    </Form.Item>
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

export default ColorForm;
