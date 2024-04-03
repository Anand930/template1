import React from "react";
import "./Details.css";
import mail from "../assets/email-icon.png";

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
      </div>
    </div>
  );
};

export default Details;
