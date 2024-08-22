import React from 'react';
import styled from 'styled-components';



const OptsModalOverlay = styled.div`
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

const OptsModalContent = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 300px;
  color: white;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const ResetButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #ff4d4d;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
`;


const OptsModal = ({ isOpen, onClose, onReset }) => {
    if (!isOpen) return null; // Esto checkeara si isOpen is falso para no renderizar el modal.

return (
    <OptsModalOverlay>
        <OptsModalContent>
            <CloseButton onClick={onClose}>X</CloseButton>
            <h3>Options</h3>
            <ResetButton onClick={onReset}>Reset</ResetButton>
        </OptsModalContent>
    </OptsModalOverlay>
);
};

export default OptsModal;