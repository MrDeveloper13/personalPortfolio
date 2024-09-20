import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/footer_logo.svg";
import userIcon from "../../assets/user_icon.svg";


const Footer = () => {
    return (
        <>
          <div className="footer">
             <hr />

                <div className="footer-bottom" style={{ marginBottom: "1rem"}}>
                <p className="footer-bottom-left">@ 2024 Murtaza Zaman. All rights reserved.</p>
               
             </div>
          </div>
        </>
    )
}

export default Footer