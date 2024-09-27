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

const List = styled.ul`
  list-style-type: disc;
  margin-left: 1.5rem;
  font-size: 1.1rem;
  color: #555;
`;

const ListItem = styled.li`
  margin-bottom: 0.75rem;
`;

const LegalAidGBV = () => {
  return (
    <>
      <TopBar/>
      <Header />  {/* Include the header if needed */}
      <Container>
        <Title>Legal Aid Network for Victims of Gender-Based Violence</Title>
        <Date>June 2017 - August 3, 2018</Date>
        <Organization>The Asia Foundation under Access to Justice for Vulnerable Populations in Pakistan (A2J) project</Organization>
        
        <SectionTitle>Objectives:</SectionTitle>
        <List>
          <ListItem>To increase awareness of marginalized communities in selected districts on legal rights of survivors of GBV and redressal mechanisms.</ListItem>
          <ListItem>To strengthen capacities of legal aid centers and network of lawyers to provide legal aid to women survivors of GBV.</ListItem>
        </List>
      </Container>
    </>
  );
};

export default LegalAidGBV;
