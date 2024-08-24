import React from 'react';
import styled from 'styled-components';


const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  z-index: 20;
`;

const ModalButton = styled.button`
  background-color: #7F5915;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;


const Details = ({onClose}) => {
    return (
        <Modal>
        <p>Here's the character you pulled</p>
        <ModalButton onClick={onClose}>Great!</ModalButton>
      </Modal>
    );
};

export default Details;