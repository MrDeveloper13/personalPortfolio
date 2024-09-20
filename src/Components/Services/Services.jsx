import React from "react";
import "./Services.css";
import themePattern from "../../assets/theme_pattern.svg";
import servicesData from "../../assets/services_data";
import arrowIcon from "../../assets/arrow_icon.svg";

const Services = () => {
    return (
        <>
          <div id="services" className="services">
            <div className="services-title">
                <h1>My Services</h1>
                <img src={themePattern} alt="" />
            </div>
            <div className="services-container">
                {servicesData.map((services, index) => {
                    return <div key={index} className="servicesFormat">
                             <h3>{services.s_no}</h3>
                             <h2>{services.s_name}</h2>
                            <p>{services.s_desc}</p>
                            <div className="services-readmore">
                              <p className="readmore">Read More</p>
                              <img src={arrowIcon} alt="" />
                            </div>
                    </div>
                })}
            </div>
          </div>
        </>
    )
}

export default Services