import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Mousewheel} from 'swiper';
import styled from "styled-components";

SwiperCore.use([Mousewheel]);

const arrsl = [
        {name: 'Slide', back: '#4B3869'},
        {name: 'Slide', back: '#F3D5C0'},
        {name: 'Slide', back: '#7EB5A6'},
        {name: 'Slide', back: '#EB92BE'},
        {name: 'Slide', back: '#A45D5D'},
        {name: 'Slide', back: '#FFC069'},
    ]

export default function SliderTest() {

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
                {arrsl.map((item, index) => (
                    <SwiperSlide>
                        <Test style={{background: item.back}}>
                            <h1>{item.name + ` ${index + 1}`}</h1>
                        </Test>
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
const Test = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: white;
    font-size: 98px;
  }
`