
import background from './images/pexels-abdullah-ghatasheh-1631677.jpg'
import wireframe from "./images/wireframe.png"
import styled from 'styled-components'
import React from 'react';
import "./App.css";

const Container = styled.div`
  min-height: 100vh;
  background-color: #282c34;
  background-image: url(${background});
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const Title = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 5em;
  color: white;
`

const WireFrame= styled.div`
  display: flex;
  flex-grow:1;
  align-content: center;
  justify-content: center;
`

const WireFrameImage= styled.img`
  align-self: center;
  justify-self: center;
`


function Cover() {
  return (
    <Container>
      <Title>
        <h1>Vepel</h1>
      </Title>
      <WireFrame>
          <WireFrameImage src={wireframe} width='300'/>
      </WireFrame>
    </Container>
  );
}

export default Cover;