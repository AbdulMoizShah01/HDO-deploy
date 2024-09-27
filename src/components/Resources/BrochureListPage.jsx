import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TopBar from '../TopBar';
import Header from '../Header';

const BrochuresSection = styled.section`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* For positioning the See More link */
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

  &:hover {
    transform: none; /* Remove hover scaling */
    box-shadow: none; /* Remove hover shadow effect */
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
  background: #F7971E;
  background: -webkit-linear-gradient(to right, #FFD200, #F7971E);
  background: linear-gradient(to right, #FFD200, #F7971E);
  border-radius: 30px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const BrochureListPage = () => {
  const brochures = [
    {
      title: 'Honour Killing',
      description: 'Discover the truth behind honor killings and how we address this critical issue in our details.',
      image: 'brochures/honor killing.png', 
      link: 'https://drive.google.com/file/d/1AHspsX3x-MM0F-PS3XsbJ-PPjW0p-D7H/view?usp=sharing',
    },
    {
      title: 'Enforced Marriages',
      description: 'This brochure outlines our services and impact over the past year.',
      image: 'brochures/enfored marriages.png',
      link: '#',
    },
    {
      title: 'FIR',
      description: 'Learn more about our upcoming events and initiatives in this brochure.',
      image: 'brochures/FIR.png',
      link: '#',
    },
    {
      title: 'Sexual Harrasment',
      description: 'Learn more about our upcoming events and initiatives in this brochure.',
      image: 'brochures/sexual harassment.png',
      link: 'https://drive.google.com/file/d/1826UUXx56zpKOQdMVBysYbfxtOhodcW8/view?usp=sharing',
    },
    {
      title: 'Women & Jail Laws',
      description: 'Learn more about our upcoming events and initiatives in this brochure.',
      image: 'brochures/wjl.png',
      link: 'https://drive.google.com/file/d/1D3Vgkp5nBc-ymzi287bxxB6kZO5VP1MS/view?usp=sharing',
    },
    {
      title: 'Mental & Physical Torture',
      description: 'Learn more about our upcoming events and initiatives in this brochure.',
      image: 'brochures/mst.png',
      link: 'https://drive.google.com/file/d/1ukzRWKXiG2rDb2ZoRswXZE5V93O2-Zw_/view?usp=sharingx',
    },
  ];

  return (
    <>
      <TopBar />
      <Header />
      <BrochuresSection>
        <CardsContainer>
          {brochures.map((brochure, index) => (
            <BrochureCard key={index}>
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
    </>
  );
};

export default BrochureListPage;
