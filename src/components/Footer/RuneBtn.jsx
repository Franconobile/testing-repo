import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import rune from '../../assets/rune.png';
import audioClick from '../../assets/sfx/click.ogg';


const RuneButton = styled.img`
  height: auto;
  width: 100%;
  max-width: 120px;
  cursor: pointer;
  animation: rotate 80s linear infinite;
  transform-origin: center center;
  will-change: transform;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  &.shine {
    position: relative;
  }

  &.shine::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%; /* Asegúrate de que el brillo sea lo suficientemente grande */
    height: 200%;
    background: rgba(255, 255, 255, 0.8); /* Color del brillo */
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    pointer-events: none;
    animation: shine 0.3s ease-out;
  }

  @keyframes shine {
    0% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(0.5);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const RuneBtn = ({ onClick }) => {
  const [shine, setShine] = useState(false);
  const audioRef = useRef(null);

  const handleClick = () => {
    setShine(true);
    if (onClick) onClick();
    if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    setTimeout(() => setShine(false), 300); 
  };

  return (
    <>
        <RuneButton
        src={rune}
        alt="Rune"
        className={shine ? 'shine' : ''}
        onClick={handleClick}
        />
        <audio ref={audioRef} src={audioClick}/>
    </>
  );
};

export default RuneBtn;