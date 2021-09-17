import React from 'react';
import styled from "styled-components";
import female from '../components/Assets/img/female.png'



const SectionOne = () => {
    return (
        <Section>
            <ImgWrap>
                <img src={female} alt=""/>
            </ImgWrap>

            <h1 className={'section-one-title'}>Editorial</h1>
        </Section>
    );
};

export default SectionOne;


const Section = styled.section`
  width: 71.736vw;
  height: 71.736vw;
  position: relative;
  overflow: hidden;
  margin-top: 19.028vw;
  
  .section-one-title{
    font-size: 17.278vw;
    font-weight: 400;
    position: absolute;
    bottom: -8vw;
    right: 0;
    color: #8D8D8D;
  }
`
const ImgWrap = styled.div`
  
  width: 100% ;
  height: 49.097vw;
  
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`