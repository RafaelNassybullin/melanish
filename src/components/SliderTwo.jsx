import React from 'react';
import styled from "styled-components";
import female from "./Assets/img/5.jpg";


const designersArr = [
    {
        profs: 'Art director',
        name: 'geoff levy'
    },
    {
        profs: 'designer',
        name: 'em design'
    },
    {
        profs: 'creative director',
        name: 'natailie schneider'
    }
]

const SliderTwo = () => {
    return (
        <Section>
            <Design className={'desig'}>
                {designersArr.map((item) => (
                    <div key={item.name} className={'desig-block'}>
                        <h2>{item.profs}</h2>
                        <h1>{item.name}</h1>
                    </div>
                ))
                }
            </Design>
            <ImageWrap className={'reveal'}>
                <img className={'image-two'} src={female} alt=""/>
                <div className="ruller"></div>
            </ImageWrap>
        </Section>
    );
};

export default SliderTwo;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Design = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3.458vw 0 3vw 0;

  .desig-block {
    margin: 0 3.021vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: translateY(-12vw);
  }

  h2 {
    text-transform: uppercase;
    font-family: sans-serif;
    font-weight: 400;
    color: #9D9896;
    font-size: 1.111vw;
  }

  h1 {
    text-transform: capitalize;
    font-size: 1.8vw;
  }
`
const ImageWrap = styled.div`
  width: 46.458vw;
  height: 30.097vw;
  align-self: flex-start;
  margin-left: 3vw;
  position: relative;
  overflow: hidden;

  .ruller {
    position: absolute;
    top: -3vw;
    background: #ffffff;
    right: -3vw;
    width: 110%;
    height: 110%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.4);
    border-radius: 1.5vw;
  }
`