import React from "react";
import './about.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutimg from '../assets/about.jpg'
import twitterImg from '../assets/twitter.png'
import instagramImg from '../assets/instagram.png'
import linkedinImg from '../assets/linkedin.png'
import emailImg from '../assets/email-icon.png'

const About = () => {
    return (
        <div className="About App">
            <div className="about-component App-components">
                <Navbar />
                <div className="about-container">
                <div className="social-link-container-for-md">
                         <div className=" about-social-links-md">
                            <div className="about-social-links-container"><img src={twitterImg} alt="twitterImg" />
                                <p>Follow on X</p></div>
                            <div className="about-social-links-container"><img src={instagramImg} alt="instagramImg" />
                                <p>Follow on Instagram</p></div>
                            <div className="about-social-links-container"><img src={linkedinImg} alt="linkedinImg" />
                                <p>Follow on LinkedIN</p></div>
                            <div className="about-social-links-container"><img src={linkedinImg} alt="githubImg" />
                                <p>Follow on GitHub</p></div>
                        </div>
                        <div className="about-email-link-md">
                            <div className="email-icon">
                                <img src={emailImg} alt="email-image"/>
                                <p>spencer@planetaria.tech</p>
                            </div>
                        </div>
                    
                    </div>
                    <div className="about-left">
                        <p className="about-parent-p main-p">
                            I’m Spencer Sharp. I live in New York City, where I design the future.
                        </p>
                        <p className="about-child-p">I’ve loved making things
                            for as long as I can remember, and wrote my first program when I
                            was 6 years old, just two weeks after my mom brought home the
                            brand new Macintosh LC 550 that I taught myself to type on.</p>
                        <p className="about-child-p">The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough that with just a bit of momentum I’d be able to get to orbit.</p>
                        <p className="about-child-p">I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry into orbit and was able to transmit a photo back down to our family computer from space.</p>
                        <p className="about-child-p">I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry into orbit and was able to transmit a photo back down to our family computer from space.</p>
                    </div>
                    <div className="about-right">
                        <div className="about-img">
                            <img src={aboutimg} alt="about-img" />
                        </div>
                        <div className="about-social-links">
                            <div className="about-social-links-container"><img src={twitterImg} alt="twitterImg" />
                                <p>Follow on X</p></div>
                            <div className="about-social-links-container"><img src={instagramImg} alt="instagramImg" />
                                <p>Follow on Instagram</p></div>
                            <div className="about-social-links-container"><img src={linkedinImg} alt="linkedinImg" />
                                <p>Follow on LinkedIN</p></div>
                            <div className="about-social-links-container"><img src={linkedinImg} alt="githubImg" />
                                <p>Follow on GitHub</p></div>
                        </div>
                        <div className="about-email-link">
                            <div className="email-icon">
                                <img src={emailImg} alt="email-image"/>
                                <p>spencer@planetaria.tech</p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default About;