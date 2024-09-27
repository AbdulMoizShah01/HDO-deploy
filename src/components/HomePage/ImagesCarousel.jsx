// src/components/ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  margin: 0 auto; /* Center horizontally */
  width: 90%; /* Optional: Limit the maximum width of the carousel */
  border: solid 2px ;
  border-radius: 30px;
  border-color:#f2c90e;

  @media (max-width: 768px) {
    width: 95%; /* Adjust width for medium screens */
  }

  @media (max-width: 480px) {
    width: 100%; /* Full width for very small screens */
    padding: 0 1rem; /* Optional: Add padding for better spacing */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 950px;
  border-radius: 30px;
  object-fit: cover; /* Ensure images cover the area without distortion */

  @media (max-width: 768px) {
    height: 400px; /* Reduced height for smaller screens */
  }

  @media (max-width: 480px) {
    height: 300px; /* Further reduced height for very small screens */
  }
`
const CustomArrow = styled.div`
  &.slick-prev,
  &.slick-next {
    color: #362577; /* Arrow color */
    z-index: 1;
  }
  &.slick-prev:before,
  &.slick-next:before {
    color: #362577; /* Arrow color */
    font-size: 20px; /* Adjust size if needed */
  }
`;
;

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomArrow className="slick-next" />, // Use custom arrow
    prevArrow: <CustomArrow className="slick-prev" />, // Use custom arrow
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
      <div>
          <Image src="/imageCarousel/25.jpg" alt="Description for Image 2" />
        </div>
        <div>
          <Image src="/imageCarousel/1.jpeg" alt="UOH" />
        </div>
        <div>
          <Image src="/imageCarousel/2.jpeg" alt="Description for Image 2" />
        </div>
        <div>
          <Image src="/imageCarousel/3.jpeg" alt="Description for Image 3" />
        </div>
        <div>
          <Image src="/imageCarousel/5.jpeg" alt="Description for Image 3" />
        </div>
        <div>
          <Image src="/imageCarousel/6.jpeg" alt="Description for Image 3" />
        </div>
        <div>
          <Image src="/imageCarousel/9.jpeg" alt="Description for Image 3" />
        </div>
        <div>
          <Image src="/imageCarousel/10.jpeg" alt="Description for Image 3" />
        </div>
        <div>
          <Image src="/imageCarousel/11.jpeg" alt="Description for Image 3" />
        </div>
        {/* Add more images as needed */}
      </Slider>
    </CarouselContainer>
  );
};

export default ImageCarousel;
