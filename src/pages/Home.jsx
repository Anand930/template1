import React from "react";
import "./home.css";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ImgSection from "../components/ImgSection";
import Details from "../components/Details";
import Footer from "../components/Footer";

export default function Home(){
    return(
        <div className="Home">
        <div className="Home-components">
          <Navbar />
          <div className="below-nav">
          <HeroSection/>
          <ImgSection/>
          <Details/>
          </div>
          <Footer/>
        </div>
      </div>
    )
}
