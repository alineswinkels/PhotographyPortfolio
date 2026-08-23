import './App.scss';
import React from 'react';
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useActiveSection } from "./hooks/useActiveSection";

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Project from './Components/Project';


function App() {
  const activeSection = useActiveSection();
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;

      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth"
        });

        // state weer verwijderen zodat hij niet blijft hangen
        navigate("/", {
          replace: true,
          state: {}
        });
      }, 100);
    }
  }, [location, navigate]);


  return (
    <>
      <NavBar activeSection={activeSection} />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <section id="home" className="section">
                <Home />
              </section>

              <section id="work" className="section">
                <Work />
              </section>

              <section id="about" className="section">
                <About />
              </section>

              <section id="contact" className="section">
                <Contact />
              </section>

              
            </>
          }
        />

        <Route path="/work/:slug" element={<Project />} />

      </Routes>
      <section>
      <div className="footer">
        <NavBar activeSection={activeSection} />
      </div>
                {/* <Footer /> */}
              </section>
    </>
  );
}

export default App;
