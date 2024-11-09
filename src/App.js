// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav'; // Global Nav component (only for the main page)
import About from './Components/About';
import TeamMembers from './Components/TeamMembers';
import ArticleComponent from './Components/ArticleComponent'; // Custom article page
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import Fat from './Components/Fat';

const App = () => {
  const [nav, setNav] = useState(false);

  // Add scroll listener to change nav state
  window.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop;
    setNav(scroll > 405);
  });

  return (
    <Router>
      <div className='App'>
        {/* Render the global Nav only on the main page */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav nav={nav} /> {/* Global Nav */}
                <HeroSection />
                <About />
                <Fat />
                <TeamMembers />
              </>
            }
          />
          {/* Render the Article Component without Nav */}
          <Route path="/article" element={<ArticleComponent />} /> 
        </Routes>

        {/* Footer (renders on all pages) */}
        <Footer nav={nav} />
      </div>
    </Router>
  );
};

export default App;
