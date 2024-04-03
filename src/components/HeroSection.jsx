import React from "react";
import avatar from "../assets/avatar.jpg";
import "./HeroSection.css";
import Linkedin from '../assets/linkedin.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'
import Github from '../assets/github-sign.png'


const HeroSection = () => {
  return (
    <div className="main-div">
      <img className="avatar" src={avatar} height="64px" alt="avtar-image" />
      <p className="main-p">
        Software designer, founder, <br />
        and amateur astronaut.
      </p>
      <p className="child-p">
        I’m Spencer, a software designer and entrepreneur based in New York
        City. I’m the founder and <br /> CEO of Planetaria, where we develop
        technologies that empower regular people to explore <br />
        space on their own terms.
      </p>
      <div className="logo">
        <img className="hero-img" src={Twitter}  width={"20px"} height={"20px"} alt="twitter" />
        <img className="hero-img" src={Instagram} width={"20px"} height={"20px"} alt="instagram" />
        <img className="hero-img" src={Linkedin} width={"20px"} height={"20px"}alt="linkedIn" />
        <img className="hero-img" src={Github} width={"20px"} height={"20px"}alt="Github" />
      </div>
    </div>
  );
};

export default HeroSection;
