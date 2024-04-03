import React from "react";
import "./ImgSection.css";
import img1 from "../assets/image-1.jpg";
import img2 from "../assets/image-2.jpg";
import img3 from "../assets/image-3.jpg";
import img4 from "../assets/image-4.jpg";
import img5 from "../assets/image-5.jpg";

const ImgSection = () => {
  return (
    <div className="imgSection">
      <div className="img-parent">
        <img src={img1} className="img1" width={"290px"} height={"330px"} alt="img1" />
        <img src={img2} className="img2" width={"290px"} height={"330px"} alt="img2" />
        <img src={img3} className="img3" width={"290px"} height={"330px"} alt="img3" />
        <img src={img4} className="img4" width={"290px"} height={"330px"} alt="img4" />
        <img src={img5} className="img5" width={"290px"} height={"330px"} alt="img5" />
      </div>
    </div>
  );
};

export default ImgSection;
