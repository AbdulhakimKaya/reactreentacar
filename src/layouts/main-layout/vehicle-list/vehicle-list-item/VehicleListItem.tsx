import React from 'react';
import './VehicleListItem.scss'
import classNames from "classnames";
import Badge from "../../../../components/badge/Badge";
import {truncateText} from "../../../../helpers/Formatting";
import Button from "../../../../components/button/Button";
import {Link} from "react-router-dom";

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation, Scrollbar, A11y, Autoplay} from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';
import {Image} from "antd";


interface ProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    images: string[],
    isAvailable: boolean,
}

const VehicleListItem: React.FC<ProductProps> = (props) => {
    const {id, title, description, price, images, isAvailable} = props
    const classes = classNames("vehicle-list-item")

    return (
        <div className={classes}>
            <div className="flex flex-col border border-[#cacacaff] p-1 w-96 product-card rounded-2xl">
                <Badge isAvailable={isAvailable}/>
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
                        {images.map((item, index) => (
                            <div className="product-image">
                                <SwiperSlide key={index}>
                                    <Image preview={false} src={item} alt={title}/>
                                </SwiperSlide>
                            </div>
                        ))}
                    </Swiper>
                </div>
                <div className="flex flex-col px-4 py-8 gap-y-4 justify-between min-h-[240px]">
                    <div className="flex justify-between items-center px-2 text-[#333333ff]">
                        <Link to={`/arac-detay/${id}`}
                              className="text-2xl font-semibold hover:text-black transition-all">
                            {title}
                        </Link>
                        <div className="text-xl font-semibold">
                            {price}₺
                        </div>
                    </div>
                    <div className="px-2 text-base">
                        {truncateText(description, 80)}
                    </div>
                    <div className="flex justify-between gap-1">
                        <div className="flex-1">
                            <Button size="large" variant={"black"}>
                                Rezervasyon Yap
                            </Button>
                        </div>
                        <Link to={`/arac-detay/${id}`} className="flex-1 hover:text-black">
                            <Button size="large" variant="white-outline">
                                İncele
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleListItem;