import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import Actualites from './pages/Actualites.jsx';
import Albums from './pages/Albums.jsx';
import B2B from './pages/B2B.jsx';
import Conference from './pages/Conference.jsx';
import Contribution from './pages/Contribution.jsx';
import LoiReglement from './pages/LoiReglement.jsx';
import MotPresident from './pages/MotPresident.jsx';
import Seminaire from './pages/Seminaire.jsx';
import Startup from './pages/Startup.jsx';
import Demandes from './pages/Demandes.jsx';
import DevenirMembre from './pages/DevenirMembre.jsx';
import Organisation from './pages/Organisation.jsx';
import Article from './pages/Article.jsx';

export default function App() {
  const location = useLocation();

  // Gestion du scroll en haut ou vers un hash (ancre)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/b2b" element={<B2B />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/contribution" element={<Contribution />} />
          <Route path="/loi-reglement" element={<LoiReglement />} />
          <Route path="/mot-du-president" element={<MotPresident />} />
          <Route path="/seminaire" element={<Seminaire />} />
          <Route path="/startup" element={<Startup />} />
          <Route path="/demandes" element={<Demandes />} />
          <Route path="/devenir-membre" element={<DevenirMembre />} />
          <Route path="/organisation" element={<Organisation />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
