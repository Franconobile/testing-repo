import React from 'react';
import styled from 'styled-components';
import rune from '../../assets/rune.png';


const Footer = styled.footer`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #030303;
  color: #fff;
  padding: 10px;
`;

const InventorySection = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: solid 1px rgb(143, 143, 143);
  background-color: #0e0e0e;
  color: #d8d8d8;
  cursor: pointer;
    &:hover {
      background-color: #7F5915;
    
    }
  
`;

const Clicker = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 150px;
  gap: 20px;
`;

const RuneBtn = styled.img`
  height: auto;
  width: 100%;
  max-width: 120px;
  cursor: pointer;
`;

const MultiplierButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const FooterComponent = ({onClick, onOptionsClick, onShopClick, onInvClick }) => {

  return (
    <Footer>
      <InventorySection>
        <Button onClick={onInvClick}>Inventory</Button>
        <Button onClick={onShopClick}>Shop</Button>
        <Button onClick={onOptionsClick}>Options</Button>
      </InventorySection>
      <Clicker>
        <RuneBtn
          src={rune}
          alt="Rune"
          id="butonRunas"
          onClick={onClick}
        />
        <MultiplierButtons>
          <Button>Wish x1</Button>
          <Button>Wish x10</Button>
        </MultiplierButtons>
      </Clicker>
    </Footer>
  );
};

export default FooterComponent;