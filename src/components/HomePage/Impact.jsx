import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';

const Container = styled.div`
  text-align: center; /* Center the heading and cards */
  margin-bottom: 30px;
`;

const Section = styled.section`
  display: flex;
  justify-content: center; /* Center all cards horizontally */
  align-items: flex-end; /* Align numbers at the bottom of the cards */
  flex-wrap: nowrap; /* Prevent wrapping on larger screens */
  overflow-x: auto; /* Allow horizontal scrolling if needed */
`;

const Card = styled.div`
  width: 20%; /* Adjust width to fit more cards in one line on desktop */
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin: 1rem;

  @media (max-width: 768px) {
    width: 15%; /* Smaller width for tablets */
    margin: 0.5rem; /* Reduce margin for better fit */
  }

  @media (max-width: 480px) {
    width: 12%; /* Smaller width for mobile devices */
    margin: 0.25rem; /* Further reduce margin for small screens */
  }
`;

const Number = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #FFDE59;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Adjust number size for mobile */
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-top: 4rem;
  color: #362577;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-top: 1.5rem;
  }
`;

const Text = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: #362577;

  @media (max-width: 768px) {
    font-size: 0.3rem;
  }

  @media (max-width: 480px) {
    font-size: 0.3rem; /* Smaller text for mobile devices */
  }
`;

const Impact = () => {
  return (
    <Container>
      <Heading>Our Impact</Heading>
      <Section>
        <Card>
          <Number>
            <CountUp end={21809} duration={6} />
          </Number>
          <Text><strong>Psychotherapeutic support</strong></Text>
        </Card>
        <Card>
          <Number>
            <CountUp end={22061} duration={5} />
          </Number>
          <Text><strong>Medical support</strong></Text>
        </Card>
        <Card>
          <Number>
            <CountUp end={8243} duration={6} />
          </Number>
          <Text><strong>Referral</strong></Text>
        </Card>
        <Card>
          <Number>
            <CountUp end={3517} duration={3} />
          </Number>
          <Text><strong>Legal Aid</strong></Text>
        </Card>
        <Card>
          <Number>
            <CountUp end={31458} duration={4} />
          </Number>
          <Text><strong>Legal counseling</strong></Text>
        </Card>
      </Section>
    </Container>
  );
};

export default Impact;
