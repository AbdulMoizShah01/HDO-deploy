import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Services from './components/Services/Services';
import JoinUs from './components/JoinUs';
import TeamMembersPage from './components/HomePage/about us/TeamMembersPage';
import LivelihoodsProject from './components/projects/ongoing/LivelihoodsProject';
import IntegrationOfMHPSS from './components/projects/ongoing/IntegrationOfMHPSS';
import RehabilitationHazaraDivision from './components/projects/completed/RehabilitationHazaraDivision';
import CovidProtectionProject from './components/projects/completed/CovidProtectionProject';
import PreventingDetaineesfromCustodialAbusesandRebuildingLifeofTortureSurvivors from './components/projects/completed/PreventingDetaineesfromCustodialAbusesandRebuildingLifeofTortureSurvivors';
import RehabilitationOfTortureSurvivors from './components/projects/completed/RehabilitationOfTortureSurvivors';
import LegalAidGBV from './components/projects/completed/LegalAidGBV';
import MappingViolenceKP from './components/projects/completed/MappingViolenceKP';
import LaLuz from './components/projects/completed/LaLuz';
import PrisonersofMansehra from './components/projects/completed/PrisonersofMansehra';
import AccessLegalRights from './components/projects/completed/AccessLeagalRights';
import GalleryPage from './components/Gallery/Gallery';
import ResourcesPage from './components/Resources/ResourcesPage';
import BrochureListPage from './components/Resources/BrochureListPage';
function App() {
  return (
    <Router basename="/HDO-deploy/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join-us" element={<JoinUs/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Gallery" element={<GalleryPage/>} />
        <Route path="/Resources" element={<ResourcesPage/>} />
        <Route path="/livelihoods-project" element={<LivelihoodsProject/>} />
        <Route path="/integration-of-MHPSS" element={<IntegrationOfMHPSS/>} />
        <Route path="/rehabilitaion-of-torture-victims-of-Hazara-Division" element={<RehabilitationHazaraDivision/>} />
        <Route path="/Protecting-prison-population-from-falling-victim-to-Covid-19-in-Hazara-division" element={<CovidProtectionProject/>} />
        <Route path="/Preventing-Detainees-from-Custodial-Abuses-and-Rebuilding-Life-of-Torture-Survivors" element={<PreventingDetaineesfromCustodialAbusesandRebuildingLifeofTortureSurvivors/>} />
        <Route path="/Rehabilitation-of-torture-survivors" element={<RehabilitationOfTortureSurvivors/>} />
        <Route path="/Legal-Aid-Network-for-Victims-of-Gender-Based-Violence" element={<LegalAidGBV/>} />
        <Route path="/Mapping-of-Violence-against-Women-Initiatives-in-KPK" element={<MappingViolenceKP/>} />
        <Route path="/Supporting-Female-Victims-of-Torture-and-Sexual-Violence" element={<LaLuz/>} />
        <Route path="/Preventing-Torture-Against-Prisoners-in-Haripur_Mansehra" element={<PrisonersofMansehra/>} />
        <Route path="/Access-of-Women-Children-to=LegalRights-Improved-in-Central-Prison-Haripur-KPK" element={<AccessLegalRights/>} />
        <Route path="/Brochures-List" element={<BrochureListPage/>} />
        <Route path="/OurTeam" element={<TeamMembersPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
