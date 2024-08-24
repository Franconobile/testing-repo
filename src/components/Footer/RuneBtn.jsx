import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import rune from '../../assets/rune.png';
import audioClick from '../../assets/sfx/click.ogg';

const RuneButton = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  max-width: 120px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    animation: rotate 80s linear infinite;
    transform-origin: center center;
    will-change: transform;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 217, 100, 0.8) 0%, rgba(255, 217, 100, 0) 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.7s ease-out, opacity 0.7s ease-out;
  }

  &.shine::after {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
`;

const RuneBtn = ({ onClick, disabled  }) => {
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
    <RuneButton className={shine ? 'shine' : ''} onClick={handleClick} disabled={disabled}>
      <img src={rune} alt="Rune" />
      <audio ref={audioRef} src={audioClick} />
    </RuneButton>
  );
};

export default RuneBtn;