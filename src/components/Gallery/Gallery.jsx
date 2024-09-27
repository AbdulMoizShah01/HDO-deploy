// src/components/GalleryPage.js
import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import TopBar from '../TopBar';

const GalleryContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f0f0f0;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 1.5rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border-color: #f2c90e;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover img {
    transform: scale(1.05);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const images = [
  '/imageCarousel/1.jpeg',
  '/imageCarousel/2.jpeg',
  '/imageCarousel/3.jpeg',
  '/imageCarousel/4.jpeg',
  '/imageCarousel/5.jpeg',
  '/imageCarousel/6.jpeg',
  '/imageCarousel/7.jpeg',
  '/imageCarousel/8.jpeg',
  '/imageCarousel/9.jpeg',
  '/imageCarousel/10.jpeg',
  '/imageCarousel/11.jpeg',
  '/imageCarousel/12.jpeg',
  '/imageCarousel/13.jpeg',
  '/imageCarousel/14.jfif',
  '/imageCarousel/15.jfif',
  '/imageCarousel/16.jfif',
  '/imageCarousel/17.jfif',
  '/imageCarousel/18.jfif',
  '/imageCarousel/19.jfif',
  '/imageCarousel/20.jpg',
  '/imageCarousel/21.jfif',
  '/imageCarousel/23.jpg',
  '/imageCarousel/24.jpg',
  '/imageCarousel/25.jpg',
  // Add more image paths as needed
];

const GalleryPage = () => {
  return (
    <>
    <TopBar/>
    <Header/>
    <GalleryContainer>
      <Title>Gallery</Title>
      <Grid>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <GalleryImage src={image} alt={`Gallery image ${index + 1}`} />
          </ImageWrapper>
        ))}
      </Grid>
    </GalleryContainer>
    </>
  );
};

export default GalleryPage;
