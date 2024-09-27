import React from 'react';
import styled from 'styled-components';
import TopBar from '../../TopBar';
import Header from '../../Header';

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


const RehabilitationOfTortureSurvivors = () => {
  return (
    <>
    <TopBar/>
    <Header/>
    <Container>
      <Title>Rehabilitation of Torture Survivors and Prevention of Custodial Abuses</Title>
      <Date>July 2011 to June 2018</Date>
      <Organization>Funds for Global Human Rights, Washington DC</Organization>
      <SectionTitle>Objectives:</SectionTitle>
      <List>
        <ListItem>Sensitization of casualty medical officers, investigation and jail staff, judicial magistrates, reduces torture cases by 20 percent in three districts of Hazara.</ListItem>
        <ListItem>Free legal aid facility from HDO helps 50 torture victims securing release on bail/reduced jail term through bail applications and appeal-writing.</ListItem>
        <ListItem>After receiving education facility, at least 150 jail-based torture victims enjoy reduced jail sentences.</ListItem>
        <ListItem>Skill development training by HDO enables 150 jail-based torture victims becoming self-dependent financially by marketing their products outside the jail.</ListItem>
        <ListItem>Increased prosecutions result from 25 torture survivors filing criminal cases against their perpetrators with assistance from HDO.</ListItem>
        <ListItem>1000 prisoners secured from ill-treatment during detention and enabled to receive fair treatment after getting educated about their legal rights under UNCAT, Standard Minimum Rules for Treatment of Prisoners, Pakistan Prison Rules.</ListItem>
        <ListItem>Lobbying with parliamentarians and human rights ministries result in progress by government towards criminalization of torture and accession of OPCAT.</ListItem>
    </List>
    </Container>
    </>
  );
};

export default RehabilitationOfTortureSurvivors;
