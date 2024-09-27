import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Contact us at: info@example.com</p>
      <p>Business Hours: Mon-Fri 9am-5pm</p>
      <p>Follow us on Instagram: @example</p>
      <p>Location: 123 Example St, City, Country</p>
    </FooterContainer>
  );
};

export default Footer;
