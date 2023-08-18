import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LanguageProvider } from './Languages/LanguageContext';
import Navbar from './Components/GlobalComponents/Navbar/Navbar';
import Footer from "./Components/GlobalComponents/Footer/Footer";
import Home from "./Pages/Home/Home";
import MenuPage from './Pages/Menu/MenuPage';
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/menu" element={<MenuPage />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
