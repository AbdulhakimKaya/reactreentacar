import React from 'react';
import './Contact.scss'
import classNames from "classnames";
import {Col, Divider, Row, Timeline} from "antd";
import {
    EnvironmentOutlined,
    MailOutlined,
    PhoneOutlined,
} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {Address, Mails, PhoneNumbers, SocialMedias, WorkingHours} from "../../../mock/ContactMockData";
import Each from "../../../helpers/Each";

const Contact = () => {
    const classes = classNames("db-contact")
    const workingHours = WorkingHours
    const socialMedias = SocialMedias
    const phoneNumbers = PhoneNumbers
    const mails = Mails
    const address = Address

    return (
        <div className={classes}>
            <div className="pb-10">
                <Divider orientation={"left"} className="pb-2 divider-border-color">
                    <p className="text-2xl">İletişim</p>
                </Divider>
                <p className="text-lg">
                    Rent a Car'a ulaşmak için aşağıdaki iletişim bilgilerini kullanabilirsiniz. Sorularınız, geri
                    bildirimleriniz veya işbirliği talepleriniz için bizimle iletişime geçmekten çekinmeyin. Size en
                    kısa sürede yanıt vereceğiz.
                </p>
            </div>
            <div className="border border-[#cacacaff] rounded-2xl py-10">
                <Row className="py-5" gutter={24}>
                    <Col xs={24} sm={12} xl={6} className="flex flex-col">
                        <div className="text-base font-semibold text-center pb-9 pr-20">
                            Çalışma Saatleri
                        </div>
                        <Timeline
                            mode={"left"}
                            items={workingHours}
                        />
                    </Col>
                    <Col xs={24} sm={12} xl={6} className="flex flex-col items-center gap-5 contact-content">
                        <Each of={socialMedias} render={(item, index) => (
                            <div className="flex gap-5" key={index}>
                                <div>
                                    {item.icon}
                                </div>
                                <div className="flex flex-col gap-2 text-base font-semibold">
                                    <Link to={item.url}>
                                        {item.label}
                                    </Link>
                                </div>
                            </div>
                        )}/>
                    </Col>
                    <Col xs={24} sm={12} xl={6} className="flex gap-5 contact-content">
                        <div>
                            <PhoneOutlined/>
                        </div>
                        <div className="flex flex-col gap-2 text-base">
                            <Each of={phoneNumbers} render={(item, index) => (
                                <div key={index}>
                                    <div className="font-semibold">
                                        {item.label}
                                    </div>
                                    <div>
                                        {item.phoneNumber}
                                    </div>
                                </div>
                            )}/>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} xl={6} className="flex gap-5 contact-content -ml-5">
                        <div>
                            <MailOutlined/>
                        </div>
                        <div className="flex flex-col gap-2 text-base">
                            <Each of={mails} render={(item, index) => (
                                <div key={index}>
                                    <div className="font-semibold">
                                        {item.label}
                                    </div>
                                    <Link to={item.url}>
                                        {item.mail}
                                    </Link>
                                </div>
                            )}/>
                        </div>
                    </Col>
                </Row>
                <div className="flex justify-center gap-5 contact-content py-5">
                    <div className="w-6">
                        <EnvironmentOutlined/>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex flex-col gap-2 text-base w-[246px]">
                            <div className="font-semibold">
                                <p>
                                    {address.companyName}
                                </p>
                                <p>
                                    {address.streetName}
                                </p>
                                <p>
                                    {address.cityName}
                                </p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <iframe
                                className="border border-[#cacacaff] rounded-2xl"
                                title="address"
                                width={830}
                                height={330}
                                src={address.url}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;