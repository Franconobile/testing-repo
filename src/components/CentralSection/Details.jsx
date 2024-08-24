import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import itemSound from '../../assets/sfx/item.ogg';
import starSound from '../../assets/sfx/starsound.ogg';
import starImage3 from '../../assets/3-star.png';
import starImage4 from '../../assets/4-star.png';
import starImage5 from '../../assets/5-star.png';




const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;


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
  animation: ${fadeIn} 0.5s ease-in forwards;
  animation-delay: 1.5s;
  opacity: 0;
  p {
    position: absolute;
    top: 40px;
    font-size: 15px;
    font-style: italic;
    z-index: 30;
  }

  z-index: 30;
`;


const ChrStars = styled.div`
position: absolute;
bottom: 40px;
display: flex;
z-index: 30;
`;

const StarImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  margin-bottom: 15px;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in forwards;
`;


const ChrImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
animation: ${fadeIn} 0.5s ease-in forwards;
opacity: 0;
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
  animation: ${fadeIn} 0.5s ease-in forwards;
  animation-delay: 1.5s;
  opacity: 0;
  z-index: 30;
`;

// ANIMS


const Details = ({onClose, character}) => {
  const itemAudioRef = useRef(null);
  const starAudioRef = useRef(null);

  useEffect(() => {
    // Play item sound
    itemAudioRef.current.play();

    // Play star sounds with delay
    const starCount = parseInt(character.rarity);
    for (let i = 0; i < starCount; i++) {
      setTimeout(() => {
        starAudioRef.current.currentTime = 0;
        starAudioRef.current.play();
      }, 1000 + i * 300);
    }
  }, [character.rarity]);

  const renderStars = () => {
    const starCount = parseInt(character.rarity);
    let starImage;
  
    switch (starCount) {
      case 3:
        starImage = starImage3;
        break;
      case 4:
        starImage = starImage4;
        break;
      case 5:
        starImage = starImage5;
        break;
      default:
        starImage = starImage3; // fallback to 3-star image if rarity is unexpected
    }
  
    return Array.from({ length: starCount }, (_, index) => (
      <StarImage
        key={index}
        src={starImage}
        alt={`${starCount}-Star`}
        style={{ animationDelay: `${1 + index * 0.3}s` }}
      />
    ));
  };

    return (
      <Modal>
        <ChrTitle>
         <h2>{character.name}</h2>
         <p>{character.desc}</p>
        </ChrTitle>
        <ChrStars>{renderStars()}</ChrStars>
        <ModalButton onClick={onClose}>Omg</ModalButton>
        <ChrImg src={character.image} alt={character.name} />
        <audio ref={itemAudioRef} src={itemSound} />
        <audio ref={starAudioRef} src={starSound} />
      </Modal>
    );
};

export default Details;