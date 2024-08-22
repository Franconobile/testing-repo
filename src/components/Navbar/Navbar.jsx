import React from 'react';
import styled from 'styled-components';
import runeIcon from '../../assets/runes-icon.webp';

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

  &.header-left {
    justify-content: flex-start;
  }
  
  &.header-center img {
    height: auto;
    width: 100%;
    max-width: 50px;
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