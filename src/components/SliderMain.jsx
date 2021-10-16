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
import useWindowSize from "@rooks/use-window-size";

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

    const w3 = useWindowSize()

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
                        case 1:
                            ets.new2();
                            break
                        case 2:
                            w3.innerWidth <= 433 ? ets.new3mobile() : ets.new3();
                            break
                        case 3:
                            ets.new4();
                            break
                        case 4:
                            ets.new5();
                            break
                        case 5:
                            w3.innerWidth <= 433 ? ets.new7mobile() : ets.new6();
                            break
                        default:
                            ets.new()
                    }
                }}
                mousewheel={true}
                className="mySwiper">
                {arrsl.map((item) => (
                    <SwiperSlide >
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
