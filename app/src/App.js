import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Work from './Components/Work';
import Contact from './Components/Contact';

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      {/* <AnimatePresence exitBeforeEnter> */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      {/* </AnimatePresence> */}
    </>
  );
}

export default App;
