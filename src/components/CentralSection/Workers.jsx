import React from 'react';
import styled from 'styled-components';

const Laburantes = styled.section`
  width: 200px;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(40,37,32,1) 100%);
  color: #fff;
  h2 {
    margin-top: 0;
  }
`;

const LaburantesHeader = styled.div`
  background-color: #070605;
  padding: 5px;
`;

const LaburantesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;


const LaburantesSlot = styled.div`
  width: 50px;
  height: 50px;
  margin: 5px;
  background-color: black;
  border-radius: 5px;
`;

const WarningText = styled.p`
  color: #7F6632;
  font-size: 18px;
`;


const Workers = ({ workersCount }) => {
  const displayedWorkers = Math.min(workersCount, 6);
  const totalWorkers = Math.min(workersCount, 25);

    return (
        <Laburantes>
          <LaburantesHeader>
            <h2>Workers</h2>
          </LaburantesHeader>
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