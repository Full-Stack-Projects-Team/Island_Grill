
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/AboutUs/AboutUs"
import './App.css';
import Header from "./components/Header/Header";
import SpecialMenue from "./components/SpecialMenue/SpecialMenue";
import Intro from './components/Intro/Intro';
import Laurels from "./components/Laurels/Laurels";
import Gallery from "./components/Gallery/Gallery";
function App() {
  return (<>

  <Navbar/>
  <Header/>
  <AboutUs />
  <SpecialMenue/>

  <Intro/>
  <Laurels />
  <Gallery />
  

  </>



  );
}

export default App;
