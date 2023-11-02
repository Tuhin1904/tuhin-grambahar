import React from 'react';
import './Navbar.css';
import MobileNavBar from './MobileNavBar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <MobileNavBar />
      <div className="nav-bar">
        <div className="nav-logo">
          <Link to="/">
            <img className="logo" src="grambahar_logo.ico" alt="grambahar-logo" />
          </Link>
        </div>
        {/* this section contains all the navigation links */}
        <div className="nav-menu">
          <div className="nav-item">Products</div>
          <div className="nav-item">About US</div>
          <div className="nav-item">Rewards</div>
          <div className="nav-item">Feedback</div>
          <div className="nav-item">Career</div>
          <div className="nav-item">Meet Our Farmers</div>
        </div>
        {/* nav-menu section ends here  */}
        {/* nav-bar-icons section starts here */}
        <div className="nav-icons">
          <div className="nav-icon-container">
            <svg className="icons icon-search" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle
                cx="9.75"
                cy="9.75"
                r="8.25"
                stroke="#7ab35b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.6 15.6001L22.5 22.5001"
                stroke="#7ab35b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="nav-icon-container">
            <Link to="/login">
              <svg className="icons icon-user" width="24" height="24" viewBox="0 0 30 30" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 6C12.24 6 10 8.24 10 11C10 13.76 12.24 16 15 16C17.76 16 20 13.76 20 11C20 8.24 17.76 6 15 6ZM15 8C16.656 8 18 9.344 18 11C18 12.656 16.656 14 15 14C13.344 14 12 12.656 12 11C12 9.344 13.344 8 15 8Z"
                  fill="#7ab35b"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 0C6.721 0 0 6.721 0 15C0 23.279 6.721 30 15 30C23.279 30 30 23.279 30 15C30 6.721 23.279 0 15 0ZM23.132 25.14C21.685 22.102 18.586 20 15 20C11.414 20 8.315 22.102 6.868 25.14C9.096 26.929 11.924 28 15 28C18.076 28 20.904 26.929 23.132 25.14ZM24.646 23.712C26.73 21.406 28 18.35 28 15C28 7.825 22.175 2 15 2C7.825 2 2 7.825 2 15C2 18.35 3.27 21.406 5.354 23.712C7.226 20.308 10.845 18 15 18C19.155 18 22.774 20.308 24.646 23.712Z"
                  fill="#7ab35b"
                />
              </svg>
            </Link>
          </div>

          <div className="nav-icon-container">
            <Link to="/cart">
              <svg className="icons icon-cart" width="25" height="24" viewBox="0 0 29 28" fill="none">
                <path
                  d="M24.0024 19.9524H8.00245C7.77266 19.9586 7.54776 19.8854 7.36563 19.7451C7.18349 19.6049 7.05524 19.4062 7.00245 19.1824L3.15245 2.72245L0.682447 1.95245C0.557691 1.91042 0.442434 1.84424 0.343256 1.75767C0.244079 1.67111 0.162922 1.56585 0.104422 1.44792C0.0459206 1.32999 0.0112206 1.2017 0.00230282 1.07035C-0.00661496 0.939014 0.010424 0.807203 0.052447 0.682447C0.09447 0.557691 0.160654 0.442434 0.24722 0.343256C0.333786 0.244079 0.439039 0.162922 0.55697 0.104422C0.6749 0.0459206 0.803198 0.0112206 0.934539 0.00230282C1.06588 -0.00661496 1.19769 0.010424 1.32245 0.052447L4.32245 1.05245C4.48266 1.09859 4.6288 1.18405 4.74756 1.30107C4.86632 1.41808 4.95394 1.56293 5.00245 1.72245L6.00245 5.95245H27.0024C27.1543 5.95163 27.3044 5.98542 27.4413 6.05127C27.5782 6.11711 27.6983 6.21327 27.7924 6.33245C27.8859 6.45263 27.9508 6.59258 27.982 6.74162C28.0132 6.89066 28.0099 7.04485 27.9724 7.19245L24.9724 19.1924C24.9188 19.4093 24.7942 19.6019 24.6184 19.7396C24.4426 19.8773 24.2258 19.9523 24.0024 19.9524ZM8.79245 17.9524H23.2224L25.7224 7.95245H6.44245L8.79245 17.9524Z"
                  fill="#7ab35b"
                />
                <path
                  d="M10.0024 27.9524C9.4091 27.9524 8.82908 27.7764 8.33573 27.4468C7.84238 27.1172 7.45787 26.6486 7.2308 26.1004C7.00374 25.5523 6.94433 24.9491 7.06009 24.3671C7.17584 23.7852 7.46156 23.2506 7.88112 22.8311C8.30068 22.4115 8.83523 22.1258 9.41717 22.01C9.99912 21.8943 10.6023 21.9537 11.1505 22.1808C11.6987 22.4078 12.1672 22.7923 12.4969 23.2857C12.8265 23.779 13.0024 24.3591 13.0024 24.9524C13.0024 25.748 12.6864 26.5111 12.1238 27.0737C11.5612 27.6363 10.7981 27.9524 10.0024 27.9524ZM10.0024 23.9524C9.80466 23.9524 9.61132 24.011 9.44687 24.1209C9.28242 24.2308 9.15425 24.387 9.07856 24.5697C9.00288 24.7524 8.98307 24.9535 9.02166 25.1475C9.06024 25.3415 9.15548 25.5196 9.29534 25.6595C9.43519 25.7994 9.61337 25.8946 9.80735 25.9332C10.0013 25.9718 10.2024 25.952 10.3851 25.8763C10.5679 25.8006 10.724 25.6724 10.8339 25.508C10.9438 25.3435 11.0024 25.1502 11.0024 24.9524C11.0024 24.6872 10.8971 24.4328 10.7095 24.2453C10.522 24.0578 10.2677 23.9524 10.0024 23.9524Z"
                  fill="#7ab35b"
                />
                <path
                  d="M22.0024 27.9524C21.4091 27.9524 20.8291 27.7764 20.3357 27.4468C19.8424 27.1172 19.4579 26.6486 19.2308 26.1004C19.0037 25.5523 18.9443 24.9491 19.0601 24.3671C19.1758 23.7852 19.4616 23.2506 19.8811 22.8311C20.3007 22.4115 20.8352 22.1258 21.4172 22.01C21.9991 21.8943 22.6023 21.9537 23.1505 22.1808C23.6987 22.4078 24.1672 22.7923 24.4969 23.2857C24.8265 23.779 25.0024 24.3591 25.0024 24.9524C25.0024 25.748 24.6864 26.5111 24.1238 27.0737C23.5612 27.6363 22.7981 27.9524 22.0024 27.9524ZM22.0024 23.9524C21.8047 23.9524 21.6113 24.011 21.4469 24.1209C21.2824 24.2308 21.1543 24.387 21.0786 24.5697C21.0029 24.7524 20.9831 24.9535 21.0217 25.1475C21.0602 25.3415 21.1555 25.5196 21.2953 25.6595C21.4352 25.7994 21.6134 25.8946 21.8074 25.9332C22.0013 25.9718 22.2024 25.952 22.3851 25.8763C22.5679 25.8006 22.724 25.6724 22.8339 25.508C22.9438 25.3435 23.0024 25.1502 23.0024 24.9524C23.0024 24.6872 22.8971 24.4328 22.7096 24.2453C22.522 24.0578 22.2677 23.9524 22.0024 23.9524Z"
                  fill="#7ab35b"
                />
                <path
                  d="M20.0024 11.9524H12.0024C11.7372 11.9524 11.4829 11.847 11.2953 11.6595C11.1078 11.472 11.0024 11.2176 11.0024 10.9524C11.0024 10.6872 11.1078 10.4328 11.2953 10.2453C11.4829 10.0577 11.7372 9.95239 12.0024 9.95239H20.0024C20.2677 9.95239 20.522 10.0577 20.7095 10.2453C20.8971 10.4328 21.0024 10.6872 21.0024 10.9524C21.0024 11.2176 20.8971 11.472 20.7095 11.6595C20.522 11.847 20.2677 11.9524 20.0024 11.9524Z"
                  fill="#7ab35b"
                />
                <path
                  d="M19.0024 15.9524H13.0024C12.7372 15.9524 12.4829 15.847 12.2953 15.6595C12.1078 15.472 12.0024 15.2176 12.0024 14.9524C12.0024 14.6872 12.1078 14.4328 12.2953 14.2453C12.4829 14.0577 12.7372 13.9524 13.0024 13.9524H19.0024C19.2677 13.9524 19.522 14.0577 19.7095 14.2453C19.8971 14.4328 20.0024 14.6872 20.0024 14.9524C20.0024 15.2176 19.8971 15.472 19.7095 15.6595C19.522 15.847 19.2677 15.9524 19.0024 15.9524Z"
                  fill="#7ab35b"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="useless"></div> */}
    </>
  );
}

export default NavBar;
