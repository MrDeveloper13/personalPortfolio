import React from "react";
import "./Contact.css";
import themePattern from "../../assets/theme_pattern.svg";
import mailIcon from "../../assets/mail_icon.svg";
import locationIcon from "../../assets/location_icon.svg";
import callIcon from "../../assets/call_icon.svg";




const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "7c605ae1-f748-4626-bcfb-7a2735a4b493");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert(res.message)
        }
    }

    return (
      <>
        <div id="contact" className="contact">
          <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={themePattern} alt="themePattern" />
          </div>
          <div className="contact-section">
            <div className="contact-left">
              <h1>Let's talk</h1>
              <p>
                Imagine a world where every interaction is seamless, every
                design captivates the eye, every application shares a story,
                every user feels truly valued, and everything is wonderfully
                easy to use.
              </p>
              <div className="contact-details">
                <div className="contact-detail">
                  <img src={mailIcon} alt="" />
                  <p>murtaza.zaman11@gmail.com</p>
                </div>
                <div className="contact-detail">
                  <img src={callIcon} alt="" />
                  <p>+923369406373</p>
                </div>
                <div className="contact-detail">
                  <img src={locationIcon} alt="" />
                  <p>Pakistan, Peshawar</p>
                </div>
              </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
              <label htmlFor="">Your name</label>
              <input type="text" placeholder="Enter your name" name="name" />

              <label htmlFor="">Your Email</label>
              <input type="text" placeholder="Enter your email" name="email" />

              <label htmlFor="">Write your message here</label>
              <textarea
                name="message"
                id=""
                rows="8"
                placeholder="Enter your message"
              ></textarea>
              <button type="submit" className="contact-submit">
                Submit now
              </button>
            </form>
          </div>
        </div>
      </>
    );
}
export default Contact;