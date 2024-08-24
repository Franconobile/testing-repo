import React, { useState } from 'react';
import styled from 'styled-components';
import characters from '../../data/characters.json';


const InvOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;


const InvContent = styled.div`
  background: rgb(19,17,15);
  background: linear-gradient(180deg, rgba(19,17,15,1) 0%, rgba(19,17,15,1) 46%, rgba(74,71,63,1) 100%);
  border-radius: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  position: relative;
`;

const CloseInv = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;

    &:hover {
    color: #7F5915;
  }
`;

const Header = styled.h2`
  text-align: center;
  padding: 20px 0;
  font-family: 'Mantinia', sans-serif;
  display: flex;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(40,37,32,0) 100%);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  background: rgb(40,37,32);
  background: linear-gradient(90deg, rgba(40,37,32,0) 0%, rgba(0,0,0,1) 46%, rgba(40,37,32,0) 100%);
  height: 10px,
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0e0e0e;
  color: #d8d8d8;
  border: 1px solid #bbbbbb;
  cursor: pointer;
  font-family: 'Mantinia', sans-serif;

  &:hover {
    background-color: #7F5915;
  }

  &:focus {
    outline: none;
    background-color: #7F5915;
  }
`;


//CHRS slots

const Slot = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #bbbbbb;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const CharacterSlot = styled(Slot)`
  position: relative;
`;

const CountBadge = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

const CharacterBadge = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 50px;
`;



const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;


const PlaceholderText = styled.span`
  color: white;

  span {
    color: red;
  }
`;

const InventoryModal = ({isOpen, onClose, inventory }) => {
    const [activeTab, setActiveTab] = useState('Character');

    if (!isOpen) return null;

    const characters = Object.values(inventory).filter(item => item.type === 'character');

    return (
      <InvOverlay>
        <InvContent>
          <CloseInv onClick={onClose}>X</CloseInv>
          <Header>Inventory / {activeTab}</Header>
          <ButtonContainer>
            <Button onClick={() => setActiveTab('Character')}>Character</Button>
            <Button onClick={() => setActiveTab('Weapons')}>Weapons</Button>
          </ButtonContainer>
          {activeTab === 'Character' && (
            <CharacterBadge>
              {characters.map(character => (
                <CharacterSlot key={character.id}>
                  <CharacterImage src={character.image} alt={character.name} />
                  {character.count > 1 && (
                    <CountBadge>x{character.count}</CountBadge>
                  )}
                </CharacterSlot>
              ))}
            </CharacterBadge>
          )}
          {activeTab === 'Weapons' && (
            <Slot>
              <PlaceholderText>
                Weapon<span>1</span>
              </PlaceholderText>
            </Slot>
          )}
        </InvContent>
      </InvOverlay>
    );
  };

export default InventoryModal;