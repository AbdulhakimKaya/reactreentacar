import React, {useRef, useState} from "react";
import './LoginRegister.scss';
import classNames from "classnames";
import {Link, useNavigate} from "react-router-dom";
import {Form, Input, notification} from "antd";
import Button from "../../../components/button/Button";
import {postData} from "../../../hooks/postData";

function LoginRegister() {
    const classes = classNames("db-login-register")
    const isFormValidating = useRef(false);
    const [form] = Form.useForm();
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const endpointLogin = `http://localhost:5039/api/Auth/login/`
    const endpointRegister = `http://localhost:5039/api/Auth/register/`
    const handleLoginClick = () => {
        setIsLogin(true);
    };

    const handleSignupClick = () => {
        setIsLogin(false);
    };
    const onFinishLogin = async (values: any) => {
        try {
            isFormValidating.current = true;
            await form.validateFields();
            let data: any
            data = await postData({
                tempUrl: endpointLogin,
                values: values,
            });
            sessionStorage.setItem('accessToken', data.accessToken.token);
            console.log(data)
            if (data) {
                notification.success({
                    message: 'Success',
                    description: 'İşlem başarılı.',
                });
                navigate('/');
                window.location.reload();
            }
        } catch (errorInfo) {
            console.error('Validation failed:', errorInfo);
        } finally {
            isFormValidating.current = false;
        }
    };
    const onFinishRegister = async (values: any) => {
        try {
            isFormValidating.current = true;
            await form.validateFields();
            let data: any
            data = await postData({
                tempUrl: endpointRegister,
                values: values,
            });
            sessionStorage.setItem('accessToken', data.token);
            console.log(data)
            if (data) {
                notification.success({
                    message: 'Success',
                    description: 'İşlem başarılı.',
                });
                navigate('/');
                window.location.reload();
            }
        } catch (errorInfo) {
            console.error('Validation failed:', errorInfo);
        } finally {
            isFormValidating.current = false;
        }
    };
    return (
        <div className={classes}>
            <div className="wrapper">
                <div className="title-text">
                    <div className="title-text">
                        <div className={`title ${isLogin ? "login" : "signup"}`}>
                            {isLogin ? "Giriş Yap" : "Kayıt Ol"}
                        </div>
                    </div>
                </div>
                <div className="form-container">
                    <div className="slide-controls">
                        <input
                            className="account-radio"
                            type="radio"
                            name="slider"
                            id="login"
                            checked={isLogin}
                            onChange={handleLoginClick}
                        />
                        <input
                            className="account-radio"
                            type="radio"
                            name="slider"
                            id="signup"
                            checked={!isLogin}
                            onChange={handleSignupClick}
                        />
                        <label htmlFor="login" className={`slide login ${isLogin ? "active" : ""}`}
                               onClick={handleLoginClick}>
                            Giriş Yap
                        </label>
                        <label htmlFor="signup" className={`slide signup ${!isLogin ? "active" : ""}`}
                               onClick={handleSignupClick}>
                            Kayıt Ol
                        </label>
                        <div className={`slide-tab ${!isLogin ? "move" : ""}`}></div>
                    </div>

                    <div className="form-inner" style={{marginLeft: isLogin ? "0%" : "-100%"}}>

                        {/* Login Form */}
                        <Form onFinish={onFinishLogin} className="login" id="login-form">
                            <div className="field">
                                <Form.Item
                                    id="email"
                                    name="email"
                                    rules={[{type: 'email', required: true}]}
                                >
                                    <Input placeholder="E-Post Adresiniz"/>
                                </Form.Item>
                            </div>
                            <div className="field-password">
                                <Form.Item
                                    id="password"
                                    name="password"
                                    rules={[{required: true}]}
                                >
                                    <Input.Password placeholder="Şifreniz"/>
                                </Form.Item>
                            </div>
                            <div className="pass-link">
                                <Link to={"/"} className="ml-3 mt-1 text-decoration-none">
                                    Şifrenizi mi unuttunuz?
                                </Link>
                            </div>
                            <div className="field">
                                <Form.Item>
                                    <Button htmlType="submit">
                                        Giriş Yap
                                    </Button>
                                </Form.Item>
                            </div>
                        </Form>


                        {/* Register Form */}
                        <Form
                            className="signup"
                            id="sign-up-form"
                            onFinish={onFinishRegister}
                        >
                            <div className="field">
                                <Form.Item
                                    id="firstName"
                                    name="firstName"
                                    rules={[{type: 'string', required: true}]}
                                >
                                    <Input placeholder="İsim"/>
                                </Form.Item>
                            </div>
                            <div className="field">
                                <Form.Item
                                    id="lastName"
                                    name="lastName"
                                    rules={[{type: 'string', required: true}]}
                                >
                                    <Input placeholder="Soyisim"/>
                                </Form.Item>
                            </div>
                            <div className="field">
                                <Form.Item
                                    id="email"
                                    name="email"
                                    rules={[{type: 'email', required: true}]}
                                >
                                    <Input placeholder="E-Post Adresiniz"/>
                                </Form.Item>
                            </div>
                            <div className="field-password">
                                <Form.Item
                                    id="password"
                                    name="password"
                                    rules={[{required: true}]}
                                >
                                    <Input.Password placeholder="Şifreniz"/>
                                </Form.Item>
                            </div>
                            <div className="field">
                                <Form.Item>
                                    <Button htmlType="submit">
                                        Kayıt Ol
                                    </Button>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginRegister;
