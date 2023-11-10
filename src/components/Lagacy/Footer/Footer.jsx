import React from 'react';
import { FaFacebook, FaInstagram, FaEnvelope, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

function Footer({ pb = '' }) {
  return (
    <div className={`pt-6 bg-white2 ${pb} `}>
      <div className="container grid grid-cols-1 px-4 pb-10 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-10">
        <div className="leftfooter">
          <Link href="/">
            <img src="/grambahar_logo.ico" alt="Grambahar Logo" className="w-30" height="30px" width="100px" />
          </Link>
          <div className="officeBranch">
            <p>
              <b>Our Store:</b> Ranaghat, Nadia, WB, IN.
            </p>
          </div>

          <p />
        </div>

        <div className="footer-col">
          <p className="mb-1 text-lg font-bold text-primary">SERVICES</p>
          <ol className="footer-list">
            <Link href="#">
              <li className="mb-1 duration-300 ease-in-out hover:text-primary">Profile</li>
            </Link>
            <Link href="#">
              <li className="mb-1 duration-300 ease-in-out hover:text-primary">Track Your Order</li>
            </Link>
            <Link href="/about-us">
              <li className="mb-1 duration-300 ease-in-out hover:text-primary">About Us</li>
            </Link>
            <Link href="/contact-us">
              <li className="mb-1 duration-300 ease-in-out hover:text-primary">Contact Us</li>
            </Link>
          </ol>
        </div>
        <div className="footer-col">
          <p className="mb-1 text-lg font-bold text-primary">OUR POLICIES</p>
          <ol className="footer-list">
            <Link href="/privacy-policy" className="duration-300 ease-in-out hover:text-primary">
              <li className="mb-1">Privacy Policy</li>
            </Link>
            <Link href="/refund-policy" className="duration-300 ease-in-out hover:text-primary">
              <li className="mb-1">Refund Policy</li>
            </Link>
            <Link href="/shipping-policy" className="duration-300 ease-in-out hover:text-primary">
              <li className="mb-1">Shipping Policy</li>
            </Link>
            <Link href="/cookie-policy" className="duration-300 ease-in-out hover:text-primary">
              <li className="mb-1">Cookie Policy</li>
            </Link>
            <Link href="/terms-of-services" className="duration-300 ease-in-out hover:text-primary">
              <li className="mb-1">Terms of Services</li>
            </Link>
          </ol>
        </div>
        <div className="footer-col">
          <p className="mb-2 text-lg font-bold text-primary">CONTACT DETAILS</p>
          <Link href="/contact-us">
            <span className="inline-block px-6 py-2 font-medium text-center text-white duration-300 ease-in-out border-2 rounded-full hover:bg-white hover:text-primary border-primary bg-primary">
              Contact Us
            </span>
          </Link>
          <ol className="footer-list" style={{ display: 'flex', marginTop: '1rem', justifyContent: 'space-evenly' }}>
            <Link href="facebook.com">
              <li className="mb-1">
                <FaFacebook size={20} />
              </li>
            </Link>
            <Link href="twitter.com">
              <li className="mb-1">
                <FaTwitter size={20} />
              </li>
            </Link>
            <Link href="gmail.com">
              <li className="mb-1">
                <FaEnvelope size={20} />
              </li>
            </Link>
            <Link href="instagram.com">
              <li className="mb-1">
                <FaInstagram size={20} />
              </li>
            </Link>
          </ol>
        </div>
      </div>

      <div className="py-1.5 text-sm text-center text-white bg-primary">Designed and Developed by Zoto Webservices</div>
    </div>
  );
}

export default Footer;
