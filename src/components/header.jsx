import React, { useState } from "react";
import logo from "../img/SereneSys.png";
import mohitImg from "../img/mohit-profile-pic.png";
import nikhilImg from "../img/nikhil-profile-pic.webp";

export const Header = () => {
  const [txt, setTxt] = useState({
    nik: "A dedicated mobile application developer and co-founder of SereneSys. Currently in my final year, I am enthusiastic about bridging theoretical knowledge with practical applications. Focused on creating seamless mobile experiences, I am driven by innovation and a relentless pursuit of learning. Join me on this exciting journey through the",
    moh: "As a co-founder of SereneSys, a dynamic software service company, I am a final-year BCA student deeply passionate about both management and software development. Committed to continuous learning, I navigate the intricate intersection of academia and entrepreneurship. In the nascent stages of our startup journey, we embrace the challenges with resilience, leveraging every experience to propel SereneSys towards innovation and success.",
  });
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 " style={{ paddingTop: "220px", paddingBottom: "200px", textAlign: "center" }}>
                <span style={{ justifyContent: "center", display: "flex" }}>
                  <img src={logo} width="400px" alt="" />
                </span>
                <h1 style={{ marginTop: "100px" }}>
                  SereneSys
                  <span></span>
                </h1>
                <p>Tech Harmony, Client Bliss</p>
                <a href="#features" className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: "40px" }}>
        <h2 style={{ display: "flex", justifyContent: "center" }}>Meet the Co-Founders</h2>
        <div style={{ marginLeft: "250px", marginRight: "250px", marginTop: "70px", marginBottom: "100px" }}>
          <div className="row">
            <div className="col-md-6" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={mohitImg} style={{ width: "300px", borderRadius: "50%" }} alt="Mohit Pipaliya" />
              <p style={{ fontSize: "30px", marginTop: "20px" }}>Mohit Pipaliya</p>
              <p style={{ marginTop: "7px" }} className="text-center ">
                "{txt.moh}"
              </p>
            </div>
            <div className="col-md-6" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={nikhilImg} style={{ width: "300px", borderRadius: "50%" }} alt="Nikhil Khambhayta" />
              <p style={{ fontSize: "30px", marginTop: "20px" }}>Nikhil Khambhayta</p>
              <p style={{ marginTop: "7px" }} className="text-center ">
                "{txt.nik}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
