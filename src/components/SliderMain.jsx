import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Mousewheel} from 'swiper';
import styled from "styled-components";
import SliderOne from "./SliderOne";
import SliderTwo from "./SliderTwo";
import SlideThree from "./SlideThree";
import SlideFour from "./SlideFour";
import SlideFive from "./SlideFive";
import SliderSix from "./SlideSix";
import ets from "./Animations";

SwiperCore.use([Mousewheel]);

const arrsl = [
    {slide: SliderOne},
    {slide: SliderTwo},
    {slide: SlideThree},
    {slide: SlideFour},
    {slide: SlideFive},
    {slide: SliderSix},
]

export default function SliderMain() {

    return (
        <Slider>
            <Swiper
                style={{height: '100vh'}}
                direction={'vertical'}
                loop={true}
                speed={1000}
                modules={[Mousewheel]}
                onSlideChange={(e) => {
                    switch (e.realIndex) {
                        case 1: ets.new2(); break
                        case 2: ets.new3(); break
                        case 3: ets.new4(); break
                        case 4: ets.new5(); break
                        case 5: ets.new6(); break
                        default: ets.new()
                    }
                }}
                mousewheel={true}
                className="mySwiper">
                {arrsl.map((item) => (
                    <SwiperSlide>
                        {item.slide}
                    </SwiperSlide>))}
            </Swiper>
        </Slider>
    )
}
const Slider = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  
`
