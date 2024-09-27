import React from 'react';
import TopBar from '../TopBar';
import Header from '../Header';
import Footer from './Footer';
import AboutUs from './AboutUs';
import Impact from './Impact';
import Vision from './Vision';
import Mission from './Mission';
import OurApproach from './Approach';
import OurPartners from './Ourpartners';
import styled from 'styled-components';
import ImageCarousel from './ImagesCarousel';
import OurTeam from './OurTeam';
import Brochures from './Brochures';
import Sidebar from './Sidebar';
const Main = styled.main`
  padding: 2rem 2rem 2rem 2rem;
  background-color: #fff;
`;

const HomePageTitle = styled.p`
  font-size: 20px;
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 5px;
`;

const VisionMissionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HomePage = () => {
  return (
    <div className='App'>
      <TopBar/>
      <Header />
      <Sidebar/>
      <Main>
        <HomePageTitle>
          Torture and violence victims are encouraged to contact for online/physical psychosocial support <br/>
          <a href="mailto:info@hdopk.org">info@hdopk.org</a>
        </HomePageTitle>
        <AboutUs />
        <ImageCarousel/>
        <Impact />
        <VisionMissionContainer>
          <Vision />
          <Mission />
        </VisionMissionContainer>
        <OurApproach/>
        <OurTeam/>
        <Brochures/>
        <OurPartners/>
      </Main>
      <Footer />
    </div>
  );
};

export default HomePage;
