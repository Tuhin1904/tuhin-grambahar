import React from 'react';
import { Link } from 'react-router-dom';

function Footer({ pb = '' }) {
  return (
    <div className={`pt-6 bg-white2 ${pb}`}>
      <div className="container grid grid-cols-1 px-4 pb-10 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-10">
        <div></div>
        <div className="footer-col">
          <p className="mb-1 text-lg font-bold text-primary">SERVICES</p>
          <ol className="footer-list">
            <li className="mb-1">Shop</li>
            <li className="mb-1">Track Order</li>
            <li className="mb-1">Profile</li>
            <li className="mb-1">Refer</li>
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
          <ol className="footer-list">
            <li className="mb-1">Privacy Policy</li>
            <li className="mb-1">Refund Policy</li>
          </ol>
        </div>

        {/* </div> */}
      </div>
      <div className="py-1.5 text-sm text-center text-white bg-primary">Designed and Developed by Zoto Webservices</div>
    </div>
  );
}

export default Footer;
