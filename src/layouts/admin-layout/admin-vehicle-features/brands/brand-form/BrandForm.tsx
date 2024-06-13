import React, {useEffect, useRef} from 'react';
import '../../AdminVehicleFeatures.scss'
import {Link} from "react-router-dom";
import {LeftCircleOutlined} from "@ant-design/icons";
import {Form, FormProps, Input, notification} from "antd";
import Button from "../../../../../components/button/Button";
import {postData} from "../../../../../hooks/postData";
import Brand from "../type";

interface AdminVehicleFeaturesProps {
    id?: string,
    brandData?: Brand
}

const BrandForm: React.FC<AdminVehicleFeaturesProps> = (props) => {
    const {id, brandData} = props
    const isFormValidating = useRef(false);
    const [form] = Form.useForm();
    const endpoint = `http://localhost:5039/api/Brands/`
    console.log(id)
    const onFinish = async (values: any) => {
        try {
            isFormValidating.current = true;
            await form.validateFields();
            if (id) {
                values.id = id;
                const data = await postData({
                    tempUrl: endpoint,
                    values: values,
                });
                if (data) {
                    notification.success({
                        message: 'Success',
                        description: 'İşlem başarılı.',
                    });
                }
                // const updatedData = await fetchDataDetail(1, undefined, endpointFetch);
                // if (setCarouselData) {
                //   setCarouselData(updatedData?.data);
                // }
            } else {
                const data = await postData({
                    tempUrl: endpoint,
                    values: values,
                });
                if (data) {
                    notification.success({
                        message: 'Success',
                        description: 'İşlem başarılı.',
                    });
                }
            }
        } catch (errorInfo) {
            // Validation failed, handle the error if needed
            console.error('Validation failed:', errorInfo);
        } finally {
            isFormValidating.current = false;
        }
    };

    const fetchDataFromLocalStorage = async () => {
        // Local Storage'dan veriyi al
        // Eğer veri varsa ve uygun bir şekilde çözümlenebiliyorsa, formu set et
        // initialValues'i local storage'dan alınan veriyle güncelle
        if (brandData) {
            form.setFieldsValue({
                id: id ?? '',
                name: brandData.name
            });
        }
    };

    const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        if (id && id.length > 0) {
            fetchDataFromLocalStorage();
        }
    }, [id, form]);

    return (
        <div>
            <div>
                <Link to={"/admin/araba-ozellikleri/marka"}
                      className="back-button flex items-center gap-2 w-max text-base font-semibold pb-8"
                >
                    <LeftCircleOutlined/>
                    Tüm Markalar
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
                            labelAlign="left"
                            validateStatus="validating"
                        >
                            <Input className="input-uzunluk id-ayar" disabled={true}/>
                        </Form.Item>
                    ) : null}
                    <Form.Item
                        label={"Marka"}
                        name={"name"}
                        rules={[{required: true, message: 'Please input the required field!'}]}
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

export default BrandForm;