import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-col-left">
          <div className="subscribe">SUBSCRIBE OUR NEWS LETTER</div>
          <div className="news-letter-container">
            <div className="news-letter" />
            <div className="news-letter-submit">
              <i className="fa-solid fa-arrow-right-from-bracket fa-news-letter" />
            </div>
          </div>
        </div>
        <div className="footer-col-right">
          <div className="footer-col">
            <h2>SERVICES</h2>
            <ol className="footer-list">
              <li>Shop</li>
              <li>Track Order</li>
              <li>Profile</li>
              <li>Refer</li>
            </ol>
          </div>
          <div className="footer-col">
            <h2>OUR POLICIES</h2>
            <ol className="footer-list">
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
            </ol>
          </div>
          <div className="footer-col">
            <h2>SUPPORT</h2>
            <div className="support">Contact US</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
