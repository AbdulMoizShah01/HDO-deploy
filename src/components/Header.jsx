import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaUserPlus, FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  background-color:#f2c90e;
  position: sticky;
  top: 0;
  height: 50px;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 2px -2px gray;
  z-index: 10;
  box-sizing: border-box;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
  flex-grow: 1;
  justify-content: center;

  @media (max-width: 768px) {
    display: none; /* Hide the menu on smaller screens */
  }
`;

const Li = styled.li`
  margin: 0 1rem;
  position: relative;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #FFFFFF; /* Updated text color to white for better contrast */
  padding: 20px 0;
  transition: all 0.3s ease;
  font-family: Arial, sans-serif;
  font-size: 1rem;

  &:hover,
  &.active {
    font-weight: bold;
    font-size: 1.2rem;
    color: #362577; /* Accent color from the logo */
  }
`;

const SubNavItem = styled.div`
  text-decoration: none;
  color: #FFFFFF; /* Updated text color to white */
  padding: 20px 0;
  transition: all 0.3s ease;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  display: flex;
  align-items: center;

  &:hover {
    font-weight: bold;
    font-size: 1.2rem;
    color: #362577; /* Accent color for hover state */
  }

  &::after {
    content: '▼';
    font-size: 0.8rem;
    margin-left: 5px;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: rotate(180deg);
  }
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f2c90e; /* Darker background for dropdown */
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 1rem;
  z-index: 20;
  white-space: nowrap;
  width: max-content;
  max-width: 90vw;

  ${Li}:hover & {
    display: flex;
  }
`;

const DropdownColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;

  &:last-child {
    margin-right: 0;
  }
`;

const ProjectLink = styled(NavLink)`
  margin-top: 0.5rem;
  text-decoration: none;
  color: #FFFFFF; /* Updated text color to white */
  padding: 5px 0;
  transition: all 0.3s ease;
  font-family: Arial, sans-serif;
  font-size: 1rem;

  &:hover,
  &.active {
    font-weight: bold;
    font-size: 1.2rem;
    color: #362577; /* Accent color */
  }
`;

const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.8rem;
  color: #FFFFFF; /* Updated icon color to white */

  @media (max-width: 768px) {
    display: block; /* Show the menu toggle button on smaller screens */
  }
`;

const SideNav = styled.div`
  height: 100%;
  width: ${({ isOpen }) => (isOpen ? '250px' : '0')};
  position: fixed;
  z-index: 30;
  top: 0;
  right: 0;
  background-color: #2E2E3A; /* Side navigation background color */
  overflow-y: auto; /* Make the side menu scrollable */
  transition: 0.3s;
  padding-top: 60px;
  box-shadow: ${({ isOpen }) => (isOpen ? '-4px 0 10px rgba(0, 0, 0, 0.1)' : 'none')};
`;

const SideNavContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  a {
    text-decoration: none;
    font-size: 1.2rem;
    color: #FFFFFF; /* Updated text color to white */
    margin: 10px 0;
    transition: all 0.3s ease;

    &:hover {
      font-weight: bold;
      color: #FFDE59; /* Accent color */
    }
  }
`;

