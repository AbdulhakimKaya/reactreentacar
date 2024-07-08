import React, {useEffect, useState} from 'react';
import './VehicleList.scss'
import {Col, Row} from "antd";
import classNames from "classnames";
import Badge from "../../../components/badge/Badge";

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {A11y, Autoplay, Navigation, Pagination, Scrollbar} from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';
import VehicleType from "../../admin-layout/admin-vehicles/type";
import {fetchDataDetail} from "../../../hooks/getData";
import Button from "../../../components/button/Button";
import {Link} from "react-router-dom";


function VehicleList() {
    const classes = classNames("vehicle-list")
    const [vehicles, setVehicles] = useState<VehicleType[]>([]);
    const endpoint = 'http://localhost:5039/api/Cars/getall';

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const data = await fetchDataDetail(endpoint);
                setVehicles(data?.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchCars();
    }, []);

    return (
        <div className={classes}>
            {/* ToDo: Filters yapısı eklenecek */}
            {/*<Filters/>*/}
            <Row gutter={[64, 64]} className="pt-10 pb-20">
                {
                    vehicles.map((item, index) => (
                        <Col key={index}>
                            <div className="vehicle-list-item">
                                <div
                                    className="flex flex-col border border-[#cacacaff] p-1 w-96 product-card rounded-2xl">
                                    <Badge isAvailable={item.carState} variant={"list"}/>
                                    <div className="product-images p-3">
                                        <Swiper
                                            modules={[Pagination, Navigation, Scrollbar, A11y, Autoplay]}
                                            spaceBetween={16}
                                            navigation={true}
                                            pagination={{
                                                clickable: true
                                            }}
                                            style={{
                                                "--swiper-navigation-size": "14px",
                                            }}
                                        >
                                            {
                                                item.imagesRoot.length > 0 && (
                                                    item.imagesRoot.map((i, index) => (
                                                        <div className="product-image">
                                                            <SwiperSlide key={index}>
                                                                <img
                                                                    src={`http://localhost:5039/images/${i}`}
                                                                    alt={"car image"}/>
                                                            </SwiperSlide>
                                                        </div>
                                                    ))
                                                )
                                            }
                                        </Swiper>
                                    </div>
                                    <div className="flex flex-col px-4 py-8 gap-y-2.5 justify-between min-h-[240px]">
                                        <div className="flex justify-between items-center px-2 text-[#333333ff]">
                                            <Link to={`/arac-detay/${item.id}`}
                                                  className="text-2xl font-semibold hover:text-black transition-all">
                                                {item.brandName} {item.modelName}
                                            </Link>
                                            <div className="text-xl font-semibold">
                                                {item.dailyPrice}₺
                                            </div>
                                        </div>
                                        <div className="px-2 text-lg">
                                            {item.transmissionName}
                                        </div>
                                        <div className="px-2 text-lg">
                                            {item.fuelName}
                                        </div>
                                        <div className="px-2 text-lg">
                                            {item.colorName}
                                        </div>
                                        <div className="flex justify-between gap-1">
                                            <div className="flex-1">
                                                <Button size="large" variant={"black"} disabled={item?.carState !== 0}>
                                                    Rezervasyon Yap
                                                </Button>
                                            </div>
                                            <Link to={`/arac-detay/${item.id}`} className="flex-1 hover:text-black">
                                                <Button size="large" variant="white-outline">
                                                    İncele
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
}

export default VehicleList;