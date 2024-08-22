import React from 'react';
import styled from 'styled-components';
import runeIcon from '../../assets/runes-icon.webp';
import worker1 from '../../assets/stuff/worker_sprite1.png';


const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
`;

const Item1 = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid #bbbbbb;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Mantinia', sans-serif;
`;

const ContentPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-direction: row;
  width: 30px;
  height: 30px;
`;

const Button = styled.div`
  border: solid 1px rgb(143, 143, 143);
  background-color: #0e0e0e;
  color: #d8d8d8;
  padding: 5px;
  cursor: pointer;
    &:hover {
      background-color: #7F5915;
    
    }

`;


const WorkerItem = ({ onBuy, canBuy }) => {
    return (
        <ItemWrapper>
            <Item1><img src={worker1} alt="Minero" style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </Item1>
              <ContentPrice>
              <img src={runeIcon} alt="Icono Runa" style={{ maxWidth: '100%', maxHeight: '100%' }}/><p> 100</p>   
              </ContentPrice>
              <Button onClick={onBuy} disabled={!canBuy}>
                BUY
              </Button>
        </ItemWrapper>
    );
};

export default WorkerItem;