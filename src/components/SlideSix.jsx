import React from 'react';
import styled from "styled-components";
import fiveThree from "./Assets/img/endimg.jpg";


const SliderSix = () => {
    return (
        <Section>
            <TextWrap>
                <div className={'text-container'}>
                    <h1 className={'text-5 one-text'}>Editorial</h1>
                    <h1 className={'text-5 two-text'}>Editorial</h1>
                    <h1 className={'text-5 three-text'}>Editorial</h1>
                </div>
                <Image className={'anim-img6'}>
                    <img src={fiveThree} alt=""/>
                </Image>
            </TextWrap>
        </Section>
    );
};

export default SliderSix;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TextWrap = styled.div`
  position: relative;

  .text-container {
    position: relative;
    transform: translateX(-100vw);
  }

  h1 {
    position: absolute;
    left: -19vw;
    bottom: -18vw;
    font-size: 10.625vw;
    font-weight: 400;
    -webkit-text-stroke: 0.146vw black;
    color: #ffffff;
    @media (max-width: 433px) {
      left: -46vw;
      bottom: -41vw;
      font-size: 26.625vw;
    }

    &:nth-child(3) {
      color: black;
    }
  }
`

const Image = styled.div`
  width: 23.458vw;
  height: 35.097vw;
  position: absolute;
  top: -16vw;
  left: 50%;
  transform: translateX(-50%) scale(0);
  @media (max-width: 433px) {
    width: 47.458vw;
    height: 72.097vw;
    top: -38vw;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1.5vw;
    @media (max-width: 433px) {
      border-radius: 3.5vw;
    }
  }

`