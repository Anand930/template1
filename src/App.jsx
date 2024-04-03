import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImgSection from "./components/ImgSection"
import Details from "./components/Details";

function App() {
  return (
    <>
      <div className="App">
        <div className="App-components">
          <Navbar />
          <div className="below-nav">
          <HeroSection/>
          <ImgSection/>
          <Details/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
