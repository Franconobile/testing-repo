import React from 'react';
import styled from 'styled-components';

const Laburantes = styled.section`
  width: 200px;
  background-color: #161514;
  color: #fff;
  padding: 20px;
  
  h2 {
    margin-top: 0;
  }
`;


const LaburantesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;


const LaburantesSlot = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ccc; /* Color de fondo para los espacios de trabajadores */
  border-radius: 5px;
`;

const WarningText = styled.p`
  color: red;
  font-size: 18px;
`;


const Workers = ({ workersCount }) => {
  const displayedWorkers = Math.min(workersCount, 6);
  const totalWorkers = Math.min(workersCount, 25);

    return (
        <Laburantes>
            <h2>Workers</h2>
            <LaburantesList>
            {Array.from({ length: displayedWorkers }).map((_, index) => (
                  <LaburantesSlot key={index} 
                />
            ))}
            {workersCount >= 6 && (
                <WarningText>
                    x{totalWorkers}
                </WarningText>
            )}
            </LaburantesList>
        </Laburantes>
    );
};

export default Workers;