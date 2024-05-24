import React from 'react';
import './HomeVehicleList.scss'
import VehicleListItem from "../../vehicle-list/vehicle-list-item/VehicleListItem";
import {VehiclesMockData} from "../../../../mock/vehiclesMockData";

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation, Scrollbar, A11y, Autoplay} from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';
import classNames from "classnames";

interface ProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    images: string[],
    isAvailable: boolean,
}

const items: ProductProps[] = VehiclesMockData

const HomeVehicleList = () => {
    const classes = classNames("db-home-vehicle-list")

    return (
        <div className={classes}>
            <div className="text-3xl font-semibold pl-5 pb-5 deneme">
                En Fazla Tercih Edilenler
            </div>
            <Swiper
                modules={[Pagination, Navigation, Scrollbar, A11y, Autoplay]}
                spaceBetween={4}
                slidesPerView={3}
                navigation={true}
                style={{
                    "--swiper-navigation-size": "20px",
                }}
            >
                {
                    items.map((item, index) => (
                        item.isAvailable && (
                            <SwiperSlide key={index} className="py-10 px-5">
                                <VehicleListItem
                                    id={item.id}
                                    title={item.title}
                                    description={item.description}
                                    images={item.images}
                                    price={item.price}
                                    isAvailable={item.isAvailable}
                                />
                            </SwiperSlide>
                        )
                    ))
                }
            </Swiper>

            <div className="text-3xl font-semibold pl-5 pb-5">
                Önerilenler
            </div>
            <Swiper
                modules={[Pagination, Navigation, Scrollbar, A11y, Autoplay]}
                spaceBetween={4}
                slidesPerView={3}
                navigation={true}
                style={{
                    "--swiper-navigation-size": "20px",
                }}
            >
                {
                    items.map((item, index) => (
                        item.isAvailable && (
                            <SwiperSlide key={index} className="py-10 px-5">
                                <VehicleListItem
                                    id={item.id}
                                    title={item.title}
                                    description={item.description}
                                    images={item.images}
                                    price={item.price}
                                    isAvailable={item.isAvailable}
                                />
                            </SwiperSlide>
                        )
                    ))
                }
            </Swiper>
        </div>
    );
};

export default HomeVehicleList;