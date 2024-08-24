import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import animworker1 from '../../assets/stuff/anim_sprite1.gif';


const Laburantes = styled.section`
  width: 200px;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(40,37,32,1) 100%);
  color: #fff;
  h2 {
    margin-top: 0;
  }
`;

const LaburantesHeader = styled.div`
  background-color: #070605;
  padding: 5px;
`;

const LaburantesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;


const LaburantesSlot = styled.div`
  position: relative;
  overflow: hidden;
  width: 50px;
  height: 50px;
  margin: 5px;
  background-color: #0F0C08;
  border-radius: 5px;
  background-image: url(${animworker1});
  background-size: cover;
  background-position: center;
`;

const WarningText = styled.p`
  color: #7F6632;
  font-size: 18px;
`;


// Anim texto de farmeo

const floatUpAndFade = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const AnimatedText = styled.div`
  position: absolute;
  color: #7F6632;
  font-size: 14px;
  animation: ${floatUpAndFade} 1s ease-out forwards;
`;


const Workers = ({ workersCount, newWorkerBought  }) => {
  const [animations, setAnimations] = useState([]);
  const displayedWorkers = Math.min(workersCount, 6);
  const totalWorkers = Math.min(workersCount, 25);

  useEffect(() => {
    if (newWorkerBought) {
      const newAnimation = {
        id: Date.now(),
        index: workersCount - 1 // Index of the last bought worker
      };
      setAnimations(prev => [...prev, newAnimation]);
      setTimeout(() => {
        setAnimations(prev => prev.filter(anim => anim.id !== newAnimation.id));
      }, 1000);
    }
  }, [newWorkerBought, workersCount]);

    return (
        <Laburantes>
          <LaburantesHeader>
            <h2>Workers</h2>
          </LaburantesHeader>
            <LaburantesList>
            {Array.from({ length: displayedWorkers }).map((_, index) => (
          <LaburantesSlot key={index}>
          {animations.find(anim => anim.index % 6 === index) && (
            <AnimatedText key={animations.find(anim => anim.index % 6 === index).id}>+1</AnimatedText>
          )}
        </LaburantesSlot>
        ))}
            {workersCount >= 6 && (
                <WarningText>
                    x{totalWorkers}
                </WarningText>
            )}
            </LaburantesList>
        </Laburantes>
    );
};

export default Workers;