import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import TopBar from './TopBar'

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #220660;
  text-align: center;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
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

const JoinUsButton = styled.button`
  background-color: #FFDE59;
  color: #220660;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 2rem;

  &:hover {
    background-color: #220660;
    color: white;
  }
`;

const JoinUsIcon = styled.span`
  margin-right: 10px;
`;

const JoinUs = () => {
  return (
    <>
    <TopBar/>
    <Header/>
    <Container>
      <Title>Join Us</Title>
      <Paragraph>
        You can contribute your intellectual and physical efforts by joining our “voice for voiceless initiative” in the fight against human rights violations through:
      </Paragraph>
      <List>
        <ListItem>Volunteering your expertise and skills in the medical, psychosocial or legal rehabilitation of victims of torture, violence, child abuse, and natural disasters.</ListItem>
        <ListItem>Documentation and referral of human rights abuses and victims.</ListItem>
        <ListItem>Co-sponsoring research, surveys, advocacy and lobbying campaigns, dissemination of knowledge and information among target communities and the general public.</ListItem>
        <ListItem>Donating books, sports articles (for formal and non-formal education), and video material relevant to human rights protection.</ListItem>
        <ListItem>Donating medicines, medical supplies, and in-kind support for needy jail inmates and vulnerable groups, including paying fines for prisoners who cannot due to poor backgrounds.</ListItem>
        <ListItem>Providing moral and material support to HDO in its struggle to make vulnerable groups socio-economically, mentally, and physically resilient.</ListItem>
        <ListItem>Joining as an intern or employee. For more information, contact <a href="mailto:info@hdopk.org">info@hdopk.org</a>.</ListItem>
      </List>
      <JoinUsButton>
      <a href='https://docs.google.com/document/d/1Ov8QOerzvffdhtJS6fZRo89EQrah2Sxi/edit?usp=sharing&ouid=109518738467782395288&rtpof=true&sd=true'>
     <JoinUsIcon>✋</JoinUsIcon> Join Us as Volunteer
     </a>
    </JoinUsButton>
    
     
    <JoinUsButton>
      <a href='https://docs.google.com/document/d/1MFYpwtnddWAXrtUx7lSC7M4jwAt51aIF/edit?usp=sharing&ouid=109518738467782395288&rtpof=true&sd=true'>
     <JoinUsIcon>✋</JoinUsIcon> Join Us as Intern
     </a>
      </JoinUsButton>
      
    </Container>
    </>
  );
};

export default JoinUs;
