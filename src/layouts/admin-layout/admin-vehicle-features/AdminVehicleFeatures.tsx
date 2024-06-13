import React, {useRef} from 'react';
import './AdminVehicleFeatures.scss';
import classNames from "classnames";
import {Form, FormProps, Input} from "antd";
import Button from "../../../components/button/Button";

interface AdminVehicleFeaturesProps {
    formName: string,
    name: string,
    label: string,
}

const AdminVehicleFeatures: React.FC<AdminVehicleFeaturesProps> = (props) => {
    const classes = classNames("db-admin-vehicle-features");
    const {formName, name, label} = props;
    const isFormValidating = useRef(false);
    const [form] = Form.useForm();

    const onFinish = async (values: any) => {
        // try {
        //     isFormValidating.current = true;
        //     await form.validateFields();
        //     if (id) {
        //         values.id = id;
        //         values.brandId = carouselData?.brandId || null;
        //         if (selectedBrandValue) {
        //             values.brandId = parseInt(selectedBrandValue);
        //             values.categoryId = null;
        //         }
        //         if (selectedCategoryValue) {
        //             values.categoryId = parseInt(selectedCategoryValue);
        //             values.brandId = null;
        //         }
        //         setLoading(true);
        //         const data = await postData({
        //             tempUrl: endpoint,
        //             values: values,
        //         });
        //         if (data) {
        //             notification.success({
        //                 message: 'Success',
        //                 description: 'İşlem başarılı.',
        //             });
        //             navigate(-1);
        //         }
        //         // const updatedData = await fetchDataDetail(1, undefined, endpointFetch);
        //         // if (setCarouselData) {
        //         //   setCarouselData(updatedData?.data);
        //         // }
        //     } else {
        //         setLoading(true);
        //         const data = await postData({
        //             tempUrl: endpoint,
        //             values: values,
        //         });
        //         if (data) {
        //             notification.success({
        //                 message: 'Success',
        //                 description: 'İşlem başarılı.',
        //             });
        //             navigate(-1);
        //         }
        //     }
        // } catch (errorInfo) {
        //     // Validation failed, handle the error if needed
        //     console.error('Validation failed:', errorInfo);
        //     setIsLoading(false);
        // } finally {
        //     isFormValidating.current = false;
        //     setLoading(false);
        // }
    };

    const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={classes}>
            <div>
                <Form
                    name={formName}
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label={label}
                        name={name}
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

export default AdminVehicleFeatures;
