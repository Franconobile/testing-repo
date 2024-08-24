import React, { useState, useEffect, useCallback  } from 'react';
import styled from 'styled-components';
import Workers from './Workers';
import Details from './Details';
import limgravebg from '../../assets/bgs/ER-Limgrave.webp';
import radagonWebm from '../../assets/player/radagon.webm'; 

import { pullCharacter } from '../../GachaSystem.js';


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
    background-color: rgba(0, 0, 0, 0.4);
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

// Webm style


const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  z-index: 20;
`;

const ModalButton = styled.button`
  background-color: #7F5915;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;


const NotEnoughModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  z-index: 20;
`;

const NotEnoughModalBtn = styled.button`
  background-color: #7F5915;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;



// CONST JSX

const MainSection = ({ setClickCount, workersCount, newWorkerBought, isWishing, setIsWishing, clickCount, setIsWishInProgress, pityCounter, setPityCounter, setPullHistory }) => {
  const [showModal, setShowModal] = useState(false);
  const [particles, setParticles] = useState([]);
  const [pulledCharacter, setPulledCharacter] = useState(null);
  const [showNotEnoughRunesModal, setShowNotEnoughRunesModal] = useState(false);

  // ---




  //---

  useEffect(() => {
    if (isWishing === true) {
      const video = document.getElementById('wishVideo');
      video.play();
      video.onended = () => {
        const character = pullCharacter(pityCounter);
        setPulledCharacter(character);
        setShowModal(true);
        setIsWishing(false);
        setIsWishInProgress(false);
        setPullHistory(prev => [...prev, character]);
        if (character.rarity === 5) {
          setPityCounter(0);
        }
      };
    } else if (isWishing === 'not-enough-runes') {
      setShowNotEnoughRunesModal(true);
      setIsWishing(false);
    }
  }, [isWishing, setIsWishing, setIsWishInProgress,  pityCounter, setPityCounter, setPullHistory]);

  const closeModal = () => {
    setShowModal(false);
    setShowNotEnoughRunesModal(false);
  };

  //--------------


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
          {isWishing === true && (
            <VideoContainer>
              <StyledVideo id="wishVideo" src={radagonWebm} />
            </VideoContainer>
          )}
          {showNotEnoughRunesModal && (
            <NotEnoughModal>
              <p>Not enough runes to make a wish!</p>
              <NotEnoughModalBtn onClick={closeModal}>Close</NotEnoughModalBtn>
            </NotEnoughModal>
          )}
          {showModal && (
            <Details onClose={closeModal} character={pulledCharacter}/>
          )}
        </DisplayContent>
        </DisplayArea>
        <Workers workersCount={workersCount} newWorkerBought={newWorkerBought}/>
      </Main>
    );
  };
  
  export default MainSection;
