import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Home from './Home';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from './About';




function App() {
  return (
    <>

      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
         

        </Routes>
        
      </BrowserRouter>
      <Main />
      
      <Footer />
    </>
  );
};

export default App;