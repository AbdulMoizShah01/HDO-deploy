import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Animation for the cards (scale on hover and slide in on scroll)
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const BrochuresSection = styled.section`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* Added for positioning the See More link */
`;


const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  padding: 0 1.5rem;
`;

const BrochureCard = styled.div`
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transform: scale(1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  opacity: 0;
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeInUp} 1s ease forwards;
    `}

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
  }
`;

const BrochureImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-bottom: 5px solid #007bff;
`;

const BrochureContent = styled.div`
  padding: 2rem;
  text-align: center;
`;

const BrochureTitleCard = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #2a2a72;
  font-weight: bold;
  transition: color 0.3s ease;

  ${BrochureCard}:hover & {
    color: #007bff;
  }
`;

const BrochureDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #555;
  line-height: 1.6;
`;

const BrochureButton = styled.a`
  display: inline-block;
  padding: 0.8rem 2rem;
  color: white;
  background: #F7971E;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FFD200, #F7971E);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FFD200, #F7971E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-radius: 30px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
  }
`;

// Added See More link
const SeeMoreLink = styled.a`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const Brochures = () => {
  // Scroll-triggered animation state
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.brochure-card');
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setVisibleCards((prev) => [...prev, index]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const brochures = [
    {
      title: 'Honour Killing',
      image: 'brochures/honor killing.png', // Replace with your image paths
      link: 'https://drive.google.com/file/d/1AHspsX3x-MM0F-PS3XsbJ-PPjW0p-D7H/view?usp=sharing',
    },
    {
      title: 'Enforced Marriages',
      image: 'brochures/enfored marriages.png',
      link: '#',
    },
    {
      title: 'FIR',
      image: 'brochures/FIR.png',
      link: '#',
    },
    // Add more brochures as needed
  ];

  return (
    <BrochuresSection>
      <SeeMoreLink href="/brochures-list">See More...</SeeMoreLink> {/* Link to brochures list page */}
      <CardsContainer>
        {brochures.map((brochure, index) => (
          <BrochureCard
            key={index}
            className="brochure-card"
            isVisible={visibleCards.includes(index)}
          >
            <BrochureImage src={brochure.image} alt={brochure.title} />
            <BrochureContent>
              <BrochureTitleCard>{brochure.title}</BrochureTitleCard>
              <BrochureDescription>{brochure.description}</BrochureDescription>
              <BrochureButton href={brochure.link}>Download</BrochureButton>
            </BrochureContent>
          </BrochureCard>
        ))}
      </CardsContainer>
    </BrochuresSection>
  );
};

export default Brochures;
