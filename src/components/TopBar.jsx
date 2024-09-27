import React, { useState } from 'react';
import { FaSearch, FaUserPlus } from 'react-icons/fa';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { data } from './HomePage/data'; // Import your static data

const JoinUsButton = styled(NavLink)`
  background-color: #362577;
  color: #ffde59;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffc107;
    color: #362577;
  }

  svg {
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    display: none; /* Hide on mobile view */
  }
`;

const SearchResultsDropdown = styled.div`
  position: absolute;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
`;

const SearchResultItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
`;

const Logo = styled.img`
  height: 100px;
  width: auto;
  padding-top: 4px;

  @media (max-width: 768px) {
    height: 60px; /* Reduce logo size on mobile */
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 8px 12px 8px 36px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 6px 10px 6px 36px;
    font-size: 14px;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #aaa;

  @media (max-width: 768px) {
    top: 35%;
  }
`;

const TopBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.length > 0) {
      const results = data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setShowDropdown(true);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  };

  const handleResultClick = (link) => {
    setSearchTerm('');
    setShowDropdown(false);
    window.location.href = link;
  };

  return (
    <TopBarContainer>
      <div>
        <Logo src="/logo.png" alt="Logo" />
      </div>
      <SearchContainer>
        <SearchIcon />
        <SearchBar
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {showDropdown && (
          <SearchResultsDropdown>
            {searchResults.map((result, index) => (
              <SearchResultItem
                key={index}
                onClick={() => handleResultClick(result.link)}
              >
                {result.title}
              </SearchResultItem>
            ))}
          </SearchResultsDropdown>
        )}
      </SearchContainer>
      <JoinUsButton to="/join-us">
        <FaUserPlus />
        Join Us
      </JoinUsButton>
    </TopBarContainer>
  );
};

export default TopBar;
