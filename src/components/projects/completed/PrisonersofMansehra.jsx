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

const PrisonersofMansehra = () => {
  return (
    <>
      <TopBar/>
      <Header />
      <Container>
        <Title>Preventing Torture Against Offenders/Prisoners in Haripur and Mansehra</Title>
        <Date>March 09-Feb 2010 & April 2012 - May 2013</Date>
        <Organization>The Asia Foundation under Human Rights Fund-II</Organization>
        
        <SectionTitle>Objectives:</SectionTitle>
        <List>
          <ListItem>To create an enabling environment for the protection of offenders/prisoners from torture, discrimination, and exploitation through a rights-based approach in districts Haripur & Mansehra.</ListItem>
          <ListItem>Improvement of knowledge of key stakeholders about the legal rights of detainees in line with UNCAT and domestic laws.</ListItem>
          <ListItem>Rehabilitation and support to prisoners through the provision of legal support to offenders/prisoners, including women and children, to get their jail terms reduced and through medical and psychological assistance.</ListItem>
          <ListItem>Reduction of torture through an advocacy campaign for the criminalization of custodial mistreatments.</ListItem>
          <ListItem>To enhance civil society’s capacity to promote and protect human rights</ListItem>
          <ListItem>Increase the Government of Pakistan’s commitment and capacity to fulfil its international human rights obligations</ListItem>
          <ListItem>And to build media capacity for improved reporting of Human Rights issues</ListItem>
        </List>
      </Container>
    </>
  );
};

export default PrisonersofMansehra;
