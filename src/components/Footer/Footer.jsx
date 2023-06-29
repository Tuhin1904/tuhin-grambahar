import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <div className="subscribe">SUBSCRIBE OUR NEWS LETTER</div>
          <div className="news-letter-container">
            <div className="news-letter"></div>
            <div className="news-letter-submit"><i class="fa-solid fa-arrow-right-from-bracket fa-news-letter"></i></div>
          </div>
        </div>
        <div className="footer-col"></div>
        <div className="footer-col"></div>
      </div>
    </div>
  );
};

export default Footer;
