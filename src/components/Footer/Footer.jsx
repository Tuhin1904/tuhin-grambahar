import React from 'react';
import './Footer.css';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

function Footer() {
  // <div className="footer-col-left">
  //         <div className="subscribe">SUBSCRIBE OUR NEWS LETTER</div>
  //         <div className="news-letter-container">

  //           <TextField
  //             id="outlined-basic"
  //             label="Enter your email id"
  //             variant="outlined"
  //           />

  //         </div>
  //         <div className='subscribe_btn'>SUBSCRIBE</div>
  //       </div>

  // col-right
  // <div className="footer-col">
  //         {/* <h2>SUPPORT</h2> */}
  //         {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5262.728702219301!2d88.55714025263082!3d23.171647625133893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8c582c590e577%3A0xbfde4f0f2b21f9c1!2sTRENDS!5e0!3m2!1sen!2sin!4v1698436107062!5m2!1sen!2sin" width="350" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
  //       </div>

  return (
    <div className="footer">
      <div className="footer-container">
        {/* <div className="footer-col-right"> */}
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
            <Link to="/privacy-policy">
              <li>Privacy Policy</li>
            </Link>
            <Link to="/refund-policy">
              <li>Refund Policy</li>
            </Link>
            <Link to="/shipping-policy">
              <li>Shipping Policy</li>
            </Link>
            <Link to="/cookie-policy">
              <li>Cookie Policy</li>
            </Link>
            <Link to="/terms-of-services">
              <li>Terms of Services</li>
            </Link>
          </ol>
        </div>
        <div className="footer-col">
          <h2>CONTACT DETAILS</h2>
          <ol className="footer-list">
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
          </ol>
        </div>

        {/* </div> */}
      </div>
      <div className="copyright">Designed and Developed by Zoto Webservices</div>
    </div>
  );
}

export default Footer;
