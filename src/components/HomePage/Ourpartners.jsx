import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const PartnersSection = styled.section`
  padding: 2rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PartnersTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Carousel = styled(Slider)`
  width: 100%;
  max-width: 1200px;

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-dots li button:before {
    color: grey;
  }

  .slick-dots li.slick-active button:before {
    color: #FFDE59; 
  }
`;

const PartnerLogo = styled.img`
  max-height: 100px;
  max-width: 100%;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const OurPartners = () => {
  const partnerLogos = [
    { src: 'bannerlogo/aust.png', alt: 'AUST' },
    { src: 'bannerlogo/prison.jpg', alt: 'Prison' },
    { src: 'bannerlogo/aurat.png', alt: 'Aurat' },
    { src: 'bannerlogo/unhr.png', alt: 'UNHR' },
    { src: 'bannerlogo/irct.jpg', alt: 'IRCT' },
    { src: 'bannerlogo/uoh.jpg', alt: 'UOH' },
    { src: 'bannerlogo/asia.png', alt: 'Aisan' },
    { src: 'bannerlogo/cpmc.png', alt: 'CPMC' },
    { src: 'bannerlogo/dpsc.png', alt: 'DPSC' },
    { src: 'bannerlogo/logo (1).png', alt: 'HU' },
    { src: 'bannerlogo/kphm.jpg', alt: 'KPHM' },
    { src: 'bannerlogo/pmhc.jpg', alt: 'PMHC' },
    { src: 'bannerlogo/Prisons.png', alt: 'DOP' },
    { src: 'bannerlogo/PAFIAST.png', alt: 'PAFIAST' },
    // Add more partner logos here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of logos to show at a time
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <PartnersSection>
      <PartnersTitle>Our Partners</PartnersTitle>
      <Carousel {...settings}>
        {partnerLogos.map((logo, index) => (
          <div key={index}>
            <PartnerLogo src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </Carousel>
    </PartnersSection>
  );
};

export default OurPartners;
