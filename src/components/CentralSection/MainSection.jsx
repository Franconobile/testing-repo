import React, { useState, useEffect, useCallback  } from 'react';
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
  z-index: -2;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4); // Adjust the opacity as needed
  }
`;


//Efectos particulas amarillas

const FallingParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: -1;
`;

const Particle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: rgba(255, 255, 0, 0.7);
  border-radius: 50%;
  animation: fall linear infinite;
`;


//--------------

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


const MainSection = ({ setClickCount, workersCount, newWorkerBought }) => {
  const [particles, setParticles] = useState([]);

  const generateParticles = useCallback(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 10 + 5}s`,
      animationDelay: `${Math.random() * 5}s`,
    }));
  }, []);

  useEffect(() => {
    setParticles(generateParticles());
  }, [generateParticles]);


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
          <FallingParticles>
          {particles.map((particle) => (
            <Particle
              key={particle.id}
              style={{
                left: particle.left,
                animationDuration: particle.animationDuration,
                animationDelay: particle.animationDelay,
              }}
            />
          ))}
        </FallingParticles>

          <DisplayContent>

          </DisplayContent>
        </DisplayArea>
        <Workers workersCount={workersCount} newWorkerBought={newWorkerBought}/>
      </Main>
    );
  };
  
  export default MainSection;
