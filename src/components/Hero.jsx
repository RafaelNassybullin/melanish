import React from 'react';
import styled from "styled-components";
import img1 from "../components/Assets/img/img-1.png";


const Hero = () => {
    return (
        <Main>
            <div className="image-one">
                <img src={img1} alt=""/>
            </div>
            <h1>Editorial</h1>
        </Main>
    );
};

export default Hero;


const Main = styled.nav`
  margin-top: 14.292vw;
  position: relative;
  
  .image-one{
    width: 88.056vw;
    height: 58.611vw;
    
    
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  h1{
    font-size: 17.278vw;
    font-weight: 400;
    position: absolute;
    top: -12vw;
    left: 50%;
    transform: translateX(-50%);
  }
`