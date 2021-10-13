import React from 'react';
import styled from "styled-components";
import girlInPorsche from "./Assets/img/devyshka_v_porsche.jpg";

const SlideThree = () => {
    return (
        <Section>
            <ImageWrap>
                <img className={'test'} src={girlInPorsche} alt=""/>
                <h1 className={'animh1'}>Hachiroku</h1>
            </ImageWrap>
        </Section>
    );
};

export default SlideThree;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  @media (max-width: 433px) {
    justify-content: center;
  }
`
const ImageWrap = styled.div`
  width: 53.458vw;
  height: 30.097vw;
  align-self: flex-end;
  margin: 0 7vw 3vw 0;
  position: relative;
  transform: translateX(-100%);
  @media (max-width: 433px) {
    width: 89.458vw;
    height: 62.097vw;
  }

  h1 {
    font-size: 11.278vw;
    font-weight: 400;
    position: absolute;
    display: none;
    top: -2vw;
    color: #000000;
    z-index: -1;
    left: 57.5vw;
    @media (max-width: 433px) {
      font-size: 17.278vw;
      left: 97.5vw;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 6;
    border-radius: 1.5vw;
    @media (max-width: 433px) {
      border-radius: 3.5vw;
    }
  }
`