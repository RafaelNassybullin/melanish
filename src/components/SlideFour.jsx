import React from 'react';
import styled from "styled-components";
import img4 from "./Assets/img/imageee.jpg";

const SlideFour = () => {
    return (
        <Section>
            <ImageWrap>
                <img src={img4} alt=""/>
            </ImageWrap>
        </Section>
    );
};

export default SlideFour;

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
  width: 56.458vw;
    height: 36.097vw;
  align-self: flex-start;
  margin: 0 0 3vw 7vw;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`