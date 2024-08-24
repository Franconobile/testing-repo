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

const ChrTitle = styled.div`
  position: absolute;
  top: 0px;
  left: 30px;
  display: flex;
  flex-direction: column;
  padding: 0px;
  p {
    position: absolute;
    top: 40px;
    font-size: 15px;
    font-style: italic;
  }
`;


const ChrStars = styled.div`
position: absolute;
bottom: 40px;
`;



const ChrImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;


const ModalButton = styled.button`
  position: absolute;
  bottom: 10px;
  background-color: #7F5915;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;


const Details = ({onClose, character}) => {
    return (
      <Modal>
        <ChrTitle>
         <h2>{character.name}</h2>
         <p>{character.desc}</p>
        </ChrTitle>
        <ChrStars>
          <p>{character.rarity} ★</p>
        </ChrStars>
        <ModalButton onClick={onClose}>Omg</ModalButton>
        <ChrImg src={character.image} alt={character.name} />
      </Modal>
    );
};

export default Details;