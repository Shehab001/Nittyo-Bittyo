import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        {/* <p>Download App for Android and IOS mobile phone</p> */}
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>NittyoBrittyo</h1>
        <p>Quality is our first priority</p>

        <p> &copy; Md. Shehab Chowdhury</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.linkedin.com/in/md-shehab-chowdhury-179a27230/">
          LinkedIn
        </a>
        <a href="https://msng.link/o/?msc00000=tg">Telegram</a>
        <a href="https://www.facebook.com/m.s.c.00000/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
