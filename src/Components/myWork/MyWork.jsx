import React from "react";
import "./MyWork.css";
import themePattern from "../../assets/theme_pattern.svg";
import myWork_data from "../../assets/mywork_data";
import arrowIcon from "../../assets/arrow_icon.svg";

const myWork = () => {
    return (
        <>
          <div id="work" className="myWork">
            <div className="myWork-title">
                <h1>My latest work</h1>
                <img src={themePattern} alt="themePattern" />
            </div>
            <div className="myWork-container">
                {myWork_data.map((work, index) => {
                    return <img key={index} src={work.w_img}/>
                })}
            </div>
            <div className="myWork-showmore">
                <p>Show More</p>
                <img src={arrowIcon} alt="" />
            </div>
          </div>
        </>
    )
}
export default myWork