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
//1.сверстать 'меланиш' с фигмы, в отдельные слайды.

//2.импорт конпонентов, массив (arrsl) имен импортов компонетов

//3.анимация в отдельном js файле, разные имена функций для запуска анимаций gsap

//4.realindex+1 для реакт найти

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
