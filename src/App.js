import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import MainPage from "./MainPage";
import About from "./Common/About";
import Services from "./Common/Services";
import Portfolio from "./Common/Portfolio";
import Contact from "./Common/Contact";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
