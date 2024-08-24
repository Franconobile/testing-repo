import React from 'react';
import styled from 'styled-components';
import RuneBtn from './RuneBtn';


const Footer = styled.footer`
overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #030303;
  color: #fff;
  gap: 20%;
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

const WishButton = styled.button`
  margin: 10px auto;
  font-family: 'Mantinia';
  width: 150px;
  letter-spacing: 2px;
  border-radius: 8px;
  color: #C7B59E;
  font-size: 18px;
  font-weight: 400;
  text-shadow: 0 1px 3px #000;
  text-align: center;
  padding: 10px 0;
  background: radial-gradient(circle, #3E2708, #3E2708);
  border-top: 4px ridge #655136;
  border-left: 4px groove #655136;
  border-right: 4px ridge #655136;
  border-bottom: 4px groove #655136;
  cursor: pointer;

  &:hover {
     background: radial-gradient(circle, #784B0E, #784B0E);
  }
  
`;


const Clicker = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const MultiplierButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const FooterComponent = ({onClick, onOptionsClick, onShopClick, onInvClick, onWishClick }) => {

  return (
    <Footer>
      <InventorySection>
        <Button onClick={onInvClick}>Inventory</Button>
        <Button onClick={onShopClick}>Shop</Button>
        <Button onClick={onOptionsClick}>Options</Button>
      </InventorySection>
      <Clicker>
        <RuneBtn
          onClick={onClick}
        />
        <MultiplierButtons>
          <WishButton onClick={onWishClick}>Wish</WishButton>
        </MultiplierButtons>
      </Clicker>
    </Footer>
  );
};

export default FooterComponent;