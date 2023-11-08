import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import {FaFacebook,FaInstagram,FaEnvelope,FaTwitter} from 'react-icons/fa'
import TextField  from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Footer({ pb = '' }) {
  const inputProps = {
    borderRadius: '25px',
  };
  return (
    <div className={`pt-6 bg-white2 ${pb}`}>
      <div className="container grid grid-cols-1 px-4 pb-10 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-x-12 gap-y-10">
        <div className='leftfooter'>
        <img class="logo" src="grambahar_logo.ico" alt="grambahar-logo"/>
        <div className="officeBranch">
          <p><b>Our Store:</b>34/9, Pandit Kalimoy Ghatak Lane, Ranaghat, Nadia, West Bengal, 741201, India.</p>
        </div>
        <div className="subscribeLetter">
        <h4><b>Subscribe to our newsletter</b></h4>
       <div className="inputButton" style={{display:'flex'}}>
        <TextField className='textField'
        style={{width:'90%'}}
            label="Email"
            id="user-name"
            placeholder="Enter your mail id"
            variant="outlined"
            inputProps={inputProps}
            />
            <Button variant="contained" style={{width:'10%',height:'2rem'}} endIcon={<SendIcon />}>
</Button>
</div>
        </div>
        <p></p>
        </div>
        <div className="rightfooter">
        <div className="footer-col">
          <p className="mb-1 text-lg font-bold text-primary">SERVICES</p>
          <ol className="footer-list">
            <Link><li className="mb-1 duration-300 ease-in-out hover:text-primary">Profile</li></Link>
            <Link><li className="mb-1 duration-300 ease-in-out hover:text-primary">Track Your Order</li></Link>
            <Link to='/contact-us'><li className="mb-1 duration-300 ease-in-out hover:text-primary">Contact Us</li></Link>
            
          </ol>
        </div>
        <div className="footer-col">
          <p className="mb-1 text-lg font-bold text-primary">OUR POLICIES</p>
          <ol className="footer-list">
            <Link to="/privacy-policy" className="duration-300 ease-in-out hover:text-primary">
              <li className="mb-1">Privacy Policy</li>
            </Link>
            <Link to="/refund-policy" className="duration-300 ease-in-out hover:text-primary">
              <li className="mb-1">Refund Policy</li>
            </Link>
            <Link to="/shipping-policy" className="duration-300 ease-in-out hover:text-primary">
              <li className="mb-1">Shipping Policy</li>
            </Link>
            <Link to="/cookie-policy" className="duration-300 ease-in-out hover:text-primary">
              <li className="mb-1">Cookie Policy</li>
            </Link>
            <Link to="/terms-of-services" className="duration-300 ease-in-out hover:text-primary">
              <li className="mb-1">Terms of Services</li>
            </Link>
          </ol>
          </div>
        <div className="footer-col">
          <p className="mb-1 text-lg font-bold text-primary">CONTACT DETAILS</p>
          <Link to="/contact-us">
            <button className="contactButton">Contact Us</button>
          </Link>
          <ol className="footer-list" style={{display:'flex',marginTop:'1rem',justifyContent:'space-evenly'}}>
            <Link to='facebook.com'><li className="mb-1"><FaFacebook size={20}/></li></Link>
            <Link to='twitter.com'><li className="mb-1"><FaTwitter size={20}/></li></Link>
            <Link to='gmail.com'><li className="mb-1"><FaEnvelope size={20}/></li></Link>
            <Link to='instagram.com'><li className="mb-1"><FaInstagram size={20}/></li></Link>
          </ol>
        </div>

        </div>
      </div>
      
    
    <div className="py-1.5 text-sm text-center text-white bg-primary">
      Designed and Developed by Zoto Webservices
      </div></div>
  );
}

export default Footer;
