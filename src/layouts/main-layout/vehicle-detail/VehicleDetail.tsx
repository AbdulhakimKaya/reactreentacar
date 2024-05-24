import React, {useState} from 'react';
import './VehicleDetail.scss'

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Thumbs, FreeMode, Pagination} from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import {Col, Descriptions, Row} from "antd";
import {VehiclesMockData} from "../../../mock/vehiclesMockData";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';
import classNames from 'classnames';


// Images
import car from "../../../assets/images/xc90.avif";
import car2 from "../../../assets/images/xc90-2.avif";
import car3 from "../../../assets/images/xc90-3.avif";
import car4 from "../../../assets/images/xc90-4.avif";
import car5 from "../../../assets/images/xc90-5.avif";
import car6 from "../../../assets/images/xc90-6.avif";
import type { DescriptionsProps } from 'antd';


const items: DescriptionsProps['items'] = [
    {
        key: '1',
        label: 'Marka',
        children: 'Volvo',
    },
    {
        key: '2',
        label: 'Model',
        children: 'XC90 Recharge',
    },
    {
        key: '3',
        label: 'Renk',
        children: 'Kristal Beyaz',
    },
    {
        key: '4',
        label: 'Vites',
        children: 'Otomatik',
    },
    {
        key: '5',
        label: 'Yıl',
        children: '2024',
    },
    {
        key: '6',
        label: 'Yakıt',
        children: 'Elektrikli/Benzinli',
    },
    {
        key: '7',
        label: 'Plaka',
        children: '21 ASD 2024',
    },
];


const VehicleDetail = () => {
    const content = VehiclesMockData

    const imageCount = content?.length;

    const classes = classNames('vehicle-detail');

    const [activeThumb, setActiveThumb] = useState<SwiperType>();

    const handleSwiper = (swiper: SwiperType) => {
        setActiveThumb(swiper);
    };

    //ToDo: dinamik olarak her aracın kendi image'leri yüklenecek
    const cars = [car, car2, car3, car4, car5, car6]

    return (
        <div className={classes}>
            <Row gutter={40}>
                <Col span={12} flex={"auto"}>
                    <div className="product-images-swiper">
                        <Swiper
                            loop={true}
                            spaceBetween={20}
                            navigation={true}
                            modules={[Navigation, Thumbs, FreeMode]}

                            thumbs={{swiper: activeThumb}}
                            className="product-images-slider"
                            style={{
                                "--swiper-navigation-size": "16px",
                            }}
                        >
                            {cars?.map((car, index) => (
                                <SwiperSlide>
                                    <img
                                        src={car || process.env.NX_NO_IMAGE_URL}
                                        alt="product images"
                                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = process.env.NX_NO_IMAGE_URL!;
                                        }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {imageCount > 1 ? (
                            <div className="thumbs">
                                <Swiper
                                    onSwiper={handleSwiper}
                                    modules={[Navigation, Thumbs, FreeMode]}
                                    loop={false}
                                    spaceBetween={10}
                                    slidesPerView={3}
                                    className="product-images-slider-thumbs"
                                >
                                    {cars?.map((car, index) => (
                                        <SwiperSlide>
                                            <div className="product-images-slider-thumbs-wrapper">
                                                <img
                                                    src={car|| process.env.NX_NO_IMAGE_URL}
                                                    alt="product images"
                                                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.src = process.env.NX_NO_IMAGE_URL!;
                                                    }}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        ) : null}
                    </div>
                </Col>
                <Col span={12}>
                    <div className="vehicle-info">
                        <Descriptions title="Araç Bilgileri" bordered size={"middle"} column={1} items={items} />
                    </div>
                </Col>
            </Row>


        </div>
    );
};

export default VehicleDetail;