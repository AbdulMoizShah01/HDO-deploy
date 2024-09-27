import React from 'react';
import styled from 'styled-components';
import TopBar from '../../TopBar';
import Header from '../../Header'; // Adjust this import path as needed

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

const PreventingDetaineesfromCustodialAbusesandRebuildingLifeofTortureSurvivors= () => {
  return (
    <>
      <TopBar/>
      <Header />
      <Container>
        <Title>Preventing Detainees from Custodial Abuses and Rebuilding Life of Torture Survivors</Title>
        <Date>January 2016 to December 2019</Date>
        <Organization>Funded by United Nations Voluntary Fund for Victims of Torture (UNVFVT)</Organization>

        <SectionTitle>Overall Objective</SectionTitle>
        <Paragraph>To assist torture survivors reintegrating into society with their bio-psychosocial strengths and human dignity.</Paragraph>

        <SectionTitle>Specific Objectives</SectionTitle>
        <List>
          <ListItem>Help torture victims rebuild their lives with medical and psychological assistance.</ListItem>
          <ListItem>Enable torture survivors to litigate against perpetrators and seek reparation.</ListItem>
          <ListItem>Support torture victims in reentering society through education, vocational training, and social support.</ListItem>
        </List>
      </Container>
    </>
  );
};

export default PreventingDetaineesfromCustodialAbusesandRebuildingLifeofTortureSurvivors;