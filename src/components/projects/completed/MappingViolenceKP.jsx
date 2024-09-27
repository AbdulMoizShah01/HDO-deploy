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

const MappingViolenceKP = () => {
  return (
    <>
      <TopBar/>
      <Header />
      <Container>
        <Title>Mapping of Violence Against Women Initiatives in Khyber Pakhtunkhwa, Pakistan</Title>
        <Date>June 1, 2016 - August 31, 2016</Date>
        <Organization>Consultancy funded by Funds for Global Human Rights, Washington DC</Organization>
        
        <SectionTitle>Objectives:</SectionTitle>
        <List>
          <ListItem>Lead a team of self-chosen researchers to undertake a desk review, identify at the province level specific legal, public, and political challenges relevant to the local culture and the issue at hand, as well as key stakeholders to inform the investigation process.</ListItem>
          <ListItem>Identify and articulate the rationale and reasons for the selection of specific districts within KPK for the mapping.</ListItem>
          <ListItem>Finalize the overall methodology of the mapping process to ensure transparency and objectivity in research and analysis methods.</ListItem>
          <ListItem>Hold interviews with key Pakistani government bodies, civil societies, experts (academics, lawyers, social workers, national and international NGOs, etc.).</ListItem>
          <ListItem>Conduct interviews with 8-10 small to medium-level NGOs/groups/unions that work in rural/urban working-class communities and face multiple oppressions to understand the landscape of work, organizational visions and strategies, current funding situation, and scale of work.</ListItem>
        </List>
      </Container>
    </>
  );
};

export default MappingViolenceKP;
