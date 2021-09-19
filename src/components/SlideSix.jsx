import React from 'react';
import styled from "styled-components";



const SliderSix = () => {
    return (
        <Section>
            <TextWrap>
                <h1>Editorial</h1>
                <h1>Editorial</h1>
                <h1>Editorial</h1>
                <Image>
                    <img src="" alt=""/>
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
    h1{
      font-size: 10.625vw;
      font-weight: 400;
    }
`

const Image = styled.div`
  width: 23.458vw;
  height: 35.097vw;
  background: orangered;
  position: absolute;
  top: 2vw;
  left: 50%;
    transform: translateX(-50%) rotate(7deg);
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
`