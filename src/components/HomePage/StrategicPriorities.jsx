import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Keyframes for the fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PrioritiesSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  padding: 2rem;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between; /* Align text and logo side by side */
  align-items: center;
  background-color: #f2c90e;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  text-align: left;
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeIn} 2s ease-in-out;
    `}

  @media (max-width: 768px) {
    flex-direction: column; /* Stack content on mobile view */
    text-align: center;
  }
`;

const LogoContainer = styled.div`
  flex: 1; /* Allow the logo container to take up space */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem; /* Space between text and logo */
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeIn} 1s ease-in-out;
    `}

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 1.5rem; /* Space below logo on mobile */
  }
`;

const Logo = styled.img`
  max-height: 180px;
  @media (max-width: 768px) {
    max-height: 120px;
    max-width: 120px;
  }
`;

const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #362577;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  font-size: 1.3rem;
  margin-bottom: 1.2rem;
  padding-left: 1.8rem;
  position: relative;
  color: #362577;
  line-height: 1.8;

  &:before {
    content: "•";
    color: #007BFF;
    font-weight: bold;
    display: inline-block;
    width: 1.5rem;
    margin-left: -1.8rem;
  }
`;

// Main component
const StrategicPriorities = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cardPosition = document.getElementById('strategic-card').getBoundingClientRect().top;
      const screenPosition = window.innerHeight;
      if (cardPosition < screenPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <PrioritiesSection>
      <Card id="strategic-card" isVisible={isVisible}>
        <div>
          <Title>Strategic Priorities</Title>
          <List>
            <ListItem>Rehabilitation of torture and violence survivors</ListItem>
            <ListItem>Legal support to violence and torture victims</ListItem>
            <ListItem>Prevention of torture and gender-based violence</ListItem>
            <ListItem>Livelihoods and mental health development of inmates and vulnerable communities</ListItem>
            <ListItem>Legal and policy advocacy on human rights violations</ListItem>
            <ListItem>Research on integration of livelihoods and mental health programs</ListItem>
            <ListItem>Knowledge management and capacity development of CSOs</ListItem>
            <ListItem>Community empowerment for development and democratic governance</ListItem>
            <ListItem>Physical fitness and health counselling</ListItem>
            <ListItem>Media engagement, communication, info-activism</ListItem>
          </List>
        </div>
        <LogoContainer isVisible={isVisible}>
          <Logo src="/S.png" alt="Strategic Priorities Logo" />
        </LogoContainer>
      </Card>
    </PrioritiesSection>
  );
};

export default StrategicPriorities;
