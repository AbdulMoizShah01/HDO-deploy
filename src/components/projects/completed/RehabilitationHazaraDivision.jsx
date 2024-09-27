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
const RehabilitationHazaraDivision = () => {
  return (
    <>
      <TopBar/>
      <Header />  {/* Include the header if needed */}
      <Container>
        <Title>Rehabilitation of Torture Victims of Hazara Division</Title>
        <Date>2010-2024</Date>
        <Organization>International Rehabilitation Council for Torture Victims (IRCT).</Organization>
        
        
        <SectionTitle>Medical Rehabilitation:</SectionTitle>
        <Paragraph>
          Registered torture victims (including women and children) both inside and outside the prisons of Haripur, Mansehra, Battagram, Kohistan and Mardan districts of KPK will be provided assistance of medical check-up, medicines, pathological and radiological tests during the grant period of 2015/16.
        </Paragraph>
        
        <SectionTitle>Psychological Rehabilitation:</SectionTitle>
        <Paragraph>
          Registered TVs would be helped returning to normal life by availing the facilities of psychological rehabilitation services from the trained psychologists/counselors of HDO during the grant period.
        </Paragraph>
        
        <SectionTitle>Socio-Economic Rehabilitation:</SectionTitle>
        <List>
          <ListItem>Jail based TVs including adult women men, juveniles and adolescent TVs would be enrolled for different certificate/degree courses of formal education at HDO’s jail based schools in three districts. While illiterate TVs would be enrolled at HDO’s school for Non-Formal Basic Education.</ListItem>
          <ListItem>Enroll juvenile and adolescent TVs would be enrolled and helped learning English Language at Haripur Jail.</ListItem>
          <ListItem>Adolescent, juvenile TVs registered at jail based computer training centre for IT course.</ListItem>
          <ListItem>TVs (adolescent, juvenile male/women) enrolled at sewing centre for learning dress making, designing and handicrafts for economic empowerment.</ListItem>
          <ListItem>Registered TVs would receive hygiene kits for protecting them against diseases.</ListItem>
          <ListItem>Torture victims would receive free of cost legal aid for contesting cases against their perpetrators, filing appeals against convictions and securing bails.</ListItem>
        </List>
      </Container>
    </>
  );
};

export default RehabilitationHazaraDivision;
