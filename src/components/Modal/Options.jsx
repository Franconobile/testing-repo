import React, { useState } from 'react';
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

      &:hover {
    color: #7F5915;
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


const ConfirmationPopup = styled.div`
  position: absolute;
   font-family: Arial, Helvetica, sans-serif;
  top: 50%;
  left: 50%;
  width: 50%;
  transform: translate(-50%, -50%);
  background-color: #2e2e2e;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  z-index: 1000;
`;

const ConfirmButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: #ff4d4d;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
`;

const CancelButton = styled(ConfirmButton)`
  background-color: #4d4d4d;
`;

const OptsModal = ({ isOpen, onClose, onReset }) => {
    const [showConfirmation, setShowConfirmation] = useState(false);

    if (!isOpen) return null;

    const handleResetClick = () => {
        setShowConfirmation(true);
    };

    const handleConfirmReset = () => {
        onReset();
        setShowConfirmation(false);
        onClose();
    };

    const handleCancelReset = () => {
        setShowConfirmation(false);
    };

    return (
        <OptsModalOverlay>
            <OptsModalContent>
                <CloseButton onClick={onClose}>X</CloseButton>
                <h3>Options</h3>
                <ResetButton onClick={handleResetClick}>Reset</ResetButton>

                {showConfirmation && (
                    <ConfirmationPopup>
                        <p>This will delete EVERYTHING, runes, inventory, and all. Are you sure?</p>
                        <ConfirmButton onClick={handleConfirmReset}>Yes</ConfirmButton>
                        <CancelButton onClick={handleCancelReset}>No</CancelButton>
                    </ConfirmationPopup>
                )}
            </OptsModalContent>
        </OptsModalOverlay>
    );
};

export default OptsModal;