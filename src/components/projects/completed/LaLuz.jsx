import React from 'react';
import styled from 'styled-components';
import TopBar from '../../TopBar';
import Header from '../../Header'; // Adjust the import path as needed

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

const LaLuz = () => {
  return (
    <>
      <TopBar/>
      <Header />
      <Container>
        <Title>Supporting Female Victims of Torture and Sexual Violence (LA LUZ)</Title>
        <Date>January 2014 - November 2014</Date>
        <Organization>International Rehabilitation Council for Torture Victims (IRCT)</Organization>
        
        <SectionTitle>Project Overview:</SectionTitle>
        <Paragraph>
          Funds from La Luz are dedicated to empowering and healing women and girls who have been subjected to torture and sexual violence.
        </Paragraph>
      </Container>
    </>
  );
};

export default LaLuz;
