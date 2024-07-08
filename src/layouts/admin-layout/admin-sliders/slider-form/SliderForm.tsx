import React, {useEffect, useRef} from 'react';
import {Form, Input, notification, Upload} from "antd";
import {Link, useNavigate} from "react-router-dom";
import {putData} from "../../../../hooks/putData";
import {postData} from "../../../../hooks/postData";
import SliderType from "../../../main-layout/home-page/home-slider/type";
import {LeftCircleOutlined, UploadOutlined} from "@ant-design/icons";
import Button from "../../../../components/button/Button";

interface SliderProps {
    id?: string;
    sliderData?: SliderType | null;
}

const SliderForm: React.FC<SliderProps> = ({id, sliderData}) => {
    const isFormValidating = useRef(false);
    const [form] = Form.useForm();
    const endpoint = `http://localhost:5039/api/Sliders`;
    const navigate = useNavigate();

    useEffect(() => {
        form.setFieldsValue({
            id: id ?? '',
            name: sliderData ? sliderData.name : '',
        });
    }, [sliderData, form]);

    const onFinish = async (values: any) => {
        try {
            isFormValidating.current = true;
            await form.validateFields();
            let data: any;

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
                    message: 'Başarılı',
                    description: 'İşlem başarılı.',
                });
                navigate('/admin/slider');
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

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <div>
            <div>
                <Link
                    to={"/admin/slider"}
                    className="back-button flex items-center gap-2 w-max text-base font-semibold pb-8"
                >
                    <LeftCircleOutlined/>
                    Tüm Sliderlar
                </Link>
            </div>
            <div>
                <Form
                    name={"sliderForm"}
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
                        label={"Slider Resmi"}
                        name={"imageUrl"}
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        rules={[{required: true, message: 'Lütfen Slider resmi ekleyiniz!'}]}
                        labelAlign={"left"}
                        wrapperCol={{span: 8}}
                    >
                        <Upload
                            name="File"
                            action={endpoint}
                            listType="picture"
                            headers={{
                                authorization: 'authorization-text',
                            }}
                            data={{Name: form.getFieldValue('name')}}
                            onChange={info => {
                                if (info.file.status === 'done') {
                                    notification.success({
                                        message: `${info.file.name} dosyası başarıyla yüklendi`,
                                    });
                                    setTimeout(() => {
                                        navigate('/admin/slider');
                                    }, 2000);
                                } else if (info.file.status === 'error') {
                                    notification.error({
                                        message: `${info.file.name} dosyasının yüklenmesi başarısız oldu.`,
                                    });
                                }
                            }}
                        >
                            <Button className="flex gap-2">
                                <UploadOutlined/>
                                Slider resmi yüklemek için tıkla
                            </Button>
                        </Upload>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default SliderForm;
