import React, {useState} from "react";
import './LoginRegister.scss';
import classNames from "classnames";
import {Link} from "react-router-dom";

function LoginRegister() {
    const classes = classNames("db-login-register")

    const [isLogin, setIsLogin] = useState(true);

    const handleLoginClick = () => {
        setIsLogin(true);
    };

    const handleSignupClick = () => {
        setIsLogin(false);
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
                        <form className="login" id="login-form">
                            <div className="field">
                                <input
                                    type="emailll"
                                    name="emailll"
                                    id="emailll"
                                    className=""
                                    placeholder="E-Post Adresiniz"
                                    required
                                />
                            </div>
                            <div className="field">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className=""
                                    placeholder="Şifreniz"
                                    required
                                />
                            </div>
                            <div className="pass-link">
                                <Link to={"/"} className="ml-3 mt-1 text-decoration-none">
                                    Şifrenizi mi unuttunuz?
                                </Link>
                            </div>
                            <div className="field">
                                <button
                                    type="submit"
                                    id="login-link"
                                >
                                    Giriş Yap
                                </button>
                            </div>
                        </form>
                        <form
                            className="signup"
                            id="sign-up-form"
                        >
                            <div className="field">
                                <input
                                    type="text"
                                    name="ad"
                                    pattern="[A-Za-z]*"
                                    className=""
                                    placeholder="Ad"
                                    required
                                    id="id_ad"
                                />
                            </div>
                            <div className="field">
                                <input
                                    type="text"
                                    name="soyad"
                                    pattern="[A-Za-z]*"
                                    className=""
                                    placeholder="Soyad"
                                    required
                                    id="id_soyad"
                                />
                            </div>
                            <div className="field">
                                <input
                                    type="email"
                                    name="email"
                                    className=""
                                    placeholder="E-mail"
                                    required
                                    id="id_email"
                                />
                            </div>
                            <div className="field">
                                <input
                                    type="password"
                                    name="password"
                                    className=""
                                    placeholder="Parola"
                                    required
                                    id="id_password"
                                />
                            </div>
                            <div className="field">
                                <input
                                    type="password"
                                    name="password_confirm"
                                    className=""
                                    placeholder="Parola Tekrarı"
                                    required
                                    id="id_password_confirm"
                                />
                            </div>
                            <div className="field">
                                <button
                                    id="kayit-ol-btn"
                                    type="submit"
                                >
                                    Kayıt Ol
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginRegister;
