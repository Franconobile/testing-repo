import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './GlobalStyles';
import './App.css';
import MainSection from './components/CentralSection/MainSection';
import FooterComponent from './components/Footer/Footer';
import OptsModal from './components/Modal/Options';
import ShopModal from './components/Modal/ShopModal';


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  // Inicializa el estado con el valor de localStorage o con 0 si no existe
  const [clickCount, setClickCount] = useState(() => {
    const savedCount = localStorage.getItem('clickCount');
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });


  //Manejo de los modals.

  const [isModalOpen, setModalOpen] = useState(false); //Opciones
  const [isShopModalOpen, setShopModalOpen] = useState(false); //Shop


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

  return (
    <AppContainer>
      <GlobalStyles />
      <Navbar clickCount={clickCount}></Navbar>
      <MainSection></MainSection>
      <FooterComponent onClick={handleClick} onOptionsClick={toggleModal} onShopClick={toggleShopModal}></FooterComponent>
      <OptsModal isOpen={isModalOpen} onClose={toggleModal} onReset={handleReset} />
      <ShopModal isOpen={isShopModalOpen} onClose={toggleShopModal} clickCount={clickCount} setClickCount={setClickCount} />
    </AppContainer>

  );
};

export default App;
