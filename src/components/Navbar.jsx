import React from 'react';
import styled from "styled-components";
// import gsap from "gsap";

const Navbar = () => {

    return (
        <Nav className={'navbar'}>
            <div className={'wrapper-nav-logo'}>
                <div className="logo">RAFAEL*
                    <div className={'over'}> </div>
                </div>
            </div>
            <div className="about">about</div>
            <div className="contact">contact</div>
        </Nav>
    );
};

export default Navbar;


const Nav = styled.nav`
  width: 100%;
  backdrop-filter: blur(2.196vw);
  margin: 0 auto;
  position: fixed;
  font-family: sans-serif;
  font-size: 1.250vw;
  top: -100%;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  align-items: center;
  padding: 1.3vw 3vw;
  z-index: 99;
  @media(max-width: 433px){
      font-size: 4.25vw;
    padding: 4.3vw 8vw;
  }

  .logo {
    font-size: 1.9vw;
    font-weight: 700;
    cursor: pointer;
    color: white;
    order: 0;
    transform: scale(1) translate(0vw, 0vw);
    border: 0.220vw solid black;
    position: relative;
    @media(max-width: 433px){
        font-size: 6.9vw;
      border: 0.70vw solid black;
    }

    .over {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      background: #a51212;
    }
  }

  .about {
    cursor: pointer;
    order: 0;

    &:hover {
      color: red;
    }
  }

  .contact {
    cursor: pointer;
    order: 1;

    &:hover {
      color: red;
    }
  }
`