import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Keyframes for the fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(1px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled component for the section container
const ApproachSection = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  background-color: #f2c90e;
  margin: 2rem auto;
  ${({ isVisible }) => isVisible && css`
    animation: ${fadeIn} 2s ease-in-out;
  `}

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem; /* Reduce padding for smaller screens */
    width: 90%;
  }
`;

// Styled component for the section title
const ApproachTitle = styled.h2`
  font-size: 2rem;
  color: #362577;
  padding-left: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    padding-left: 0;
    font-size: 1.5rem;
    margin-bottom: 0.5rem; /* Reduce margin for tighter layout */
  }
`;

// Styled component for the image container
const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  ${({ isVisible }) => isVisible && css`
    animation: ${fadeIn} 1s ease-in-out;
  `}

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem; /* Space between logo and text on mobile */
  }
`;

// Styled component for the image
const Logo = styled.img`
  max-height: 200px;

  @media (max-width: 768px) {
    max-height: 120px; /* Adjust logo size for smaller screens */
    max-width: 120px;
  }
`;

// Styled component for the content container
const ApproachContent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;

  @media (max-width: 768px) {
    padding-left: 0;
    text-align: center;
  }
`;

// Styled component for the text content
const ApproachText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #362577;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Slightly smaller text on mobile */
    text-align: center; /* Center text on mobile for better readability */
  }
`;

// Main OurApproach component
const OurApproach = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <ApproachSection ref={sectionRef} isVisible={isVisible}>
      <LogoContainer isVisible={isVisible}>
        <Logo src="A.png" alt="Our Approach" />
      </LogoContainer>
      <ApproachContent>
        <ApproachTitle>Our Approach</ApproachTitle>
        <ApproachText>
          HDO has the pride of promoting human rights through a people-centered community-led approach. While having people at the center of all the programs, this approach has three distinctive features i.e. community mobilization, capacity development, and policy advocacy. HDO believes that torture is both a cause and effect of poverty and is associated with systemic problems (colonial rules and structures) of the system. HDO adopts a two-way strategy of engagement wherein a top-down process is followed to influence public policy and decision-making process and a bottom-up approach of mobilizing and networking with public, private, and civil society stakeholders to plan, seek and realize the aspired change.
        </ApproachText>
      </ApproachContent>
    </ApproachSection>
  );
};

export default OurApproach;
