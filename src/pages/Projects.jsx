import React from "react";
import './Projects.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import animaginary from '../assets/projects/animaginary.svg';
import cosmos from '../assets/projects/cosmos.svg';
import planeteria from '../assets/planeteria.svg';
import helio from '../assets/projects/helio-stream.svg';
import openshuttle from '../assets/projects/open-shuttle.svg';
import link from '../assets/projects/link.png';
import linkBlue from '../assets/projects/link-blue.png'


const Projects = () =>{
    return(
        <div className="App projects">
            <div className="App-components project-components">
                <Navbar/>
                <div className="articles-main projects-main">
                        <p className="articles-main-p main-p projects-main-p">
                        Things I’ve made trying to put my dent in the universe.
                        </p>
                        <p className="articles-child-p projects-child-p">
                        I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
                        </p>
                    </div>
                <div className="grid-container">
                    <div className="grid-elements">
                        <div className="element">
                            <div className="projects-img">
                                <img src={planeteria} alt="planeteria" />
                            </div>
                            <div className="projects-title">Planeteria</div>
                            <div className="projects-discription">Creating technology to empower civilians to explore space t their own terms.</div>
                            <div className="projects-link"> <img className="project-link-img" src={link} alt="" /><p className="project-link-text">github.com</p>    </div>
                            
                        </div>
                        <div className="element">
                            <div className="projects-img">
                                <img src={animaginary} alt="animaginary" />
                            </div>
                            <div className="projects-title">Animazinary</div>
                            <div className="projects-discription">High performance web animation library, hand written in optimized WASM</div>
                            <div className="projects-link"><img className="project-link-img" src={link} alt="" /><p className="project-link-text">github.com</p></div>
                            
                        </div>
                        <div className="element">
                            <div className="projects-img">
                                <img src={cosmos} alt="cosmos" />
                            </div>
                            <div className="projects-title">Cosmos</div>
                            <div className="projects-discription">The operating system that powers our planeteria space shuttles</div>
                            <div className="projects-link"><img className="project-link-img" src={link} alt="" /><p className="project-link-text">github.com</p></div>
                            
                        </div>
                        <div className="element">
                            <div className="projects-img">
                                <img src={helio} alt="helio" />
                            </div>
                            <div className="projects-title">HelioStream</div>
                            <div className="projects-discription">Real-time video streaming library, optimized for intersteller transmission</div>
                            <div className="projects-link"><img className="project-link-img" src={link} alt="" /><p className="project-link-text">github.com</p></div>
                            
                        </div>
                        <div className="element">
                            <div className="projects-img">
                                <img src={openshuttle} alt="openshuttle" />
                            </div>
                            <div className="projects-title">Open Shuttle</div>
                            <div className="projects-discription">The schematics for the first rocket I designed that successfully made it to orbit</div>
                            <div className="projects-link"><img className="project-link-img" src={link} alt="link" /><p className="project-link-text">github.com</p></div>
                            
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Projects;