import React from "react";
import "./About.css";
import themePattern from "../../assets/theme_pattern.svg";
import about from "../../assets/about.jpg";


const About = () => {
    return (
      <>
        <div id="about" className="about">
          <div className="about-title">
            <h1>About me</h1>
            <img src={themePattern} alt="theme_pattern" />
          </div>
          <div className="about-sections">
            <div className="about-left">
              <img src={about} alt="" className="My_img" />
            </div>
            <div className="about-right">
              <div className="about-para">
                <p>
                  I am a experienced Frontend Developer with over a decade of
                  profile expertise in the field. Thoughout my career. I had the
                  privilage of collaborating with prestigious organizations,
                  contributing to their success and growth
                </p>
                <p>
                  As a Frontend Developer, I enjoy combining beauty and function
                  to create web applications that attract and hold people's
                  attention. I have a strong passion for new ideas and a
                  commitment to doing great work.
                </p>
              </div>
              <div className="about-skills">
                <div className="about-skill">
                  <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
                </div>
                <div className="about-skill">
                  <p>React JS</p> <hr style={{ width: "70%" }} />
                </div>
                <div className="about-skill">
                  <p>JavaScript</p> <hr style={{ width: "60%" }} />
                </div>
                <div className="about-skill">
                  <p>Next JS</p> <hr style={{ width: "50%" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="about-achievements">
            <div className="about-achievement">
              <h1>10+</h1>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>90+</h1>
              <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>15+</h1>
              <p>PHAPPY CLIENTS</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default About;