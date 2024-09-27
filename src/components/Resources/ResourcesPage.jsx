// src/components/ResourcesPage.js
import React from 'react';
import styled from 'styled-components';
import TopBar from '../TopBar';
import Header from '../Header';

const ResourcesContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: left;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ResourceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ResourceItem = styled.li`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ResourceLink = styled.a`
  font-size: 1.1rem;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const resources = [
  {
    title: "Torture and Custodial Death Prevention and Punishment Act 2022",
    link: "https://hrcp-web.org/hrcpweb/wp-content/uploads/2020/09/2023-LWC03-Torture-and-Custodial-Death-Prevention-and-Punishment-Act-2022.pdf",
  },
  {
    title: "UNCAT (United Nations Convention Against Torture)",
    link: "https://www.ohchr.org/sites/default/files/cat.pdf",
  },
  {
    title: "OPCAT (Optional Protocol to the Convention Against Torture)",
    link: "https://www.ohchr.org/sites/default/files/cat-one.pdf",
  },
  {
    title: "Istanbul Protocol",
    link: "https://www.ohchr.org/sites/default/files/documents/publications/2022-06-29/Istanbul-Protocol_Rev2_EN.pdf",
  },
  {
    title: "Mandela Rules",
    link: "https://www.unodc.org/documents/justice-and-prison-reform/Nelson_Mandela_Rules-E-ebook.pdf",
  },
  {
    title: "Translated Versions of Key Articles from Human Rights Instruments",
    link: "https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/eng.pdf",
  },
  {
    title: "GBV (Gender-Based Violence) and Child Rights",
    link: "https://gbvaor.net/sites/default/files/2022-01/Gender%20Based%20Violence%20And%20Child%20Protection%20Framework_EN_FINAL_0.pdf",
  },
  {
    title: "GSR (General Systematic Review)",
    link: "https://example.com/gsr",
  },
  {
    title: "Research and Reports",
    link: "https://example.com/research-reports",
  },
  {
    title: "HDO’s Study of 10 Districts of KP Province about GBV",
    link: "https://example.com/hdo-study",
  },
  {
    title: "Shadow Report to UN’s Committee Against Torture During its First Review in 2017",
    link: "https://www.ohchr.org/en/press-releases/2017/04/committee-against-torture-examines-initial-report-pakistan",
  },
];

const ResourcesPage = () => {
  return (
    <>
    <TopBar/>
    <Header/>
    <ResourcesContainer>
      <Title>Resources</Title>
      <ResourceList>
        {resources.map((resource, index) => (
          <ResourceItem key={index}>
            <ResourceLink href={resource.link} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </ResourceLink>
          </ResourceItem>
        ))}
      </ResourceList>
    </ResourcesContainer>
    </>
  );
};

export default ResourcesPage;
