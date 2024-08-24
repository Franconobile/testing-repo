import React from 'react';
import styled from 'styled-components';


const Modal = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 20;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ChrContent = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #bbbbbb;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Mantinia', sans-serif;
`;

const CharacterImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

const ModalButton = styled.button`
  background-color: #7F5915;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  width: 50%;
`;


const Details = ({onClose, character}) => {
    return (
      <Modal>
        <ModalContent>
            <ChrContent>
                <h2>{character.name}</h2>
                <p>Rarity: {character.rarity} ★</p>
                <CharacterImage src={character.image} alt={character.name}
                 />
            </ChrContent>
            <ModalButton onClick={onClose}>Omg great!</ModalButton>
        </ModalContent>
      </Modal>
    );
};

export default Details;