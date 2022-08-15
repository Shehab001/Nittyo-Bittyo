import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";

const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          {/* -------------------------------------------------------- */}
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1660312036/US/profile_prev_ui_ije6bt.png"
              alt="Founder"
            />
            <Typography>
              <h1>Md. Shehab Chowdhury</h1>
            </Typography>

            <div className="flx">
              <span className="icon">
                <a href="https://www.facebook.com/m.s.c.00000/">
                  <img
                    src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1660320311/avatars/icons8-facebook-144_mf2lxw.png"
                    alt="Facebook"
                  ></img>
                </a>
              </span>
              <span className="icon">
                <a href="Http://api.whatsapp.com/send?phone=+8801790199194&text=Welcometomywhatsapp">
                  <img
                    src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1660320100/avatars/icons8-whatsapp-144_hg77xb.png"
                    alt="Whatsapp"
                  ></img>
                </a>
              </span>
              <span className="icon">
                <a href="https://www.linkedin.com/in/md-shehab-chowdhury-179a27230/">
                  <img
                    src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1660320100/avatars/icons8-linkedin-144_sw3jes.png"
                    alt="linkedin"
                  ></img>
                </a>
              </span>
            </div>
          </div>
          {/* ---------------------------------------------- */}
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1660334127/avatars/29695018_1824368471198638_6609610735428014082_n-removebg-preview_khhjqj.png"
              alt="Founder"
            />
            <Typography>
              <h1>Rasheddujjaman</h1>
            </Typography>

            <div className="flx">
              <span className="icon">
                <a href="https://www.facebook.com/CseRashedrion">
                  <img
                    src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1660320311/avatars/icons8-facebook-144_mf2lxw.png"
                    alt="Facebook"
                  ></img>
                </a>
              </span>
              <span className="icon">
                <a href="*">
                  <img
                    src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1660320100/avatars/icons8-whatsapp-144_hg77xb.png"
                    alt="whatsapp"
                  ></img>
                </a>
              </span>
              <span className="icon">
                <a href="https://www.linkedin.com/in/rashedujjaman-rion/">
                  <img
                    src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1660320100/avatars/icons8-linkedin-144_sw3jes.png"
                    alt="linkedin"
                  ></img>
                </a>
              </span>
            </div>
          </div>

          {/* --------------------------------------------------------- */}
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1660334379/avatars/1660320761098-removebg-preview_wcpw2o.png"
              alt="Founder"
            />
            <Typography>
              <h1>Mehedi Hasan Jihad</h1>
            </Typography>

            <div className="flx">
              <span className="icon">
                <a href="https://www.facebook.com/mehedihasan.jihad.90">
                  <img
                    src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1660320311/avatars/icons8-facebook-144_mf2lxw.png"
                    alt="Facebook"
                  ></img>
                </a>
              </span>
              <span className="icon">
                <a href="*">
                  <img
                    src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1660320100/avatars/icons8-whatsapp-144_hg77xb.png"
                    alt="Whatsapp"
                  ></img>
                </a>
              </span>
              <span className="icon">
                <a href="https://www.linkedin.com/in/mehedi-hasan-jihad-b633a4182">
                  <img
                    src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1660320100/avatars/icons8-linkedin-144_sw3jes.png"
                    alt="linkedin"
                  ></img>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
