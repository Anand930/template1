import React from "react";
import "./Details.css";
import mail from "../assets/email-icon.png";
import work from '../assets/work-icon.png'
import facebook from "../assets/facebook.svg"
import planeteria from "../assets/planeteria.svg"
import starbucks from "../assets/starbucks.svg"
import airbnb from "../assets/airbnb.svg"

const Details = () => {
  return (
    <div className="details">
      <div className="left">
        <div className="container">
          <p className="date"> September 5, 2022</p>
          <p className="heading">
            Crafting a design system for a multiplanetary future
          </p>
          <p className="content">
            Most companies try to stay ahead of the curve when it comes to
            visual design, but for Planetaria we needed to create a brand that
            would still inspire us 100 years from now when humanity has spread
            across our entire solar system.
          </p>
          <p className="link">Read article &#x3E;</p>
        </div>
        <div className="container">
          <p className="date"> September 5, 2022</p>
          <p className="heading">
            Crafting a design system for a multiplanetary future
          </p>
          <p className="content">
            Most companies try to stay ahead of the curve when it comes to
            visual design, but for Planetaria we needed to create a brand that
            would still inspire us 100 years from now when humanity has spread
            across our entire solar system.
          </p>
          <p className="link">Read article &#x3E;</p>
        </div>
        <div className="container">
          <p className="date"> September 5, 2022</p>
          <p className="heading">
            Crafting a design system for a multiplanetary future
          </p>
          <p className="content">
            Most companies try to stay ahead of the curve when it comes to
            visual design, but for Planetaria we needed to create a brand that
            would still inspire us 100 years from now when humanity has spread
            across our entire solar system.
          </p>
          <p className="link">Read article &#x3E;</p>
        </div>
      </div>
      <div className="right">
        <div className="first-container">
          <div className="first-container-parent">
            <div className="image">
              <img className="detail-img" src={mail} width={"20px"} height={"20px"} alt="email" />
            </div>
            <div>
              <p className="first-container-heading heading">Stay up to date</p>
            </div>
          </div>
          <p className="first-container-content content">
            Get notified when I publish something new, and unsubscribe at any
            time.
          </p>
          <div className="first-container-second-section content">
            <input className="first-container-input" placeholder="Email Address" type="text" />
            <button>Join</button>
          </div>
        </div>
        <div className="second-container">
          <div className="second-container-img">
            <img src={work} length={"25px"} width={"25px"} alt="" />
            <p>Work</p>
          </div>
          <div className="experience-container">
            <div className="planeria-container img-child-container">
              <img src={planeteria} alt="planeteria" className="planeteria" />
              <div className="img-right-container">
              <div className="heading">
                <p>Planeria</p>
              </div>
              
              <div className="designation">
                CEO
                <div className="duration">
                  2019 - Present
                </div>
              </div>
              </div>
            </div>
            <div className="airbnb-container img-child-container">
              <img src={airbnb} alt="airbnb" className="airbnb" />
              <div className="img-right-container">
              <div className="heading">
                <p>Airbnb</p>
              </div>
              <div className="designation">
                CEO
                <div className="duration">
                  2019 - Present
                </div>
              </div>
              </div>
            </div>
            <div className="facebook-container img-child-container">
              <img src={facebook} alt="facebook" className="facebook" />
              <div className="img-right-container">
              <div className="heading">
                <p>facebook</p>
              </div>
              <div className="designation">
                
              <div className="duration">
                  2019 - Present
                </div>
              </div>
              </div>

            </div>
            <div className="starbucks-container img-child-container heading">
              <img src={starbucks} alt="starbucks" className="starbucks" />
              <div className="img-right-container">
                <div className="heading">
                  <p>StarBucks</p>
                </div>
                <div className="designation">
                  CEO
                  <div className="duration">
                  2019 - Present
                </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
