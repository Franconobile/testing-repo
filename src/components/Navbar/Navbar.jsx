import React from 'react';
import styled, { keyframes }  from 'styled-components';
import runeIcon from '../../assets/runes-icon.webp';


// Animación de brillo
const glow = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
`;

// Estilos para el header see
const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  background-color: #0e0d0d;
  color: #947f6e;
  padding: 10px;
`;

// Estilos para las secciones dentro del header seeee
const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

&.header-center {
    position: relative; 

    img {
      height: auto;
      width: 100%;
      max-width: 50px;
      position: relative;
      z-index: 1; 
      
    }

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 4%;
      width: 9%; // Asegura que el brillo cubra el ícono
      height: 100%;
      background: radial-gradient(circle, rgba(255, 255, 0, 0.5) 5%, rgba(255, 255, 0, 0) 50%);
      transform: translate(-50%, -50%);
      opacity: 0;
      animation: ${glow} 5s ease-in-out infinite;
      z-index: 0;
    }
  }
`;


// Estilos para el contador :v
const Counter = styled.h3`
  color: white;
`;


const Navbar = ({clickCount }) => {
    return (
      <Header>
        <HeaderSection className="header-left">ELDEN CLICK</HeaderSection>
        <HeaderSection className="header-center">
          <img src={runeIcon} alt="Runitas" />
          <Counter id="contador">{clickCount}</Counter>
        </HeaderSection>
      </Header>
      );
    };

export default Navbar