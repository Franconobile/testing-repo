import React, { useState } from 'react';
import styled from 'styled-components';
import runeIcon from '../../assets/runes-icon.webp';
import WorkerItem from './WorkerItem';

const ModalOverlay = styled.div`
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

const ModalContent = styled.div`
  background-color: rgba(0, 0, 0, 0.81);
  border-radius: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  color: white;
  position: relative;
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

const Sidebar = styled.div`
  width: 23%;
  display: flex;
  flex-direction: column;
  background-color: #0E0D0D;
 
`;

const SideBarHeader = styled.div`
  background-color: #1D1A1A;
  font-size: 20px;
  padding-left: 20px;
`

const SidebarItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? '#484848' : 'transparent')};
  color: ${({ isSelected }) => (isSelected ? 'white' : '#bbbbbb')};
  font-family: 'Mantinia', sans-serif;
`;

const ContentArea = styled.div`
  width: 80%;
  padding: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;


const ClickCounter = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  top: 10px;
  right: 50px;
  font-family: 'Mantinia', sans-serif;
  border: 1px solid #bbbbbb;
  padding: 5px 10px;
  width: 20%;
`;


const Popup = styled.div`
  position: absolute;
  top: 50px;
  right: 160px;
  background-color: #6F541C;  
  color: white;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);  
  z-index: 1000;
`;

const MaxWorkersPopup = styled.div`
  position: absolute;
  background-color: #6F541C;  
  color: white;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);  
  z-index: 1000;
`;


const ClosePopupButton = styled.button`
  background: #403B29;
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 15px;
  cursor: pointer;
  margin-left: 10px;

      &:hover {
    color: #7F5915;
`;

const ClosePopupButtonWorker = styled.button`
  background: #403B29;
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 15px;
  cursor: pointer;
  margin-left: 10px;

      &:hover {
    color: #7F5915;
`;

const ShopModal = ({ isOpen, onClose, clickCount, setClickCount, workersCount, setWorkersCount }) => {
  const [selectedSection, setSelectedSection] = useState('workers');
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupMaxWorker, setShowPopupMaxWorker] = useState(false);


  const handleBuyWorker = () => {
    if (clickCount >= 100 && workersCount < 25) {
      setClickCount(clickCount - 100);
      setWorkersCount(prevCount => Math.min(prevCount + 1, 25));
    } else if (workersCount >= 25) {
      setShowPopupMaxWorker(true);
    } else {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setShowPopupMaxWorker(false);
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ClickCounter><img src={runeIcon} alt="Icono Runa" style={{ maxWidth: '8%', maxHeight: '8%' }}/> {clickCount}</ClickCounter>
        <Sidebar>
          <SideBarHeader>
          <h3>SHOP</h3>
          </SideBarHeader>
          

          <SidebarItem
            isSelected={selectedSection === 'workers'}
            onClick={() => setSelectedSection('workers')}
          >
            Wokers
          </SidebarItem>
          <SidebarItem
            isSelected={selectedSection === 'upgrades'}
            onClick={() => setSelectedSection('upgrades')}
          >
            Upgrades
          </SidebarItem>
        </Sidebar>
        <ContentArea>
          {selectedSection === 'workers' && (
            <>
              <WorkerItem 
              onBuy={handleBuyWorker} 
              canBuy={clickCount >= 100}/>
              {showPopupMaxWorker && (
                <MaxWorkersPopup>
                  <p>Maximum number of workers reached (25)</p>
                  <ClosePopupButtonWorker onClick={closePopup}>X</ClosePopupButtonWorker>
                </MaxWorkersPopup>
              )}
            </>
          )}
          {selectedSection === 'upgrades' && <h3>Upgrades Section (Under Construction)</h3>}
        </ContentArea>

        {showPopup && (
          <Popup>
            <p>Not enough runes</p>
            <ClosePopupButton onClick={closePopup}>X</ClosePopupButton>
          </Popup>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default ShopModal;