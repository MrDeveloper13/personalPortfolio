import React from "react";
import './Hero.css';
import profile_img from "../../assets/profile_img.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
    return (
      <>
        <div className="hero">
          <div className="img_container">
            <img src={profile_img} alt="profile" id="hero" />
          </div>

          <h1>
            {" "}
            <span>I'm Murtaza Zaman</span>, Frontend Developer in Pakistan.
          </h1>
          <p>
            I specialize in crafting not just websites, but immersive
            experiences that leave a lasting impact. Let's turn your ideas into
            stunning realities that resonate with users and elevate your brand!
          </p>
          <div className="hero-action">
            
              <AnchorLink
                className="anchor-link hero-connect"
                href="#contact"
                style={{ color: "white", textDecoration: "none" }}
              >
                Connect With Me
              </AnchorLink>
            
            <div className="hero-resume">My Resume</div>
          </div>
        </div>
      </>
    );
}
export default Hero