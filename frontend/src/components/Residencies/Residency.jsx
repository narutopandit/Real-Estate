import React from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './Residency.css';
import data from '../../utils/slider.json';
import { sliderSettings } from "../../utils/sliderSettings";
const Residency = () => {
    return <section className="paddings innerWidth r-wrapper">
        <div className="flexColStart r-text">
            <span className="orangeText">Best Choices</span>
            <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
            {
                data.map((card, i) => {
                    return <SwiperSlide key={i}>
                        <div className="flexColStart r-card">
                            <img src={card.image} alt="home" />

                            <span className="secondaryText r-price">
                                <span style={{color:"orange"}}>$</span>
                                <span>{card.price}</span>
                            </span>

                            <span className="primaryText">{card.name}</span>
                            <span className="secondaryText">{card.detail}</span>
                        </div>
                    </SwiperSlide>
                })
            }
        </Swiper>
    </section>
}

export default Residency;