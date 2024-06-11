import React from 'react';
import './AdminVehicleFeatures.scss'
import classNames from "classnames";
import {Form, FormProps, Input} from "antd";
import Button from "../../../components/button/Button";


interface AdminVehicleFeaturesProps {
    formName: string,
    name: string,
    label: string,
}

const AdminVehicleFeatures: React.FC<AdminVehicleFeaturesProps> = (props) => {
    const classes = classNames("db-admin-vehicle-features")
    const {formName, name, label} = props

    const onFinish: FormProps['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className={classes}>
            <div>
                <Form
                    name={formName}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label={label}
                        name={name}
                        rules={[{required: true, message: 'Please input your username!'}]}
                        labelAlign={"left"}
                        wrapperCol={{span: 8}}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item>
                        <Button>
                            Kaydet
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default AdminVehicleFeatures;