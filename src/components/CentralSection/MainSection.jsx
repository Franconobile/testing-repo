import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Workers from './Workers';

const Main = styled.main`
  display: flex;
  flex: 1;
  padding: 20px;
  justify-content: space-between;
`;

const DisplayArea = styled.section`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #030303;
  color: #fff;
  padding: 20px;
  margin-right: 20px;
`;

const DisplayContent = styled.div`
  text-align: center;
  width: 100%;
`;


const MainSection = ({  clickCount, setClickCount, workersCount  }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setClickCount(prevCount => prevCount + workersCount);
    }, 1000);

    return () => clearInterval(interval);
  }, [workersCount, setClickCount]);

    return (
      <Main>
        <DisplayArea>
          <DisplayContent>
            <p>Aquí se mostrará un WebM al tirar un roll x1 o x10 y se mostrará el personaje o los personajes al obtenerlos</p>
          </DisplayContent>
        </DisplayArea>
        <Workers workersCount={workersCount}/>
      </Main>
    );
  };
  
  export default MainSection;
