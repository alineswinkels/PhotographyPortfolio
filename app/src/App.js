import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      {/* <AnimatePresence exitBeforeEnter> */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      {/* </AnimatePresence> */}
    </>
  );
}

export default App;
