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

const List = styled.ul`
  list-style-type: disc;
  margin-left: 1.5rem;
  font-size: 1.1rem;
  color: #555;
`;

const ListItem = styled.li`
  margin-bottom: 0.75rem;
`;

const CovidProtectionProject = () => {
  return (
    <>
      <TopBar/>
      <Header />
      <Container>
        <Title>Protecting Prison Population from Falling Victim to Covid-19 in Hazara Division</Title>
        <Date>August 01, 2020 to June 30, 2021</Date>
        <Organization>International Rehabilitation Council for Torture Victims (IRCT)</Organization>

        <SectionTitle>Objectives</SectionTitle>
        <List>
          <ListItem>The intervention enables HDO to address and overcome Covid-19 related obstacles to existing rehabilitation services in prisons of Hazara division.</ListItem>
          <ListItem>The intervention enables HDO to protect detainees from torture and ill-treatment by using both digital and physical advocacy mechanisms.</ListItem>
          <ListItem>Arrange advocacy meetings with casualty medical officers, sensitizing them about the documentation of torture.</ListItem>
        </List>
      </Container>
    </>
  );
};

export default CovidProtectionProject;
