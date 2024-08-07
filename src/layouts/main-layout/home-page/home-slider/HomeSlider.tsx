import React, {useEffect, useState} from 'react';
import './HomeSlider.scss'
import classNames from "classnames";

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {A11y, Autoplay, Navigation, Pagination, Scrollbar} from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';

// Images
import car from "../../../../assets/images/xc90.avif";
import car2 from "../../../../assets/images/xc90-2.avif";
import car3 from "../../../../assets/images/xc90-3.avif";
import car4 from "../../../../assets/images/xc90-4.avif";
import car5 from "../../../../assets/images/xc90-5.avif";
import car6 from "../../../../assets/images/xc90-6.avif";
import {fetchDataDetail} from "../../../../hooks/getData";
import SliderType from "./type";


const HomeSlider = () => {
    const classes = classNames("db-home-slider")
    const [sliders, setSliders] = useState<SliderType[]>([]);
    const endpoint = 'http://localhost:5039/api/Sliders/getall';

    useEffect(() => {
        const fetchSliders = async () => {
            try {
                const data = await fetchDataDetail(endpoint);
                setSliders(data?.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchSliders();
    }, []);

    const images = [car, car2, car3, car4, car5, car6]

    return (
        <div className={classes}>
            <div className="home-slider">
                <Swiper
                    modules={[Pagination, Navigation, Scrollbar, A11y, Autoplay]}
                    autoplay={{delay: 7000, disableOnInteraction: false}}
                    speed={600}
                    loop={true}
                    spaceBetween={16}
                    navigation={true}
                    pagination={{
                        clickable: true
                    }}
                    style={{
                        "--swiper-navigation-size": "20px",
                    }}
                >
                    {sliders.map((item, index) => (
                        <div className="product-image">
                            <SwiperSlide key={index}>
                                <img src={item.imageUrl} alt={"slider image"}/>
                            </SwiperSlide>
                        </div>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default HomeSlider;