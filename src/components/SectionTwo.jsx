import React from 'react';
import styled from "styled-components";
import section2 from '../components/Assets/img/section2.png'



const SectionTwo = () => {
    return (
        <Section>
            <ImgWrap>
                <img src={section2} alt=""/>
            </ImgWrap>
        </Section>
    );
};

export default SectionTwo;


const Section = styled.section`
  width: 100%;
  height: 49.097vw;
  //position: relative;
  overflow: hidden;
  //margin-top: 19.028vw;
  display: flex;
  justify-content: flex-end;
`
const ImgWrap = styled.div`
  margin-right: 5.2vw;
  width: 71.458vw;
  height: 100%;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`