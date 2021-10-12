import React from 'react';
import styled from "styled-components";
import img4 from "./Assets/img/0d76d85861c81f297adccd6509e933c1.jpg";

const SlideFour = () => {
    return (
        <Section>
            <ImageWrap>
                <img className={'img4'} src={img4} alt=""/>
{/*добавить в мобильную часть еще одну картинку с мозайкой покрсить в разные цвета*/}
                <div className={'box'}></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>

                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>

                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>

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
  position: relative;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    transform: scale(1.1);
    border-radius: 3vw;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .box {
    width: 25%;
    height: 33.333%;
    background: #ffffff;
  }
`