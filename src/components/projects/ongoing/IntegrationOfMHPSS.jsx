// src/components/projects/ongoing/IntegrationOfMHPSS.jsx
import React from 'react';
import styled from 'styled-components';
import TopBar from '../../TopBar';
import Header from '../../Header';

// Updated styled-components based on provided CSS
const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Date = styled.p`
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 1rem;
`;

const Organization = styled.p`
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #444;
  margin-bottom: 1rem;
  border-bottom: 2px solid #FFDE59;
  padding-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ThematicFocus = styled.div`
  margin-top: 1rem;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 1.5rem;
  font-size: 1.1rem;
  color: #555;
`;

const ListItem = styled.li`
  margin-bottom: 0.75rem;
`;

const IntegrationOfMHPSS = () => {
  return (
    <>
      <TopBar/>
      <Header />
      <Container>
        <Title>Integration of MHPSS and Livelihoods in LMICs</Title>
        <Date>2023-2024</Date>
        <Organization>IRCT and HDO</Organization>
        
        <ThematicFocus>
          <SectionTitle>Thematic Focus</SectionTitle>
          <Paragraph>
            What is the causal relationship of poverty and livelihoods approaches with mental illness?
            Can our economic policies be changed to integrate and mainstream mental well-being of people (MHPSS based livelihoods)?
            Whether mental health interventions can reduce poverty and improve livelihoods?
            Whether development and health practitioners acknowledge that poverty, livelihoods, mental health, crime, and torture are closely associated with each other and many times reinforce the outcome/impacts both positively and negatively?
          </Paragraph>
        </ThematicFocus>
      </Container>
    </>
  );
};

export default IntegrationOfMHPSS;
