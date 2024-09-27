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

const MissionCard = styled.div`
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
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

const Logo = styled.img`
  height: 150px;
  padding-bottom: 5px;

  @media (max-width: 768px) {
    height: 100px;
  }
`;

const MissionContent = styled.div`
  flex: 12;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  padding-left: 2rem;
  margin-bottom: 10px;
  ${({ isVisible }) => isVisible && css`
    animation: ${fadeIn} 1s ease-in-out;
  `}

  @media (max-width: 768px) {
    flex: auto;
    padding-left: 0;
    text-align: center;
    justify-content: space-between;
  }
`;

const MissionTitle = styled.h2`
  font-size: 2rem;
  color: #362577;
  margin-bottom: 1px;
  margin-right: 14rem;
  ${({ isVisible }) => isVisible && css`
    animation: ${fadeIn} 1s ease-in-out;
  `}

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-right: 0;
  }
`;

const MissionText = styled.p`
  font-size: 20px;
  color: #362577;
  line-height: 1.5;
  margin-bottom: 2rem;
  padding-right: 5rem;
  ${({ isVisible }) => isVisible && css`
    animation: ${fadeIn} 1s ease-in-out;
  `}

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-right: 0;
  }
`;

const Mission = () => {
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
    <MissionCard id="mission" ref={sectionRef}>
      <LogoContainer isVisible={isVisible}>
        <Logo src="M.png" alt="Mission Logo" />
      </LogoContainer>
      <MissionContent isVisible={isVisible}>
        <MissionTitle isVisible={isVisible}>Our Mission</MissionTitle>
        <MissionText isVisible={isVisible}>
          To promote human rights, empower individuals, and advocate for a society free from violence and injustice.
        </MissionText>
      </MissionContent>
    </MissionCard>
  );
};

export default Mission;
