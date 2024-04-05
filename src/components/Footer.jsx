import React from "react";
import "./Footer.css";

const Footer = () =>{
    return(
        <div className="footer">
            <div className="nav">
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Speaking</li>
                    <li>Uses</li>
                </ul>
            </div>
            <div className="credits">
                <p>	&#169; 2024 Anand's Website. All rightd reserved</p>
            </div>
        </div>
    )
}

export default Footer;