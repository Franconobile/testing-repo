import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './GlobalStyles';
import './App.css';
import MainSection from './components/CentralSection/MainSection';
import FooterComponent from './components/Footer/Footer';
import OptsModal from './components/Modal/Options';
import ShopModal from './components/Modal/ShopModal';
import Inventory from './components/Modal/InventoryModal';

// JSON

import characters from './data/characters.json';


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  //Sistema de wisheo
  const [isWishing, setIsWishing] = useState(false);
  const [isWishInProgress, setIsWishInProgress] = useState(false);

  //Sistema de PITY

  const [pityCounter, setPityCounter] = useState(0);
  const [pullHistory, setPullHistory] = useState([]);



  // Inicializa el estado con el valor de localStorage o con 0 si no existe
  const [clickCount, setClickCount] = useState(() => {
    const savedCount = localStorage.getItem('clickCount');
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });

  const handleWishClick = () => {
    if (!isWishInProgress && clickCount >= 1000) {
      setClickCount(prevCount => prevCount - 1000);
      setIsWishing(true);
      setIsWishInProgress(true);
      setPityCounter(prevCounter => prevCounter + 1);
    } else if (!isWishInProgress && clickCount < 1000) {
      setIsWishing('not-enough-runes');
    }
  };

  //Manejo de los modals.

  const [isModalOpen, setModalOpen] = useState(false); //Opciones
  const [isShopModalOpen, setShopModalOpen] = useState(false); //Shop
  const [isInvModalOpen, setInvModalOpen] = useState(false); //Inventory
  const [workersCount, setWorkersCount] = useState(0);


  // Guardar el contador en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('clickCount', clickCount);
  }, [clickCount]);

  const handleClick = () => {
    setClickCount(clickCount + 100);
  };


  // Config modals

  const handleReset = () => {
    setClickCount(0);
    localStorage.removeItem('clickCount');
    setModalOpen(false);
  };


  //Modal Opciones
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  //Modal shop

  const toggleShopModal = () => {
    setShopModalOpen(!isShopModalOpen);
  };

  //Modal Inv

  const toggleInvModal = () => {
    setInvModalOpen(!isInvModalOpen);
  };

  return (
    <AppContainer>
      <GlobalStyles />
      <Navbar clickCount={clickCount}></Navbar>
      <MainSection 
        clickCount={clickCount} 
        setClickCount={setClickCount} 
        workersCount={workersCount}
        isWishing={isWishing}
        setIsWishing={setIsWishing}
        onWishClick={handleWishClick}
        setIsWishInProgress={setIsWishInProgress}
        showNotEnoughRunesModal={clickCount < 1000 && isWishing === false}
        setPullHistory={setPullHistory}
        >
      </MainSection>  
      <FooterComponent 
        onClick={handleClick} 
        onOptionsClick={toggleModal} 
        onShopClick={toggleShopModal}
        onInvClick={toggleInvModal}
        onWishClick={handleWishClick}
        isWishInProgress={isWishInProgress}
        >
      </FooterComponent>
      <OptsModal isOpen={isModalOpen} onClose={toggleModal} onReset={handleReset} />
      <ShopModal 
        isOpen={isShopModalOpen} 
        onClose={toggleShopModal} 
        clickCount={clickCount} 
        setClickCount={setClickCount} 
        workersCount={workersCount}
        setWorkersCount={setWorkersCount}
      />
      <Inventory
      isOpen={isInvModalOpen}
      onClose={toggleInvModal}
      />
    </AppContainer>

  );
};

export default App;
