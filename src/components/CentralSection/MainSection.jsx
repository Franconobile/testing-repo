import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Workers from './Workers';
import limgravebg from '../../assets/bgs/ER-Limgrave.webp';



const Main = styled.main`
  display: flex;
  flex: 1;
  justify-content: space-between;

    @media (max-width: 768px) {
    flex-direction: column; /* Cambiar a columnas en pantallas pequeñas */
    padding: 10px;
  }
`;

const DisplayArea = styled.section`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #fff;
  margin: 0px;

    @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    padding: 10px;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${limgravebg});
  background-size: cover;
  background-position: center;
  z-index: -2;  /* Pa que esté detrás de todo */
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 10) 100%),
              linear-gradient(to right, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.9) 100%);
  z-index: -1; 
`;

const DisplayContent = styled.div`
  text-align: center;
  width: 100%;
`;


const MainSection = ({  clickCount, setClickCount, workersCount, newWorkerBought   }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setClickCount(prevCount => prevCount + workersCount);
    }, 1000);

    return () => clearInterval(interval);
  }, [workersCount, setClickCount]);

    return (
      <Main>
        <DisplayArea>
          <BackgroundImage />
          <GradientOverlay />
          <DisplayContent>
            <p>Aquí irá el fondo</p>
          </DisplayContent>
        </DisplayArea>
        <Workers workersCount={workersCount} newWorkerBought={newWorkerBought}/>
      </Main>
    );
  };
  
  export default MainSection;
