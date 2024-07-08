import React, {useEffect, useState} from 'react';
import './VehicleDetail.scss'
import VehicleType from "../../admin-layout/admin-vehicles/type";
import {fetchDataDetail} from "../../../hooks/getData";
import {useParams} from "react-router-dom";

// Import Swiper
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
import {Swiper as SwiperType} from 'swiper';
import {Col, Descriptions, Row} from "antd";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';
import classNames from 'classnames';
import Button from "../../../components/button/Button";
import Badge from "../../../components/badge/Badge";
import ReservationModal from "../../../components/reservationModal/ReservationModal";


const VehicleDetail = () => {
    const classes = classNames('vehicle-detail');
    const [activeThumb, setActiveThumb] = useState<SwiperType>();

    const handleSwiper = (swiper: SwiperType) => {
        setActiveThumb(swiper);
    };


    const {id} = useParams();
    const endpoint = `http://localhost:5039/api/Cars/${id}`;
    const [vehicle, setVehicle] = useState<VehicleType>();

    const vehicleDetail = [
        {
            key: '1',
            label: 'Marka',
            children: vehicle?.brandName,
        },
        {
            key: '2',
            label: 'Model',
            children: vehicle?.modelName,
        },
        {
            key: '3',
            label: 'Renk',
            children: vehicle?.colorName,
        },
        {
            key: '4',
            label: 'Vites',
            children: vehicle?.transmissionName,
        },
        {
            key: '5',
            label: 'Yıl',
            children: vehicle?.modelYear,
        },
        {
            key: '6',
            label: 'Yakıt',
            children: vehicle?.fuelName,
        },
        {
            key: '7',
            label: 'Plaka',
            children: vehicle?.plate,
        },
    ]

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const data = await fetchDataDetail(endpoint);
                setVehicle(data?.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchCars();
    }, []);

    return (
        <div className={classes}>
            <Row gutter={40}>
                <Col span={15} flex={"auto"}>
                    <div className="product-images-swiper">
                        {vehicle?.imagesRoot && (
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
                                {vehicle?.imagesRoot?.map((car, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={`http://localhost:5039/images/${car}`}
                                            alt="product images"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}

                        {vehicle?.imagesRoot && (
                            <div className="thumbs">
                                <Swiper
                                    onSwiper={handleSwiper}
                                    modules={[Navigation, Thumbs, FreeMode]}
                                    loop={false}
                                    spaceBetween={10}
                                    slidesPerView={3}
                                    className="product-images-slider-thumbs"
                                >
                                    {vehicle?.imagesRoot?.map((car, index) => (
                                        <SwiperSlide key={index}>
                                            <img
                                                src={`http://localhost:5039/images/${car}`}
                                                alt="product images"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        )}
                    </div>
                </Col>
                <Col span={9}>
                    <div className="vehicle-info">
                        <Descriptions title="Araç Bilgileri" bordered size={"middle"} column={1} items={vehicleDetail}/>
                        <div className="font-semibold text-3xl pt-12 flex items-center justify-between">
                            <Badge isAvailable={vehicle?.carState} variant={"detail"}/>
                            {vehicle?.dailyPrice}₺
                        </div>
                        <div className="flex-1">
                            <Button size="large" variant={"black"} disabled={vehicle?.carState !== 0}
                                    onClick={showModal}>
                                Rezervasyon Yap
                            </Button>
                            <ReservationModal isModalOpen={isModalOpen}
                                              handleCancel={handleCancel}/>
                        </div>
                    </div>
                </Col>
            </Row>


        </div>
    );
};

export default VehicleDetail;