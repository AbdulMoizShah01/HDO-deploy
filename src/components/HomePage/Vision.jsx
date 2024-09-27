import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const VisionSection = styled.section`
  flex: 1;
  padding: 2rem;
  display: flex;
  align-items: center;
  background-color: #f2c90e;
  overflow: hidden;
  border-radius: 8px; /* Added border radius for better appearance */
  min-width: 300px; /* Ensures sections have a minimum width */

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    text-align: center;
  }
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  ${({ isVisible }) => isVisible && css`
    animation: ${fadeIn} 1s ease-in-out;
  `}

  @media (max-width: 768px) {
    justify-content: center; /* Center the logo on mobile */
    margin-bottom: 1rem; /* Add space below the logo on mobile */
  }
`;

const Logo = styled.img`
  height: 150px;
  padding-bottom: 5px;

  @media (max-width: 768px) {
    height: 100px; /* Adjust height for mobile */
  }
`;

const VisionContent = styled.div`
  flex: 7; /* Adjusted to fit content */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding-left: 2rem; /* Added padding for spacing */
  ${({ isVisible }) => isVisible && css`
    animation: ${fadeIn} 1s ease-in-out;
  `}

  @media (max-width: 768px) {
    flex: auto; /* Allow content to adjust its size */
    padding-left: 0; /* Remove left padding on mobile */
    text-align: center; /* Center text on mobile */
  }
`;

const VisionTitle = styled.h2`
  font-size: 2rem;
  margin-right: 12rem;
  margin-bottom: 0.5rem;
  color: #362577;
  ${({ isVisible }) => isVisible && css`
    animation: ${fadeIn} 1s ease-in-out;
  `}

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Adjust font size for mobile */
  }
`;

const VisionText = styled.p`
  font-size: 1.25rem;
  color: #362577;
  line-height: 1.5;
  margin-bottom: 2rem;
  padding-right: 2rem;
  ${({ isVisible }) => isVisible && css`
    animation: ${fadeIn} 1s ease-in-out;
  `}

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for mobile */
    padding-right: 0; /* Remove right padding on mobile */
  }
`;

const Vision = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
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
    <VisionSection id="vision" ref={sectionRef}>
      <LogoContainer isVisible={isVisible}>
        <Logo src="V.png" alt="Logo" />
      </LogoContainer>
      <VisionContent isVisible={isVisible}>
        <VisionTitle isVisible={isVisible}>Our Vision</VisionTitle>
        <VisionText isVisible={isVisible}>
          An egalitarian and enlightened society free from torture, violence and poverty
        </VisionText>
      </VisionContent>
    </VisionSection>
  );
};

export default Vision;
