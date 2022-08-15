import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="ms-unistore-email:shehab5-11396@diu.edu.bd">
        <button>shehab15-11396@diu.edu.bd</button>
        <br />
        <a
          className="mailBtn"
          href="ms-unistore-email:rashedujjaman15-11024@diu.edu.bd"
        >
          <button>rashedujjaman15-11024</button>
        </a>
        <br />
        <a
          className="mailBtn"
          href="ms-unistore-email:mehedi15-11355@diu.edu.bd"
        >
          <button>mehedi15-11355@diu.edu.bd</button>
          <br />
        </a>
      </a>
    </div>
  );
};

export default Contact;
