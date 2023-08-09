import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from "./Pages/Home/Home";
import MenuPage from './Pages/Menu/MenuPage';
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} /> 
       <Route path="/menu" element={<MenuPage />} /> 
       <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