const CollapsibleSection = styled.div`
  margin: 10px 0;

  button {
    background: none;
    border: none;
    font-size: 1.2rem;
    text-align: left;
    padding: 10px 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #FFFFFF; /* Updated button text color to white */

    &:hover {
      color: #FFDE59; /* Accent color for hover state */
    }

    svg {
      margin-left: 10px;
      transition: transform 0.3s ease;
    }

    &.active svg {
      transform: rotate(180deg);
    }
  }

  div {
    padding-left: 20px;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

const Header = () => {
  const [isSideNavOpen, setSideNavOpen] = useState(false);
  const [openSections, setOpenSections] = useState({});

  const toggleSideNav = () => {
    setSideNavOpen(!isSideNavOpen);
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <Nav>
      
      {/* Menu Toggle Button for Smaller Screens */}
      <MenuToggle onClick={toggleSideNav}>
        {isSideNavOpen ? <FaTimes /> : <FaBars />}
      </MenuToggle>

      {/* Desktop Navigation */}
      <Ul>
        <Li>
          <SubNavItem><ProjectLink exact to="/" activeClassName="active">About Us</ProjectLink></SubNavItem>
          <DropdownMenu>
            <DropdownColumn>
            <ProjectLink exact to="/OurTeam" activeClassName="active">Our Team</ProjectLink>
            </DropdownColumn>
          </DropdownMenu>
          </Li>

        <Li>
          <SubNavItem>Programs & Services</SubNavItem>
          <DropdownMenu>
            <DropdownColumn>
              <ProjectLink exact to="/Services" activeClassName="active">Rehabilitation Services</ProjectLink>
            </DropdownColumn>
          </DropdownMenu>
        </Li>
        <Li>
          <SubNavItem>Projects</SubNavItem>
          <DropdownMenu>
            <DropdownColumn>
              <strong>Ongoing Projects</strong>
              <ProjectLink exact to="/livelihoods-project" activeClassName="active">Livelihoods Project</ProjectLink>
              <ProjectLink exact to="/Integration-of-MHPSS" activeClassName="active">Integration of MHPSS & Livelihoods<br/>in LMICs</ProjectLink>
            </DropdownColumn>
            <DropdownColumn>
              <strong>Completed Projects</strong>
              <ProjectLink exact to="/rehabilitaion-of-torture-victims-of-Hazara-Division">Rehabilitation of torture victims of<br/>Hazara Division</ProjectLink>
              <ProjectLink exact to="/Protecting-prison-population-from-falling-victim-to-Covid-19-in-Hazara-division" activeClassName="active">Protecting prison population<br/>from falling victim to Covid-19<br/> in Hazara division</ProjectLink>
              <ProjectLink exact to="/Preventing-Detainees-from-Custodial-Abuses-and-Rebuilding-Life-of-Torture-Survivors" activeClassName="active">Preventing Detainees from Custodial Abuses<br/>and Rebuilding Life of<br/>Torture Survivors</ProjectLink>
              <ProjectLink exact to="/Rehabilitation-of-torture-survivors" activeClassName="active">Rehabilitation of torture survivors and prevention<br/> of custodial abuses  </ProjectLink>
              <ProjectLink exact to="/Legal-Aid-Network-for-Victims-of-Gender-Based-Violence" activeClassName="active">Legal Aid Network for<br/>Victims of Gender-Based Violence</ProjectLink>
              <ProjectLink exact to="/Mapping-of-Violence-against-Women-Initiatives-in-KPK" activeClassName="active">Mapping of Violence Against<br/>Women Initiatives in KPK, Pakistan</ProjectLink>
              <ProjectLink exact to="/Supporting-Female-Victims-of-Torture-and-Sexual-Violence" activeClassName="active">Supporting Female Victims of Torture<br/>and Sexual Violence (LA LUZ)</ProjectLink>
              <ProjectLink exact to="/Preventing-Torture-Against-Prisoners-in-Haripur_Mansehra" activeClassName="active">Preventing Torture Against<br/>Offenders/Prisoners in Haripur and<br/>Mansehra</ProjectLink>
              <ProjectLink exact to="/Access-of-Women-Children-to=LegalRights-Improved-in-Central-Prison-Haripur-KPK" activeClassName="active">Access of Women and Children to<br/>Legal Rights Improved in Central Prison<br/>Haripur, KPK</ProjectLink>
            </DropdownColumn>
          </DropdownMenu>
        </Li>
        <Li>
          <SubNavItem>Gallery</SubNavItem>
          <DropdownMenu>
            <DropdownColumn>
              <ProjectLink exact to="/Gallery" activeClassName="active">Images</ProjectLink>
            </DropdownColumn>
          </DropdownMenu>
        </Li>
        <Li>
          <SubNavItem>Resources</SubNavItem>
          <DropdownMenu>
            <DropdownColumn>
              <ProjectLink exact to="/Resources" activeClassName="active">Reports & Research</ProjectLink>
              <ProjectLink exact to="/Brochures-List" activeClassName="active">Brouchures</ProjectLink>
            </DropdownColumn>
          </DropdownMenu>
        </Li>
      </Ul>

      {/* Side Navigation for Smaller Screens */}
      <SideNav isOpen={isSideNavOpen}>
        <SideNavContent>
        <CollapsibleSection isOpen={openSections.aboutus}>
            <button onClick={() => toggleSection('aboutus')}>
              About us <FaBars />
            </button>
            <div>
              <ProjectLink exact to="/" onClick={toggleSideNav}>About Us<br/><br/></ProjectLink>
              <ProjectLink exact to="/OurTeam" onClick={toggleSideNav}>Our Team</ProjectLink>
            </div>
          </CollapsibleSection>

          {/* Collapsible Services Section */}
          <CollapsibleSection isOpen={openSections.services}>
            <button onClick={() => toggleSection('services')}>
              Services <FaBars />
            </button>
            <div>
              <ProjectLink exact to="/Services" onClick={toggleSideNav}>Rehabilitation Services</ProjectLink>
            </div>
          </CollapsibleSection>

          {/* Collapsible Projects Section */}
          <CollapsibleSection isOpen={openSections.projects}>
            <button onClick={() => toggleSection('projects')}>
              Projects <FaBars />
            </button>
            <div>
              <h2>On-going Projects<br/></h2>
              <ProjectLink exact to="/livelihoods-project" onClick={toggleSideNav}>Livelihoods Project</ProjectLink><br/><br/>
              <ProjectLink exact to="/Integration-of-MHPSS" onClick={toggleSideNav}>Integration of MHPSS & Livelihoods in LMICs</ProjectLink><br/>
              <h2>Completed Projects</h2>
              <ProjectLink exact to="/rehabilitaion-of-torture-victims-of-Hazara-Division">Rehabilitation of torture victims of<br/>Hazara Division</ProjectLink><br/><br/>
              <ProjectLink exact to="/Protecting-prison-population-from-falling-victim-to-Covid-19-in-Hazara-division" onClick={toggleSideNav}>Protecting prison population<br/>from falling victim to Covid-19<br/> in Hazara division</ProjectLink><br/><br/>
              <ProjectLink exact to="/Preventing-Detainees-from-Custodial-Abuses-and-Rebuilding-Life-of-Torture-Survivors"onClick={toggleSideNav}>Preventing Detainees from Custodial Abuses<br/>and Rebuilding Life of<br/>Torture Survivors</ProjectLink><br/><br/>
              <ProjectLink exact to="/Rehabilitation-of-torture-survivors" onClick={toggleSideNav}>Rehabilitation of torture survivors and prevention<br/> of custodial abuses  </ProjectLink><br/><br/>
              <ProjectLink exact to="/Legal-Aid-Network-for-Victims-of-Gender-Based-Violence" onClick={toggleSideNav}>Legal Aid Network for<br/>Victims of Gender-Based Violence</ProjectLink><br/><br/>
              <ProjectLink exact to="/Mapping-of-Violence-against-Women-Initiatives-in-KPK" onClick={toggleSideNav}>Mapping of Violence Against<br/>Women Initiatives in KPK, Pakistan</ProjectLink><br/><br/>
              <ProjectLink exact to="/Supporting-Female-Victims-of-Torture-and-Sexual-Violence" onClick={toggleSideNav}>Supporting Female Victims of Torture<br/>and Sexual Violence (LA LUZ)</ProjectLink><br/><br/>
              <ProjectLink exact to="/Preventing-Torture-Against-Prisoners-in-Haripur_Mansehra" onClick={toggleSideNav}>Preventing Torture Against<br/>Offenders/Prisoners in Haripur and<br/>Mansehra</ProjectLink><br/><br/>
              <ProjectLink exact to="/Access-of-Women-Children-to=LegalRights-Improved-in-Central-Prison-Haripur-KPK" onClick={toggleSideNav}>Access of Women and Children to<br/>Legal Rights Improved in Central Prison<br/>Haripur, KPK</ProjectLink><br/><br/>
            </div>
          </CollapsibleSection>

          {/* Collapsible Gallery Section */}
          <CollapsibleSection isOpen={openSections.gallery}>
            <button onClick={() => toggleSection('gallery')}>
              Gallery <FaBars />
            </button>
            <div>
              <ProjectLink exact to="/Gallery" onClick={toggleSideNav}>Images<br/><br/></ProjectLink>
              <ProjectLink exact to="/Resources" onClick={toggleSideNav}>Resources</ProjectLink>
            </div>
          </CollapsibleSection>

          {/* Static Links */}
          <ProjectLink exact to="/join-us" onClick={toggleSideNav}>Join Us</ProjectLink>
        </SideNavContent>
      </SideNav>
    </Nav>
  );
};

export default Header;
