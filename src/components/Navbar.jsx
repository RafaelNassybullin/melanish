import React from 'react';
import styled from "styled-components";

const Navbar = () => {
    return (
        <Nav>
            <div className="about">about</div>
            <div className="logo">MELANISH*</div>
            <div className="contact">contact</div>
        </Nav>
    );
};

export default Navbar;


const Nav = styled.nav`
  width: 100%;
  //background: gray;
  backdrop-filter: blur(30px);
  margin: 0 auto;
  position: fixed;
  font-family: sans-serif;
  font-size: 1.250vw;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  align-items: center;
  padding: 3.681vw 3vw;
  z-index: 99;

  .logo {
    font-size: 1.9vw;
    font-weight: 700;
    cursor: pointer;
  }

  .about {
    cursor: pointer;
    &:hover{
      color: red;
    }
  }

  .contact {
    cursor: pointer;
    &:hover{
      color: red;
    }
  }


`