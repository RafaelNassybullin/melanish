import React from 'react';
import styled from "styled-components";
import valse from "./Assets/img/section2.png";

const SlideThree = () => {
    return (
        <Section>
            <ImageWrap>
                <img src={valse} alt=""/>
                <h1>Editorial</h1>
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
  
`
const ImageWrap = styled.div`
  width: 53.458vw;
  height: 30.097vw;
  align-self: flex-end;
  margin: 0 7vw 3vw 0;
  position: relative;
  h1{
    font-size: 13.278vw;
    font-weight: 400;
    position: absolute;
    top: -10vw;
    color: #8D8D8D;
    z-index: -1;
    left: 1.5vw;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 6;
  }
`