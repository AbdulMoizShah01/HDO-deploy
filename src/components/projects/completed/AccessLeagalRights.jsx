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

const AccessLegalRights = () => {
  return (
    <>
      <TopBar/>
      <Header />  {/* Include the header if needed */}
      <Container>
        <Title>Access of Women and Children to Legal Rights Improved in Central Prison Haripur, KPK</Title>
        <Date>August 2006 - December 2007</Date>
        <Organization>SDC funded this project through Civil Society Human & Institutional Development Program (CHIP)</Organization>
        
        <SectionTitle>Goal:</SectionTitle>
        <Paragraph>Self-respect of women and children in prison enhanced.</Paragraph>
        
        <SectionTitle>Purpose:</SectionTitle>
        <Paragraph>Access of women and children to legal rights improved in Central Prison Haripur, NWFP.</Paragraph>
        
        <SectionTitle>Results:</SectionTitle>
        <List>
          <ListItem>Women offenders are aware of the law of arrest and detention.</ListItem>
          <ListItem>Women prisoners are secure from every kind of torture and abuse.</ListItem>
          <ListItem>Children are provided with educational and entertainment facilities.</ListItem>
          <ListItem>Period of detention of women prisoners reduced.</ListItem>
        </List>
      </Container>
    </>
  );
};

export default AccessLegalRights;
