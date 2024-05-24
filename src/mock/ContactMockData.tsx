import {ClockCircleOutlined, FacebookOutlined, InstagramOutlined, XOutlined} from "@ant-design/icons";
import React from "react";

export const WorkingHours = [
    {
        label: <div className="text-base font-semibold -mt-0.5  pr-8">Haftaiçi</div>,
        children: <div className="text-base text-[#333333ff] -mt-0.5">09:00 - 18:00</div>,
        color: 'green',
        dot: <ClockCircleOutlined style={{fontSize: '16px'}}/>,
    },
    {
        label: <div className="text-base font-semibold -mt-0.5 pr-3">Haftasonu</div>,
        children: <div className="text-base text-[#333333ff] -mt-0.5">10:00 - 15:00</div>,
        color: 'green',
        dot: <ClockCircleOutlined style={{fontSize: '16px'}}/>,
    },
]

export const SocialMedias = [
    {
        icon: <InstagramOutlined/>,
        label: "rentacarofficall",
        url: "/"
    },
    {
        icon: <FacebookOutlined/>,
        label: "rentacarofficall",
        url: "/"
    },
    {
        icon: <XOutlined/>,
        label: "rentacarofficall",
        url: "/"
    },
]

export const PhoneNumbers = [
    {
        label: "Müşteri Hizmetleri:",
        phoneNumber: "+90 (123) 456 7890",
    },
    {
        label: "Satış Departmanı:",
        phoneNumber: "+90 (123) 456 7891",
    },
]

export const Mails = [
    {
        label: "Genel Bilgi:",
        mail: "info@rentacar.com",
        url: "/",
    },
    {
        label: "Müşteri Destek:",
        mail: "support@rentacar.com",
        url: "/",
    },
    {
        label: "İşbirlikleri ve Rezervasyonlar:",
        mail: "partnerships@rentacar.com",
        url: "/",
    },
]

export const Address = {
    companyName: "Rent a Car Şirketi",
    streetName: "İnönü Cad. No: 123",
    cityName: "Malatya/Battalgazi, 4400",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50061.24434353787!2d38.23475804676209!3d38.352968152124134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407636e4923c4bad%3A0xa053ec48de5f481b!2sMalatya!5e0!3m2!1str!2str!4v1715868666764!5m2!1str!2str"
}

