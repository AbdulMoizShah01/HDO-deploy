import React, { useState } from 'react';
import styled from 'styled-components';

// Container for the whole team section
const TeamSection = styled.section`
  position: relative;
  padding: 2rem 0;
  text-align: center;
`;

const SectionTitle = styled.h2` 
  font-size: 2.5rem;
  color: #2a2a72;
  margin-top: 0rem;
  margin-bottom: 3rem;
  font-weight: bold;
`;

const SeeMoreLink = styled.a`
  position: absolute;
  top: 0;
  margin-top: 2rem;
  right: 2rem; /* Adjust as needed */
  font-size: 1.2rem;
  text-decoration: none;
  color: #007bff;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0 1.5rem;
`;

const TeamCard = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
  }
`;

const TeamImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-bottom: 5px solid #007bff;
`;

const TeamContent = styled.div`
  padding: 2rem;
`;

const TeamName = styled.h3`
  font-size: 1.4rem;
  color: #2a2a72;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const TeamPosition = styled.p`
  font-size: 0.9rem;
  color: #f7971e;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ViewBioButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: white;
  color: #0000EE;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
`;

// Sidebar styling with scrollable content
const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
  z-index: 1000;
  overflow-y: auto; // Enable scrolling
`;

const SidebarCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const SidebarContent = styled.div`
  margin-top: 3rem;
`;

const SidebarImage = styled.img`
  width: 100px; // Adjust image width
  height: auto;
  border-radius: 10px;
  margin-bottom: 1.5rem;
`;

const SidebarTitle = styled.h2`
  font-size: 1.8rem;
  color: #2a2a72;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const SidebarPosition = styled.p`
  font-size: 1.2rem;
  color: #f7971e;
  margin-bottom: 1.5rem;
`;

const SidebarBio = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const teamMembers = [
  {
    name: 'Muahammad Sadaqat',
    position: 'Founder & Team Leader',
    image: 'team/lead.jfif', 
    bio: 'Started his career as a human rights defender in early 90s and raised his voice for victims of torture, violence, child abuse and other marginalized segments of society at local, national and international forums including the United Nations. As a freelance journalist his researched based work vocally advocated for policy changes and protection mechanisms in line with provisions of the international human rights framework.His meritorious services for realization of Human Rights of women, children, minorities, PWDS and other vulnerable segments of society, he was conferred on NATIONAL HUMAN RIGHTS AWARD 2016 by the President of PAKISTAN on December 10, 2016.',
    socials: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
  },
  {
    image: 'team/ahsan.jfif',
    name: 'Mohammad Ahsan Khan',
    position: 'Director Programs',
    bio: 'He is renowned human rights cum development practitioner with a treasure of experience of working with public and private sector institutions during the last two decades. He brings with him experience of influencing public policy, lobbying and networking on issues of poverty alleviation, disaster management, violence and torture.He is currently representing Asia Region as member of Survivors Advisory Board (SAB) at International Rehabilitation Council for Victims of Torture.',
    socials: {
      twitter: 'https://twitter.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
    },
  },
  {
    image: 'team/saira.jpeg',
    name: 'Saira Bibi',
    position: 'Director Psycho-Therapeutic Services',
    bio: 'She is MPhil in clinical psychology and brings with her a 12 years long experience of offering psycho therapeutic services. She supervises HDO’s Mental Health & Psychosocial Support Services to victims of human rights violations.',
    socials: {
      twitter: 'https://twitter.com/alicejohnson',
      linkedin: 'https://linkedin.com/in/alicejohnson',
    },
  },
  {
    image: 'team/farhan.jfif',
    name: 'Dr. Farhan Iqbal',
    position: 'Incharge Rehabilitative Services',
    bio: 'He is International Medical Graduate from Romania and has 18 years experience of medically treating the victims of human rights abuses. He heads HDO’s rehabilitative services.',
    socials: {
      twitter: 'https://twitter.com/bobwilliams',
      linkedin: 'https://linkedin.com/in/bobwilliams',
    },
  },
];

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = (member) => {
    setSelectedMember(member);
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setSelectedMember(null);
  };

  return (
    <TeamSection> 
      <SectionTitle>Meet Our Team</SectionTitle>
      <SeeMoreLink href="/OurTeam">See More...</SeeMoreLink>
      <CardsGrid>
      
        {teamMembers.map((member, index) => (
          <TeamCard key={index}>
            <TeamImage src={member.image} alt={member.name} />
            <TeamContent>
              <TeamName>{member.name}</TeamName>
              <TeamPosition>{member.position}</TeamPosition>
              <ViewBioButton onClick={() => openSidebar(member)}>View Bio</ViewBioButton>
            </TeamContent>
          </TeamCard>
        ))}
      </CardsGrid>

      {selectedMember && (
        <Sidebar isOpen={isSidebarOpen}>
          <SidebarCloseButton onClick={closeSidebar}>&times;</SidebarCloseButton>
          <SidebarContent>
            <SidebarImage src={selectedMember.image} alt={selectedMember.name} />
            <SidebarTitle>{selectedMember.name}</SidebarTitle>
            <SidebarPosition>{selectedMember.position}</SidebarPosition>
            <SidebarBio>{selectedMember.bio}</SidebarBio>
          </SidebarContent>
        </Sidebar>
      )}
    </TeamSection>
  );
};

export default OurTeam;
