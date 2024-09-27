import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AboutSection = styled.section`
  padding: 2rem 1rem; /* Added padding for better spacing */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem; /* Reduced padding on mobile */
  }
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center; /* Center the title text for mobile view */

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const AboutTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  animation: ${(props) => (props.inView ? fadeIn : 'none')} 1s ease-in-out;
  max-width: 1300px;
  margin: 0 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center; /* Center text for better readability on mobile */
    padding: 0 0.5rem; /* Add padding for better spacing */
  }
`;

const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.4; /* Adjust line height for readability on mobile */
    margin-bottom: 1rem; /* Add margin for better spacing */
  }
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 1.5rem; /* Increase spacing for mobile */
  }
`;

const Banner = styled.img`
  height: 300px;
  width: 1100px;
  margin-left: 1rem;
  animation: ${(props) => (props.inView ? slideIn : 'none')} 1s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-left: 0;
    max-width: 100%; /* Ensure it doesn't exceed screen width */
  }
`;

const AboutUs = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: bannerRef, inView: bannerInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <AboutSection id="about-us" ref={aboutRef}>
      <BannerContainer ref={bannerRef}>
        <Banner src="banner.png" alt="Banner" inView={bannerInView} />
      </BannerContainer>
      <AboutTextContainer inView={aboutInView}>
        <AboutText>
          By changing the traditional and inhuman practices of torture and violence in the society, HDO aspires to empower millions of survivors to improve their wellbeing through resilience, confidence building, capacity development, self-esteem and social integration. HDO believes that every individual being citizen of state has an inalienable right to be respected and protected by state from any kind of torture or violence in all its shapes and forms. Pursuant to this realization, the leadership of HDO-Pakistan committed itself to create an enabling environment where every human being is treated as worthy of all rights and privileges as enshrined in national and international laws of human rights.
        </AboutText>
      </AboutTextContainer>
    </AboutSection>
  );
};

export default AboutUs;
