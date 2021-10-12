import React, {useRef} from 'react';
import styled from "styled-components";
import img1 from "./Assets/img/main1.jpg";


const SliderOne = () => {
    const animH1 = useRef(null);
    return (
        <Section>
            <Main className={'hbjhbhj'}>
                <div className="image-one">
                    <h1 ref={animH1} className={'animoneh1'}>Aesthetic</h1>
                    <div className={'overlay'}> </div>
                    <img className={'imgOne'} src={img1} alt=""/>
                </div>
            </Main>
        </Section>
    );
};

export default SliderOne;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background: #ffffff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 433px) {
    justify-content: unset;
  }
`
const Main = styled.main`
  width: 88.056vw;
  height: 34vw;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media (max-width: 433px) {
    height: 197vw;
  }
  .image-one {
    width: 100%;
    height: 34vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    @media (max-width: 433px) {
      height: 133vw;
    }
    h1 {
      font-size: 15.278vw;
      font-weight: 400;
      z-index: 6;
      transform: translate(-100vw, -18vw);
      color: white;
      mix-blend-mode: difference;
      @media (max-width: 433px) {
        font-size: 20.278vw;
        margin-bottom: -7vw;
        margin-top: -110vw;
      }
      @media (max-width: 320px) {
        margin-bottom: 1vw;
      }
    }

    div {
      width: 100%;
      height: 100%;
      background: white;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 4;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 0 -13vw;
      z-index: 3;
      border-radius: 1.5vw 1.5vw 0 0;
      @media (max-width: 433px) {
        border-radius: 3.5vw;
      }
    }
  }



`
