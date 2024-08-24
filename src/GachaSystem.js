import characters from './data/characters.json';


const getRarity = (pityCounter) => {
    if (pityCounter >= 50) return 5;
    
    const random = Math.random() * 100;
    if (random < 0.6) return 5;
    if (random < 5.7) return 4;
    return 3;
  };
  
  const getCharacter = (rarity) => {
    const charactersOfRarity = characters.filter(char => char.rarity === rarity);
    return charactersOfRarity[Math.floor(Math.random() * charactersOfRarity.length)];
  };
  
  export const pullCharacter = (pityCounter) => {
    const rarity = getRarity(pityCounter);
    const character = getCharacter(rarity);
    return character;
  };