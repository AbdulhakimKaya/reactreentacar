import React from 'react';
import './Footer.scss'
import logo from "../../../assets/images/RentACarLogo.jpg";
import {Link} from "react-router-dom";
import {
    EnvironmentOutlined,
    FacebookOutlined,
    InstagramOutlined,
    MailOutlined,
    PhoneOutlined,
    XOutlined
} from "@ant-design/icons";
import classNames from "classnames";

function Footer() {
    const classes = classNames("db-footer")

    return (
        <div className={classes}>
            <div className="bg-[#FFF1F0] font-semibold">
                <div className="flex justify-between max-w-[1280px] mx-auto mt-24 pt-10 text-sm">
                    <div className="flex flex-col gap-y-5">
                        <Link to="/">
                            <img
                                src={logo}
                                className="w-[100px]"
                                alt="DerinBilgiSistemleriLogo"
                            />
                        </Link>
                        <div>
                            Rent a Car
                        </div>
                        <div>
                            En iyi araç kiralama deneyimi için buradayız.
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <Link to={"/"}>Anasayfa</Link>
                        <Link to={"/araclar"}>Araçlar</Link>
                        <Link to={"/hakkimizda"}>Hakkımızda</Link>
                        <Link to={"/iletisim"}>İletişim</Link>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                        <div className="flex gap-2">
                            <div>
                                <InstagramOutlined/>
                            </div>
                            <div className="flex flex-col gap-2 text-base">
                                <Link to={"/"}>
                                    rentacarofficall
                                </Link>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <FacebookOutlined/>
                            </div>
                            <div className="flex flex-col gap-2 text-base">
                                <Link to={"/"}>
                                    rentacarofficall
                                </Link>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <XOutlined/>
                            </div>
                            <div className="flex flex-col gap-2 text-base">
                                <Link to={"/"}>
                                    rentacarofficall
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-2">
                                <div className="pt-1">
                                    <EnvironmentOutlined/>
                                </div>
                                <div>
                                    <p>Rent a Car Şirketi</p>
                                    <p>İnönü Cad. No: 123</p>
                                    <p>Malatya/Battalgazi, 4400</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div>
                                    <PhoneOutlined/>
                                </div>
                                <div>
                                    <div className="font-semibold">Müşteri Hizmetleri:</div>
                                    <div>+90 (123) 456 7890</div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div>
                                    <MailOutlined/>
                                </div>
                                <div>
                                    <div className="font-semibold">Genel Bilgi:</div>
                                    <Link to={"/"}>info@rentacar.com</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <iframe
                                className="border border-[#cacacaff] rounded-2xl"
                                title="address"
                                width={320}
                                height={160}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50061.24434353787!2d38.23475804676209!3d38.352968152124134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407636e4923c4bad%3A0xa053ec48de5f481b!2sMalatya!5e0!3m2!1str!2str!4v1715868666764!5m2!1str!2str"
                            />
                        </div>
                    </div>
                </div>
                <div className="pt-10 pb-5 text-center text-sm">
                    &copy; 2024 Rent a Car. Tüm hakları saklıdır.
                </div>
            </div>
        </div>
    );
}

export default Footer;