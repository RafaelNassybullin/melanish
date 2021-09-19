import React from 'react';
import styled from "styled-components";
import fiveOne from "./Assets/img/fiveone.png";
import fiveTwo from "./Assets/img/fivetwo.png";
import fiveThree from "./Assets/img/fivethree.png";


const arrFiveImg = [fiveOne, fiveTwo, fiveThree]

const SlideFive = () => {
    return (
        <Section>
            {arrFiveImg.map((item) => (<ImageWrap>
                <img src={item} alt=""/>
            </ImageWrap>))}
        </Section>
    );
};

export default SlideFive;


const Section = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
`

const ImageWrap = styled.div`
  width: 23.458vw;
  height: 35.097vw;
  background: orangered;
  margin: 3vw;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:nth-child(2){
    align-self: flex-end;
    margin-bottom: 1vw;
  }
`