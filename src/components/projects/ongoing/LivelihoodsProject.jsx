// src/components/projects/LivelihoodsProject.jsx
import React from 'react';
import styled from 'styled-components';
import TopBar from '../../TopBar';
import Header from '../../Header';

// Applying the new styling
const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
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

const ProjectDetails = styled.div`
  margin-bottom: 2rem;
`;

const ProjectHeading = styled.h2`
  font-size: 1.8rem;
  color: #444;
  margin-bottom: 1rem;
  border-bottom: 2px solid #FFDE59;
  padding-bottom: 0.5rem;
`;

const ProjectParagraph = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const LivelihoodsProject = () => {
  return (
    <>
      <TopBar/>
      <Header />
      <Container>
        <Title>Livelihoods Project</Title>
          <Date>April 2024 to March 2025</Date>
          <Organization>International Rehabilitation Council for Torture Victims (IRCT)</Organization>
        <ProjectDetails>
          <ProjectHeading>Ultimate Goal</ProjectHeading>
          <ProjectParagraph>
            To develop overall well-being of torture survivors by improving and strengthening their livelihoods assets, skills, and practices.
          </ProjectParagraph>
        </ProjectDetails>
        <ProjectDetails>
          <ProjectHeading>Objectives</ProjectHeading>
          <ProjectParagraph>
            <strong>1. </strong>To enable torture survivors to develop and improve their technical and vocational skills to generate income and employment opportunities for their well-being.
          </ProjectParagraph>
          <ProjectParagraph>
            <strong>2. </strong>To improve and strengthen the knowledge and confidence of torture survivors by linking them with the market and selling their products.
          </ProjectParagraph>
          <ProjectParagraph>
            <strong>3. </strong>To empower the torture survivors to socially integrate with their families and contribute to their social and economic needs.
          </ProjectParagraph>
          <ProjectParagraph>
            <strong>4. </strong>To enhance the resilience of torture survivors by establishing support mechanisms for training, capacity development, and resource mobilization from other institutions.
          </ProjectParagraph>
        </ProjectDetails>
      </Container>
    </>
  );
};

export default LivelihoodsProject;
