import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import MainPage from "./MainPage";
import About from "./Common/About";
import Services from "./Common/Services";
import Portfolio from "./Common/Portfolio";

function App() {
  return (
    <>
      <Header />
      {/* <MainPage /> */}
      {/* <About />       */}
      {/* <Services /> */}
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
