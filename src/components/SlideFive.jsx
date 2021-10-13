import React from 'react';
import styled from "styled-components";
import fiveOne from "./Assets/img/1.jpg";
import fiveTwo from "./Assets/img/2.jpg";
import fiveThree from "./Assets/img/3.jpg";


const arrFiveImg = [fiveOne, fiveTwo, fiveThree]

const SlideFive = () => {
    return (
        <Section>
            {arrFiveImg.map((item) => (<ImageWrap className={'img5'}>
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
  @media(max-width: 433px){
      flex-direction: column;
  }
`

const ImageWrap = styled.div`
  width: 23.458vw;
  height: 35.097vw;
  margin: 3vw;
  overflow: hidden;
  border-radius: 1.5vw;
  transform: translateY(100vw);
  @media(max-width: 433px){
      width: 70.458vw;
      height: 46.097vw;
      margin: 4vw;
      border-radius: 3.5vw;
  }
  img {
    width: 100%;
    height: 100%;
    transform: scale(1.1);
    object-fit: cover;
  }

  &:nth-child(2) {
    align-self: flex-end;
    margin-bottom: 1vw;
    img{
      @media(max-width: 433px){
          object-position: 0vw -18vw;
      }
    }
    @media(max-width: 433px){
        align-self: center;
      
    }
  }
`