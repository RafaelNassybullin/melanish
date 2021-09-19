import React from 'react';
import styled from "styled-components";
import img1 from "./Assets/img/img-1.png";

const SliderOne = () => {
    return (
        <Section>
            <Main>
                <div className="image-one">
                    <img src={img1} alt=""/>
                    <h1>Editorial</h1>
                </div>
            </Main>
        </Section>
    );
};

export default SliderOne;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background: black;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
const Main = styled.main`
  width: 88.056vw;
  height: 34vw;

  .image-one {
    position: relative;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 0 -35vw;
      z-index: 3;
    }
  }

  h1 {
    font-size: 17.278vw;
    font-weight: 400;
    position: absolute;
    top: -12vw;
    left: 50%;
    transform: translateX(-50%);
  }


`
