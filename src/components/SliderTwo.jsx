import React from 'react';
import styled from "styled-components";
import female from "./Assets/img/female.png";


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
            <Design>
                {designersArr.map((item) => (
                    <DesignWrap key={item.name}>
                        <h2>{item.profs}</h2>
                        <h1>{item.name}</h1>
                    </DesignWrap>
                ))
                }
            </Design>
            <ImageWrap>
                <img src={female} alt=""/>
            </ImageWrap>


        </Section>
    );
};

export default SliderTwo;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background: black;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Design = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3.458vw 0 3vw 0;
`
const DesignWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 3.021vw;

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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`