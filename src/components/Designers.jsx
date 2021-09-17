import React from 'react';
import styled from "styled-components";


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


const Designers = () => {
    return (
        <Design>

            {designersArr.map((item) => (
                <DesignWrap key={item.name}>
                    <h2>{item.profs}</h2>
                    <h1>{item.name}</h1>
                </DesignWrap>
            ))

            }


        </Design>
    );
};

export default Designers;


const Design = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6.458vw;

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