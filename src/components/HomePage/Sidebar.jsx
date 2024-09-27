import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // FontAwesome icons for arrows

// Container for the sidebar
const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '50%' : '1px')}; /* Expand width when open */
  height: 100%;
  background-color: #808080;
  overflow-x: hidden;
  transition: width 0.3s ease; /* Smooth transition */
  z-index: 1000;
`;

// Content inside the sidebar (message)
const SidebarContent = styled.div`
  padding: 1rem;
  padding-left:2rem;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')}; /* Show content when sidebar is open */
  transition: opacity 0.5s ease;
  color: white;
  font-size: 1.2rem;
  text-align: center;
`;

const Heading=styled.h1`
  padding: 1rem;
  padding-left:2rem;
  color: #FF0000;
  font-size: 2rem;
  text-align: center;
`;

// Visible part of the collapsed sidebar (stick to middle left and display vertical text)
const SidebarIcon = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: #f2c90e;
  border-radius:5px;
  width: 4px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  z-index: 1001; /* Ensure it stays on top */
  writing-mode: vertical-rl; /* This will display the text vertically */
  text-orientation: mixed;
  padding: 1rem;
`;


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Icon with vertical text */}
      <SidebarIcon onMouseEnter={toggleSidebar} onMouseLeave={toggleSidebar}>
        Lead's Message<FaArrowRight/>
      </SidebarIcon>
  
      {/* Sidebar container */}
      <SidebarContainer isOpen={isOpen}>
        {/* Content revealed when sidebar expands */}
        <SidebarContent isOpen={isOpen}>
          <Heading>Message from Team Leader</Heading>
          <p>
            I am delighted to cordially welcome you all the honorable visitors
            of our website. If you are among the souls aspiring to see
            far-reaching changes in the prevailing human rights situation of the
            country through awareness raising, attitudinal changes, influencing
            laws and policies, then you are on the same page, HDO’s team has
            been for the last over a decade.
          </p>

          <p>
            HDO’s core belief is to promote human rights equality,
            non-discrimination and overcompensating for biopsychosocial
            complications that scores of victims of human rights violations
            experience, owing to flaws in the Pakistani legal framework that
            literally attracted spotlight both from local and international
            human rights bodies including United Nations Committee against
            Torture.
          </p>

          <p>
            Apart from providing services of medical, psychological and
            socio-economic rehabilitation to victims of custodial abuses and
            gender-based violence in different parts of the Khyber Pakhtunkhwa
            province, HDO’s team have, since its inception, worked more
            diligently for promoting the cause of human rights protection by
            applying different strategies required for lasting changes.
          </p>

          <p>
            Being an organization enjoying uniqueness in its nature and work,
            the team of HDO have also very devotedly and persistently, utilized
            its efforts for producing the lot of selfless and courageous human
            rights defenders spliced in its district based Integrated Human
            Rights Network IHRN and group of Senior Khawateen Rahnuma (group of
            senior women leaders).
          </p>

          <p>
            On behalf of my team members, I would like to convey my gratitude to
            all the donor agencies, networks of human rights organizations and
            individuals that have evinced a good deal of confidence in the work
            and efforts of HDO by extending their uninterrupted support during
            the last 13 years. I also owe many thanks to HDO’s team that helped
            it winning kudos from its beneficiaries, government and
            non-governmental organizations.
          </p>

          <p>
            Assuring transparency, commitment, equality and confidentiality from
            our side, HDO would wish to recommend all its worthy web visitors to
            join hands with us in promoting and protecting human rights that is
            imperative for a peaceful society.
          </p>
        </SidebarContent>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
